

export default function CardUsuario(usuario) {

  return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem",
        }}
      >
          <div
            key={usuario.id}
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              padding: "1rem",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={usuario.foto}
              alt={usuario.name}
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                marginBottom: "0.8rem",
                objectFit: "cover",
              }}
            />
            <h3 style={{ color: "#555"}}>{usuario.name}</h3>
            <p style={{ color: "#555", fontSize: "0.9rem" }}>📧 {usuario.email}</p>
            <p style={{ color: "#777", fontSize: "0.8rem" }}>{usuario.website}</p>
            <p style={{ marginTop: "0.8rem", fontStyle: "italic", color: "#333" }}>{usuario.company.catchPhrase}</p>
          </div>
      </div>
  );
}
