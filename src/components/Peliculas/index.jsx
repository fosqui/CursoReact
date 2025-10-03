import { useEffect, useState } from "react";
import axios from "axios";
import CardPelicula from "../CardPelicula";
import CircularProgress from '@mui/material/CircularProgress';

export default function Peliculas() {
  const [query, setQuery] = useState(""); 
  const [peliculas, setPeliculas] = useState([]);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
        buscarPeliculas();
    }, [query]);

    const buscarPeliculas = async () => {
        if (!query) return;
        setCargando(true);
        axios
            .get(`https://www.omdbapi.com/?s=${query}&apikey=a848bd7`)
            .then((response) => {
                setPeliculas(response.data.Search || []);
            })
            .catch((error) => {
                console.error("Error al traer películas:", error);
            }).finally(() => {
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

      <div>{cargando && <CircularProgress disableShrink />}</div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }}>
        {peliculas.length > 0 ? (
          peliculas.map((peli) => (
            <CardPelicula key={peli.imdbID} {...peli} />
          ))
        ) : (
          !cargando && <p>No se encontraron películas con "{query}".</p>
        )}
      </div>
    </div>
  );
}
