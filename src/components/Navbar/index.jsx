import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

export default function Navbar() {
  return (
    <Grid container
      compomnent="header"
      direction="row"
      sx={{
        backgroundColor: "#df5f5fff",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
      }}>
      <Grid size={2}>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
      </Grid>
        <Grid size={8}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ShoppingOnline
          </Typography>
        </Grid>
        <Grid size={2}>
          <Button color="inherit">Iniciar Sesion</Button>
        </Grid>
    </Grid >
  );
}
