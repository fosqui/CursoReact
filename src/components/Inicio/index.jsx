import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CardPelicula from "../CardPelicula";
import CircularProgress from "@mui/material/CircularProgress";

export default function Inicio() {
    const [peliculas, setPeliculas] = useState([]);
    const [cargando, setCargando] = useState(true); 

    useEffect(() => {
        setCargando(true); 
        fetch(`https://www.omdbapi.com/?s=star&apikey=a848bd7`)
            .then(res => res.json())
            .then(data => {
                if (data.Search) {
                    const shuffled = data.Search.sort(() => 0.5 - Math.random());
                    setPeliculas(shuffled.slice(0, 5));
                }
            })
            .catch((error) => {
                console.error("Error al obtener las películas:", error);
            })
            .finally(() => {
                setCargando(false); 
            });
    }, []);

    return (
        <div>
            <div>
                <h1>Bienvenido a APPelis</h1>
                <p>El sitio donde podrás descubrir toda la informacion acerca tus peliculas favoritas y ver las reseñas de nuestros expertos.</p>
                <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
                    <Link to="/usuarios" style={{ padding: "1rem", background: "#007BFF", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
                        👤 Ver Usuarios
                    </Link>
                    <Link to="/peliculas" style={{ padding: "1rem", background: "#28A745", color: "#fff", borderRadius: "6px", textDecoration: "none" }}>
                        🎥 Ver Películas
                    </Link>
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
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                                gap: "1.5rem",
                                paddingRight: '150px',
                                paddingLeft: '150px',
                                paddingBottom: '50px'
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