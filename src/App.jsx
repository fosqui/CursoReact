import './App.css'
import Page from './components/page';
import { Route, Routes } from 'react-router-dom';
import Inicio from './components/Inicio';
import Peliculas from './components/Peliculas';
import Usuarios from './components/Usuarios';
import DetallePelicula from './components/DetallePelicula';

function App() {

  return (
    <Page>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/usuarios' element={<Usuarios />} />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path="/peliculas/:id" element={<DetallePelicula />} /> 
      </Routes>
    </Page>
  )
}

export default App;
