const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactfinanz",
});

app.post("/inscription", (req, res) => {
    const { nom, prenom, email, mdp } = req.body;

    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) {
            console.error('Erreur lors de la génération du sel :', err);
            res.status(500).json({ message: "Erreur lors de l'inscription" });
            return;
        }

        bcrypt.hash(mdp, salt, (err, hash) => {
            if (err) {
                console.error('Erreur lors du hachage du mot de passe :', err);
                res.status(500).json({ message: "Erreur lors de l'inscription" });
                return;
            }

            const query =
                "INSERT INTO utilisateurs (nom, prenom, email, mdp) VALUES (?, ?, ?, ?)";
            db.query(query, [nom, prenom, email, hash], (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Erreur lors de l'inscription" });
                } else {
                    console.log("Inscription réussie");
                    res.status(200).json({ message: "Inscription réussie" });
                }
            });
        });
    });
});

app.post("/connexion", (req, res) => {
    const { email, mdp } = req.body;

    const query = "SELECT id, prenom, mdp FROM utilisateurs WHERE email = ?";
    db.query(query, [email], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ message: "Erreur lors de la connexion" });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ message: "Adresse e-mail incorrecte" });
        } else {
            const hashedPassword = results[0].mdp;
            bcrypt.compare(mdp, hashedPassword, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ message: "Erreur lors de la connexion" });
                    return;
                }

                if (result) {
                    const userId = results[0].id;
                    const prenom = results[0].prenom;
                    res.status(200).json({ message: "Connexion réussie", userId, prenom });
                } else {
                    res.status(401).json({ message: "Mot de passe incorrect" });
                }
            });
        }
    });
});

app.get("/get-prenom", (req, res) => {
    const { userId } = req.query;

    const query = "SELECT prenom FROM utilisateurs WHERE id = ?";
    db.query(query, [userId], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erreur lors de la récupération du prénom" });
        } else {
            const prenom = result[0].prenom;
            res.json({ prenom });
        }
    });
});


app.listen(port, () => {
    console.log(`Serveur en ligne sur le port: ${port}`);
});
