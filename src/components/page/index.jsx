import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function Page({children}) {
  return (
    <>
      {/* Deja el header y el footer fijos en todas las páginas */}
      <Navbar />
      <main style={{ paddingTop: '20px', paddingBottom: '20px', minHeight: '80vh' }}>
          {children}
      </main>
      <Footer />
    </>
  );
}