import './App.css'
import { Grid } from '@mui/material';
import Page from './components/page';
import CardProducto from './components/CardProducto';
import CardUsuario from './components/CardUsuario';
import Layout from './components/Layout';

function App() {

  return (
      <Page>
        <Grid container spacing={5}>
          <Grid size={9}>
            <CardProducto />
          </Grid>
          <Grid size={3}>
            <CardUsuario />
          </Grid>
          <Grid size={12}>
            <Layout />
          </Grid>
        </Grid>
      </Page>
  )
}

export default App;
