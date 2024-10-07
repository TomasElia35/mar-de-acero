import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Importamos las imágenes
import producto1 from '../assets/images/producto1.jpg';
import producto2 from '../assets/images/producto2.jpg';
import producto3 from '../assets/images/producto3.jpg';

const Products = () => {
  const [hoverButton, setHoverButton] = useState(false);
  const [inView, setInView] = useState(false); 
  const ref = useRef(null); 

  // Lista de productos
  const products = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: '$10',
      image: producto1,
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: '$20',
      image: producto2,
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: '$30',
      image: producto3,
    },
  ];

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
      <h2 style={styles.title}>Productos</h2>
      <div style={styles.grid}>
        {products.map((product, index) => (
          <motion.div
            key={index}
            style={styles.card}
            initial={{ opacity: 0, y: 20 }} 
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }} 
            transition={{ duration: 0.5, delay: index * 0.1 }} 
            whileHover={{ scale: 1.1 }} 
          >
            <img src={product.image} alt={product.name} style={styles.image} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </motion.div>
        ))}

        <motion.button
          style={{
            ...styles.button,
            ...(hoverButton ? styles.buttonHover : {}),
          }}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
          initial={{ opacity: 0 }} 
          animate={inView ? { opacity: 1 } : { opacity: 0 }} 
          transition={{ duration: 0.5, delay: products.length * 0.1 }} 
        >
          Ver más productos
        </motion.button>
      </div>
    </div>
  );
};

// Estilos
const styles = {
  container: {
    backgroundColor: '#2c2c2c', 
    padding: '3rem',
    minHeight: '100vh', // Asegúrate de que el contenedor ocupe todo el alto
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
  },
  card: {
    backgroundColor: '#f8f8f8',
    padding: '1rem',
    borderRadius: '8px',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    marginBottom: '1rem',
    transition: 'transform 0.3s ease',
  },
  button: {
    gridColumn: '1 / -1',
    padding: '0.7rem 2rem',
    marginTop: '40px', 
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '5px',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)',
  },
};

export default Products;
