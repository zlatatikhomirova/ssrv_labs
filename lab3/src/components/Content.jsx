import React from 'react';
import { Card } from 'react-bootstrap';

const include_substr = /include*/;

const displayLab = (item) => {
  return (<ul>
    {
        Object.keys(item).map(el => {
          if (typeof item[el] != 'string')
            return displayLab(item[el])
          return <li>{item[el]}</li> 
        })
  }
    </ul>)
} 

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
        <Card.Text>{lab.subtitle ? lab.subtitle : ""}</Card.Text>
        <Card.Text as='div'>{displayLab(lab.content)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Content;