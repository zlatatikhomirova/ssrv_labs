import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3">
      <Container>
        &copy; {new Date().getFullYear()} Мои Лабы
      </Container>
    </footer>
  );
};

export default Footer;