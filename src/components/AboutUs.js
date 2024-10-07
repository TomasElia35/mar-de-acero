import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Importa la imagen desde la ruta correcta
import nosotros from '../assets/images/nosotros.jpg';

const AboutUs = () => {
  const [inView, setInView] = useState(false); 
  const ref = useRef(null); 

  // useEffect para detectar cuando el contenedor está en vista
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        // Verificar si el contenedor está dentro de la vista
        setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamar a la función para verificar al cargar la página

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={styles.container} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.8 }} 
      >
        Sobre Nosotros
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 50 }} 
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
        transition={{ duration: 0.8 }} 
      >
        Somos un emprendimiento familiar dedicado a ofrecer productos de alta calidad.
        Nuestro compromiso es brindar un excelente servicio al cliente.
      </motion.p>

      {/* Mostrar la imagen importada */}
      <motion.img 
        src={nosotros} // Usar la variable importada
        alt="Nuestro equipo" 
        style={styles.image} 
        initial={{ opacity: 0, scale: 0.8 }} 
        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }} 
        transition={{ duration: 0.8 }} 
      />
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
  },
  image: {
    width: '100%', // Se ajusta al ancho del contenedor
    height: 'auto', // Mantiene la relación de aspecto
    borderRadius: '10px',
    marginTop: '1rem',
  }
};

export default AboutUs;
