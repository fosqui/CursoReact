import { useNavigate } from "react-router-dom";

export default function CardPelicula(pelicula) {
  const navigate = useNavigate();

  //* Maneja el clic en la tarjeta para navegar a la página de detalles
  const handleCardClick = () => {
    navigate(`/peliculas/${pelicula.imdbID}`);
  };

  return (
    <div
      onClick={handleCardClick}
      style={{
        maxWidth: "200px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <img
        src={pelicula.Poster !== "N/A" ? pelicula.Poster : "https://via.placeholder.com/200x300?text=Sin+Imagen"}
        alt={pelicula.Title}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h4>{pelicula.Title}</h4>
      <p>{pelicula.Year}</p>
    </div>
  );
}
