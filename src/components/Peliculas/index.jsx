import { useEffect, useState } from "react";
import axios from "axios";
import CardPelicula from "../CardPelicula";
import CircularProgress from '@mui/material/CircularProgress';

export default function Peliculas() {
  const [query, setQuery] = useState(""); 
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  // Realiza la búsqueda cada vez que el query cambia y verifica que tenga al menos 3 caracteres
  useEffect(() => {
    if (query.length >= 3) {
      buscarPeliculas();
      setMensaje(""); 
    } else if (query.length > 0) {
      setMensaje("Por favor, ingresa al menos 3 caracteres para buscar.");
      setPeliculas([]); 
    }
  }, [query]);

  // Llama a la API para buscar películas según el query y establece 1 segundo de carga
  const buscarPeliculas = async () => {
    setCargando(true);
    axios
      .get(`https://www.omdbapi.com/?s=${query}&apikey=a848bd7`)
      .then((response) => {
        setTimeout(() => {
          setPeliculas(response.data.Search || []);
          setCargando(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error al traer películas:", error);
        setCargando(false);
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🎥 Buscador de Películas</h2>
      <input
        type="text"
        placeholder="Escribe un título..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "0.5rem",
          width: "300px",
          marginBottom: "1rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      />

      {mensaje && <p style={{ color: "white" }}>{mensaje}</p>}

      <div>{cargando && <CircularProgress disableShrink />}</div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.5rem", 
          justifyItems: "center", 
          maxWidth: "1400px", 
          margin: "0 auto", 
        }}
      >
        {peliculas.length > 0 ? (
          peliculas.map((peli) => (
            <CardPelicula key={peli.imdbID} {...peli} />
          ))
        ) : (
          !cargando && query.length >= 3 && <p>No se encontraron películas con "{query}".</p>
        )}
      </div>
    </div>
  );
}
