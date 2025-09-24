import { useEffect, useState } from "react"
import axios from "axios"
import { CircularProgress, Typography } from "@mui/material";
import { Box, Grid } from "@mui/system";
import { Button } from "@mui/material";

export default function CardProducto() {
    const [prodAxios, setProdAxios] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [mostrarMasInfo, setMostrarMasInfo] = useState([null]);

    useEffect(() => {
        llamadaAxios();
    }, []);

    const llamadaAxios = async () => {
        axios
            .get("https://fakestoreapi.com/products/")
            .then((response) => {
                console.log(response.data);
                setProdAxios(response.data);
            })
            .catch((error) => {
                console.log(error);
                setError(error);
            }).finally(() => {
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
        return <Typography>La pagina tiene un error</Typography>;
    }

    return (
        <Box sx={{ padding: 15 }}>
            <h2> Lista de Productos</h2>
            <Grid container spacing={2} justifyContent={"center"}>
                {prodAxios.map((prod) => (
                    <Grid size={5} key={prod.id}>
                        <Box sx={{ border: "1px solid #ccc", padding: 2, borderRadius: 2 }}>
                            <Typography variant="h6">{prod.title}</Typography>
                            <Typography variant="body1">{prod.description}</Typography>
                            {mostrarMasInfo === prod.id && (
                                <Box sx={{ marginTop: 2 }}>
                                    <Typography variant="body2">Precio: {prod.price}</Typography>
                                    <Typography variant="body2">Categoria: {prod.category}</Typography>
                                    <Typography variant="body2">Calificacion: {prod.rating.rate}</Typography>
                                    <img
                                        src={prod.image}
                                        alt={prod.title}
                                        style={{
                                            width: "100%",
                                            height: "200px",
                                            objectFit: "contain",
                                            marginBottom: "10px",
                                        }}
                                    />                                
                                </Box>
                            )}
                            <Button onClick={() => mostrarMas(prod.id)}>
                                {mostrarMasInfo === prod.id ? "Mostrar menos" : "Mostrar más"}
                            </Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
