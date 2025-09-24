import { useEffect, useState } from "react";
import axios from "axios";
import { Button, CircularProgress, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";

export default function CardUsuario() {
    const [userAxios, setUserAxios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [mostrarMasInfo, setMostrarMasInfo] = useState([null]);

    useEffect(() => {
        llamadaAxios();
    }, []);

    const llamadaAxios = async () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                console.log(response.data);
                setUserAxios(response.data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            })
            .finally(() => {
                setCargando(false);
            });
    };

    const mostrarMas = (id) => {
        setMostrarMasInfo(mostrarMasInfo === id ? null : id);
    };

    if (cargando) {
        return <CircularProgress disableShrink />;
    }
    if (error) {
        return <Typography>La página tiene un error</Typography>;
    }

    return (
        <Box sx={{ padding: 15 }}>
            <h2> Lista de Proveedores</h2>
            <Grid container spacing={2} justifyContent={"center"}>
                {userAxios.map((user) => (
                    <Grid item xs={12} sm={6} md={4} key={user.id}>
                        <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2 }}>
                            <Typography variant="h6">{user.name}</Typography>
                            <Typography variant="body1">{user.email}</Typography>
                            {mostrarMasInfo === user.id && (
                                <Box sx={{ marginTop: 2 }}>
                                    <Typography variant="body2">Teléfono: {user.phone}</Typography>
                                    <Typography variant="body2">Sitio web: {user.website}</Typography>
                                    <Typography variant="body2">
                                        Dirección: {user.address.street}, {user.address.city}
                                    </Typography>
                                    <Typography variant="body2">
                                        Compañía: {user.company.name}
                                    </Typography>
                                </Box>
                            )}
                            <Button onClick={() => mostrarMas(user.id)}>
                                {mostrarMasInfo === user.id ? "Mostrar menos" : "Mostrar más"}
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}