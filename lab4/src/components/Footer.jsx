import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Container } from 'react-bootstrap';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`text-center py-3 ${theme == "light" ? 'light' : 'black'}`}>
      <Container>
        &copy; {new Date().getFullYear()} Мои Лабы
      </Container>
    </footer>
  );
};

export default Footer;