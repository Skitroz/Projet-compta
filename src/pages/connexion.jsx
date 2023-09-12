import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";

export default function Connexion() {
    const [values, setValues] = useState({
        email: "",
        mdp: "",
    });

    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post("http://localhost:5000/connexion", values)
            .then((res) => {
                console.log("Connexion réussie");
                login();
                navigate("/tableau-de-bord", { state: { userId: res.data.userId } });
            })
            .catch((err) => {
                console.error("Erreur lors de la connexion", err);
                setError("Adresse e-mail ou mot de passe incorrect");
            });
    };

    return (
        <>
            <header>
                <nav className="py-3 shadow bg-background absolute w-full z-50">
                    <ul className="flex justify-between items-center text-text px-10">
                        <li><a href="/" className="font-bold text-xl">ReactFinanz</a></li>
                        <li><a href="#" className="hover:text-blue-600 transition-all delay-100 text-lg">À propos</a></li>
                        <div className="flex gap-6">
                            <li><a href="/connexion" className="hover:text-blue-600 transition-all delay-100 text-lg">Connexion</a></li>
                            <li><a href="/inscription" className="p-2 rounded hover:bg-blue-900 transition-all delay-100 bg-blue-800 text-white text-lg px-4">Inscription</a></li>
                        </div>
                    </ul>
                </nav>
            </header>
            <main onSubmit={handleSubmit} className="h-screen flex flex-col justify-center items-center">
                <h1 className="text-blue-500 text-3xl font-bold my-10">Connexion</h1>
                <form method="post" className="bg-white p-8 shadow-md rounded-lg">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input type="text" name="email" value={values.email} className="border border-gray-300 rounded-lg p-2 w-72" onChange={handleChange} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="mdp">Mot de passe</label>
                            <input type="password" name="mdp" value={values.mdp} className="border border-gray-300 rounded-lg p-2 w-72" onChange={handleChange} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="rounded-lg bg-blue-800 py-2 mt-16 text-white transition-all delay-100 hover:bg-blue-900 w-40">Se connecter</button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </main>
        </>
    )
}
