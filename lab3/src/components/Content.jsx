import React from 'react';
import { Card } from 'react-bootstrap';

const displayLab = (item) => {
  if (React.isValidElement(item)) {
    return item; 
  }

  if (typeof item === 'string') {
    return <li>{item}</li>; 
  }

  if (typeof item === 'object' && item !== null) {
    return (
      <ul>
        {Object.keys(item).map((el, index) => {
          return <React.Fragment key={index}>{displayLab(item[el])}</React.Fragment>;
        })}
      </ul>
    );
  }

  return null;
};

const Content = ({ lab }) => {
  if (!lab) {
    return (
      <Card>
        <Card.Body>
          Выберите лабораторную работу из меню.
        </Card.Body>
      </Card>
    );
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{lab.title}</Card.Title>
        <Card.Text>{lab.subtitle && (lab.subtitle != "")}</Card.Text>
        <Card.Text as='div'>{displayLab(lab.content)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Content;
