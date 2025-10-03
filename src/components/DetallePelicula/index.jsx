import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';

const DetallePelicula = () => {
    const { id } = useParams();
    const [pelicula, setPelicula] = useState(null);
    const [cargando, setCargando] = useState(true);
    
    // Realiza la petición para obtener los detalles de la película con el id recibido
    useEffect(() => {
        const fetchPelicula = async () => {
            try {
                const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a848bd7`);
                setPelicula(response.data);
            } catch (error) {
                console.error("Error al traer la película:", error);
            } finally {
                setCargando(false);
            }
        };

        fetchPelicula();
    }, [id]);

    if (cargando) return <CircularProgress disableShrink />;
    if (!pelicula || pelicula.Response === "False") return <div>No se encontró la película.</div>;

    return (
        <div style={{ maxWidth: 800, margin: "auto", padding: 20 }}>
            <h1>{pelicula.Title}</h1>
            <img
                src={pelicula.Poster !== "N/A" ? pelicula.Poster : "https://via.placeholder.com/300x450?text=Sin+Imagen"}
                alt={pelicula.Title}
                style={{ width: 300, borderRadius: 8 }}
            />
            <p><strong>Descripción:</strong> {pelicula.Plot}</p>
            <p><strong>Fecha de estreno:</strong> {pelicula.Released}</p>
            <p><strong>Género:</strong> {pelicula.Genre}</p>
            <p><strong>Duración:</strong> {pelicula.Runtime}</p>
            <p><strong>Director:</strong> {pelicula.Director}</p>
            <p><strong>Actores:</strong> {pelicula.Actors}</p>
            <p><strong>Calificación:</strong> {pelicula.imdbRating} / 10</p>
            <p><strong>Votos:</strong> {pelicula.imdbVotes}</p>
            <p><strong>Idioma:</strong> {pelicula.Language}</p>
            <p><strong>País:</strong> {pelicula.Country}</p>
        </div>
    );
};

export default DetallePelicula;