import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import { Link } from 'react-router-dom';
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar bg={theme == "light" ? 'light' : 'black'}>
      <Container>
        <Link to="/"><Navbar.Brand className={theme == "light" ? 'dark' : 'light'}>Мои Лабораторные Работы</Navbar.Brand></Link>
        <Link to="/redux"><Navbar.Brand className={theme == "light" ? 'dark' : 'light'}>Redux</Navbar.Brand></Link>
        <Button variant='daSnger' onClick={toggleTheme}>Сменить тему</Button>
      </Container>
    </Navbar>
  );
};

export default Header;