import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>Síguenos en nuestras redes sociales</p>
      <div style={styles.socialIcons}>
        <a href="https://www.instagram.com" style={styles.link}>Instagram</a>
        <a href="https://www.facebook.com" style={styles.link}>Facebook</a>
        <a href="https://www.twitter.com" style={styles.link}>Twitter</a>
        <a href="https://www.whatsapp.com" style={styles.link}>WhatsApp</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#2c2c2c',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
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
  }
};

export default Footer;
