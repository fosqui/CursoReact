
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
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
        <Grid size={7}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Grid>
        <Grid size={3}>
          <Button color="inherit">Iniciar Sesion</Button>
        </Grid>
    </Grid >
  );
}
