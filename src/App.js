import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';  // Importa el Footer

function App() {
  return (
    <div style={styles.pageContainer}>
      <Navbar />
      <div style={styles.bodyContainer}>
        <section id="home" style={styles.section}>
          <Home />
        </section>
        <section id="products" style={styles.section}>
          <Products />
        </section>
        <section id="about-us" style={styles.section}>
          <AboutUs />
        </section>
        <section id="contact" style={styles.section}>
          <Contact />
        </section>
      </div>
      <Footer />  {/* Agrega el Footer al final */}
    </div>
  );
}

const styles = {
  pageContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#f4f4f4',  // Fondo general de la página
  },
  bodyContainer: {
    width: '80%',
    margin: '0 auto',
    backgroundColor: '#fff',  // Fondo blanco para el contenido principal
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',  // Sombras suaves para que resalte
    padding: '2rem',  // Espaciado interno
    marginTop: '5rem',  // Deja un espacio con la barra de navegación
    marginBottom: '2rem',  // Espacio antes del footer
    border: '1px solid #ccc',  // Borde alrededor del contenido principal
  },
  section: {
    padding: '1rem 0',
  },
  footer: {
    backgroundColor: '#000',  // Fondo negro para el footer
    color: '#fff',  // Texto blanco
    padding: '2rem',
    textAlign: 'center',
    position: 'relative',
    width: '100%',
    bottom: 0,
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem',
    transition: 'color 0.3s ease',
  },
};

export default App;
