import { useEffect, useState } from "react";
import axios from "axios";
import CardUsuario from "../CardUsuario";
import CircularProgress from "@mui/material/CircularProgress";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true); 

  useEffect(() => {
    buscarUsuarios();
  }, []);

  const buscarUsuarios = async () => {
    setCargando(true);
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        const usuariosConFoto = response.data.map((user, index) => ({
          ...user,
          foto: `https://randomuser.me/api/portraits/men/${index + 10}.jpg`,
        }));
        setUsuarios(usuariosConFoto);
      })
      .catch((error) => {
        console.error("Error al obtener los usuarios:", error);
      })
      .finally(() => {
        setCargando(false); 
      });
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>👤 Críticos de Cine</h2>
      <p style={{ textAlign: "center", marginBottom: "2rem" }}>
        Conocé lo que nuestros expertos opinan sobre las películas más destacadas.
      </p>
      {cargando ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "200px" }}>
          <CircularProgress />
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {usuarios.map((user) => (
            <CardUsuario key={user.id} {...user} />
          ))}
        </div>
      )}
    </div>
  );
}
