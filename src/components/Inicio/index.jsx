import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import CardPelicula from "../CardPelicula";
import CircularProgress from "@mui/material/CircularProgress";
import { Button } from "@mui/material";

export default function Inicio() {
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(true);

    // Peliculas que se mostraran como las destacadas, seleccionadas por el encargado
    const idsPeliculas = ["tt0111161", "tt0068646", "tt0071562", "tt0468569", "tt0050083"];


    useEffect(() => {
        fetchPeliculas();
    }, []);

    // Realiza un fetch sobre las peliculas destacadas y las carga en el estado
    const fetchPeliculas = async () => {
        setCargando(true);
        try {
            const peliculasFijas = await Promise.all(
                idsPeliculas.map(async (id) => {
                    const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=a848bd7`);
                    return response.data;
                })
            );
            setPeliculas(peliculasFijas);
        } catch (error) {
            console.error("Error al obtener las películas:", error);
        } finally {
            setCargando(false);
        }
    };


    return (
        <div>
            <div>
                <h1>Bienvenido a APPelis</h1>
                <p>El sitio donde podrás descubrir toda la informacion acerca tus peliculas favoritas y ver las reseñas de nuestros expertos.</p>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <Button>
                        <Link to="/usuarios" style={{ padding: "1rem", background: "#007BFF", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
                            👤 Ver Reseñas
                        </Link>
                    </Button>
                    <Button>
                        <Link to="/peliculas" style={{ padding: "1rem", background: "#28A745", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
                            🎥 Ver Películas
                        </Link>
                    </Button>
                </div>
                <div>
                    <h3 style={{ padding: "50px", textAlign: "center" }}>Estas son las películas destacadas de la semana:</h3>
                    {cargando ? (
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <div
                            style={{
                                marginTop: "2rem",
                                display: "flex",
                                justifyContent: "center",
                                gap: "0.75rem",
                                flexWrap: "wrap",
                                padding: "0 10px",
                            }}
                        >
                            {peliculas.map((peli) => (
                                <CardPelicula key={peli.imdbID} {...peli} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}