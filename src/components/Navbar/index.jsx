import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <Grid container
      component="header"
      direction="row"
      sx={{
        padding: "10px",
        backgroundColor: "#df5f5fff",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
      }}>
      <Grid size={2}>
        <Button
          component={Link}
          to="/usuarios"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: '#ffcccb',
            },
          }}
        >
          Reseñas
        </Button>
      </Grid>
      <Grid size={8}>
        <Typography
          variant="h4"
          component={Link}
          to="/"
          sx={{
            fontWeight: 'bold',
            flexGrow: 1,
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: '#ffcccb',
            },
            '&:active': {
              color: 'inherit',
            },
          }}
        >
          APPelis
        </Typography>
      </Grid>
      <Grid size={2}>
        <Button
          component={Link}
          to="/peliculas"
          sx={{
            textDecoration: 'none',
            color: 'inherit',
            '&:hover': {
              color: '#ffcccb',
            },
          }}
        >
          Peliculas
        </Button>
      </Grid>
    </Grid >
  );
}
