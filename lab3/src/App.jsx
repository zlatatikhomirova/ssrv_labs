import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import { Container, Row, Col } from 'react-bootstrap';
import labs from './data/labs'

const App = () => {
  const [selectedLab, setSelectedLab] = useState(null);

  const handleLabSelect = (labId) => {
    const lab = labs.find((lab) => lab.id === labId);
    setSelectedLab(lab);
  };

  return (
    <>
      <Header />
      <Container className="mt-4 flex-grow-1">
        <Row>
          <Col md={3}>
            <Menu labs={labs} onLabSelect={handleLabSelect} />
          </Col>
          <Col md={9}>
            <Content lab={selectedLab} />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default App;
