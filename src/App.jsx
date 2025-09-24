import './App.css'
import { Grid } from '@mui/material';
import Page from './components/page';
import CardProducto from './components/CardProducto';
import CardUsuario from './components/CardUsuario';
import Layout from './components/Layout';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';

function App() {

  return (
    <Page>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/usuarios' element={<CardUsuario />} />
        <Route path='/productos' element={<CardProducto />} />

        {/* <Grid container spacing={5}>
          <Grid size={9}>
            <CardProducto />
          </Grid>
          <Grid size={3}>
            <CardUsuario />
          </Grid>
          <Grid size={12}>
            <Layout />
          </Grid>
        </Grid> */}
      </Routes>
    </Page>
  )
}

export default App;
