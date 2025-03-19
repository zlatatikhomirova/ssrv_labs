import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { ThemeContext } from './ThemeContext';

const Menu = ({ labs, onLabSelect }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ListGroup className={theme == "light" ? 'light' : 'dark'}>
      {labs.map((lab) => (
        <ListGroup.Item action
          className={theme == "light" ? 'light' : 'dark'}
          key={lab.id}
          onClick={() => onLabSelect(lab.id)}>
          {lab.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Menu;