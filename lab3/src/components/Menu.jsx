import React from 'react';
import { Nav, ListGroup } from 'react-bootstrap';

const Menu = ({ labs, onLabSelect }) => {
  
  return (
    <ListGroup>
      {labs.map((lab) => (
        <ListGroup.Item action key={lab.id} onClick={() => onLabSelect(lab.id)}>
          {lab.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Menu;