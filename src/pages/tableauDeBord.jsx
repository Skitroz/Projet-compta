import React, { useEffect, useState } from "react";
import { useAuth } from "./authContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function TableauDeBord() {
    const { isLoggedIn } = useAuth();
    const [prenom, setPrenom] = useState(""); // État pour stocker le prénom de l'utilisateur connecté

    useEffect(() => {
        if (isLoggedIn) {
            // Effectuez une requête pour récupérer les informations de l'utilisateur connecté
            axios
                .get("/api/user")
                .then((res) => {
                    setPrenom(res.data.prenom); // Mettez à jour l'état avec le prénom récupéré
                })
                .catch((err) => {
                    console.error("Erreur lors de la récupération du prénom", err);
                    // Vous pouvez rediriger l'utilisateur vers une page d'erreur ou gérer l'erreur autrement
                });
        }
    }, [isLoggedIn]);

    if (!isLoggedIn) {
        return <Navigate to="/connexion" />;
    }

    return (
        <div>
            <h1>Bienvenue, {prenom}!</h1> {/* Affichez le prénom de l'utilisateur */}
            {/* Autre contenu du tableau de bord */}
        </div>
    );
}