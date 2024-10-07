import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'; // Importar motion
import inicio from '../assets/images/inicio-bg.jpg';

const Home = () => {
  // Variantes para la animación
  const variants = {
    hidden: { opacity: 0, y: 50 }, // Estado oculto
    visible: { opacity: 1, y: 0 },   // Estado visible
  };

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
      <motion.h1 
        style={styles.title} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} // Cambiar la animación basada en la visibilidad
        variants={variants} 
        transition={{ duration: 0.6 }} // Duración de la animación
      >
        Bienvenido a Nuestra Tienda
      </motion.h1>
      <motion.p 
        style={styles.description} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} // Cambiar la animación basada en la visibilidad
        variants={variants} 
        transition={{ duration: 0.6, delay: 0.2 }} // Delay para el texto
      >
        Encuentra los mejores productos en nuestro catálogo.
      </motion.p>
      <motion.img 
        src={inicio} 
        alt="Imagen de Inicio" 
        style={styles.image} 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"} // Cambiar la animación basada en la visibilidad
        variants={variants} 
        transition={{ duration: 0.6, delay: 0.4 }} // Delay para la imagen
      />
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden', // Asegúrate de que la imagen no exceda el contenedor
  },
  title: {
    color: '#fff',
    fontSize: '3rem',
    position: 'absolute',
    top: '20%', // Ajusta la posición vertical del título
    zIndex: 1,
    textAlign: 'center', // Centra el texto
  },
  description: {
    color: '#fff',
    fontSize: '1.5rem',
    position: 'absolute',
    top: '30%', // Ajusta la posición vertical del párrafo
    zIndex: 1,
    textAlign: 'center', // Centra el texto
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%', // Ocupará todo el ancho
    height: '100%', // Ocupará toda la altura
    objectFit: 'cover', // Mantiene la relación de aspecto de la imagen
    zIndex: 0, // Coloca la imagen detrás del texto
  },
};

export default Home;
