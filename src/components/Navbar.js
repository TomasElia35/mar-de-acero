import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [hover, setHover] = useState(false);

  return (
    <nav
      style={{
        ...styles.nav,
        backgroundColor: hover ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ul style={styles.ul}>
        <li style={styles.li}><Link to="home" smooth={true} duration={500}>Inicio</Link></li>
        <li style={styles.li}><Link to="products" smooth={true} duration={500}>Productos</Link></li>
        <li style={styles.li}><Link to="about-us" smooth={true} duration={500}>Nosotros</Link></li>
        <li style={styles.li}><Link to="contact" smooth={true} duration={500}>Contacto</Link></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '80px', // Aumentamos la altura de la barra de navegación
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center', // Alineamos el contenido verticalmente
    transition: 'background-color 0.3s ease',
  },
  ul: {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    padding: 0,
    margin: 0,
  },
  li: {
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1.2rem', // Aumentamos el tamaño de la fuente
  },
};

export default Navbar;
