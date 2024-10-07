import React from 'react';
import { motion } from 'framer-motion';  // Importar Framer Motion
import inicio from '../assets/images/nosotros.jpg';  // Importar la imagen

const AboutUs = () => {
  // Variantes para animación al hacer scroll
  const variants = {
    hidden: { opacity: 0, y: 50 },  // Oculto y desplazado hacia abajo
    visible: { opacity: 1, y: 0 },  // Visible y en su posición original
  };

  return (
    <div style={styles.container}>
      {/* Título con animación */}
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}  // Permitir que la animación se repita al hacer scroll
        variants={variants}
        transition={{ duration: 0.6 }}  // Duración de la animación
        style={styles.heading}
      >
        Sobre Nosotros
      </motion.h2>

      {/* Texto con animación */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}  // Animar cada vez que se vea la sección
        variants={variants}
        transition={{ duration: 0.6, delay: 0.2 }}  // Delay para el texto
      >
        Somos un emprendimiento familiar dedicado a ofrecer productos de alta calidad.
        Nuestro compromiso es brindar un excelente servicio al cliente.
      </motion.p>

      {/* Imagen con animación */}
      <motion.img
        src={inicio} 
        alt="Nuestro equipo" 
        style={styles.image}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}  // Animar cada vez que se vea la imagen
        variants={variants}
        transition={{ duration: 0.6, delay: 0.4 }}  // Delay para la imagen
      />
    </div>
  );
};

// Estilos actualizados para hacer la imagen más grande
const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
  },
  heading: {
    color: '#333',
    marginBottom: '1rem',
  },
  image: {
    width: '600px',  // Aumentamos el tamaño de la imagen
    height: 'auto',
    borderRadius: '10px',
    marginTop: '1rem',
  },
};

export default AboutUs;
