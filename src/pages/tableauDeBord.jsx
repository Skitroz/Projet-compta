import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./authContext";
import { useLocation } from "react-router-dom";

export default function TableauDeBord() {
    const [prenom, setPrenom] = useState("");
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const userId = location.state.userId;

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/connexion");
            return;
        }

        const fetchPrenom = async () => {
            try {
                const response = await axios.get("http://localhost:5000/get-prenom");
                setPrenom(response.data.prenom);
            } catch (error) {
                console.error("Erreur lors de la récupération du prénom", error);
            }
        };
        fetchPrenom();
    }, [isLoggedIn, navigate]);

    return (
        <div>
            <h1>Bienvenue, {prenom} !</h1>
        </div>
    );
}
