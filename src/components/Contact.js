import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importar motion

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '', apellido: '', ciudad: '', correo: '', mensaje: ''
  });

  const [hoverButton, setHoverButton] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Estado para el mensaje de éxito

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías manejar el envío del formulario
    console.log(formData);

    // Mostrar mensaje de éxito
    setSuccessMessage('¡Mensaje enviado con éxito!'); // Mensaje de éxito
    setFormData({ nombre: '', apellido: '', ciudad: '', correo: '', mensaje: '' }); // Limpiar el formulario
    setTimeout(() => {
      setSuccessMessage(''); // Ocultar el mensaje después de 3 segundos
    }, 3000);
  };

  // Variantes para la animación
  const variants = {
    hidden: { opacity: 0, y: 20 }, // Estado oculto
    visible: { opacity: 1, y: 0 },   // Estado visible
  };

  return (
    <div style={styles.container}>
      <motion.h2 
        style={styles.heading} 
        initial="hidden" 
        animate="visible" 
        variants={variants} 
        transition={{ duration: 0.6 }} // Duración de la animación
      >
        Contacto
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit} 
        style={styles.form} 
        initial="hidden" 
        animate="visible" 
        variants={variants} 
        transition={{ duration: 0.6, delay: 0.2 }} // Delay para el formulario
      >
        <input 
          type="text" 
          name="nombre" 
          placeholder="Nombre" 
          value={formData.nombre} 
          onChange={handleChange} 
          style={styles.input} 
        />
        <input 
          type="text" 
          name="apellido" 
          placeholder="Apellido" 
          value={formData.apellido} 
          onChange={handleChange} 
          style={styles.input} 
        />
        <input 
          type="text" 
          name="ciudad" 
          placeholder="Ciudad" 
          value={formData.ciudad} 
          onChange={handleChange} 
          style={styles.input} 
        />
        <input 
          type="email" 
          name="correo" 
          placeholder="Correo electrónico" 
          value={formData.correo} 
          onChange={handleChange} 
          style={styles.input} 
        />
        <textarea 
          name="mensaje" 
          placeholder="Tu mensaje" 
          value={formData.mensaje} 
          onChange={handleChange} 
          style={styles.textarea} 
        />
        <motion.button 
          type="submit" 
          style={{ 
            ...styles.button, 
            ...(hoverButton ? styles.buttonHover : {}) 
          }}
          onMouseEnter={() => setHoverButton(true)}
          onMouseLeave={() => setHoverButton(false)}
          initial="hidden" 
          animate="visible" 
          variants={variants} 
          transition={{ duration: 0.6, delay: 0.4 }} // Delay para el botón
        >
          Enviar
        </motion.button>
      </motion.form>
      
      {/* Mensaje de éxito */}
      {successMessage && 
        <motion.div 
          style={styles.successMessage} 
          initial="hidden" 
          animate="visible" 
          variants={variants} 
          transition={{ duration: 0.6, delay: 0.6 }} // Delay para el mensaje de éxito
        >
          {successMessage}
        </motion.div>
      }
    </div>
  );
};

const styles = {
  container: {
    padding: '3rem',
    textAlign: 'center',
    backgroundColor: '#2c2c2c', // Fondo gris oscuro
    minHeight: '100vh', // Asegúrate de que el contenedor ocupe todo el alto
  },
  heading: {
    color: '#fff', // Color del encabezado
    marginBottom: '2rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    padding: '0.7rem',
    margin: '0.5rem',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'border 0.3s ease',
  },
  textarea: {
    padding: '0.7rem',
    margin: '0.5rem',
    width: '80%',
    maxWidth: '400px',
    height: '100px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    transition: 'border 0.3s ease',
  },
  button: {
    padding: '0.7rem 2rem',
    backgroundColor: '#007bff', // Color azul
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '1rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease', // Transición suave
  },
  buttonHover: {
    backgroundColor: '#0056b3',  // Color más oscuro al hacer hover
    transform: 'scale(1.05)', // Efecto de aumento al hacer hover
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Sombra al hacer hover
  },
  successMessage: {
    marginTop: '1rem',
    color: 'green', // Color del mensaje de éxito
    fontSize: '1.2rem',
  }
};

export default Contact;
