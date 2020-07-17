import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Food({ label, image, calories, protein, fat }) {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>label: {label}</Row>
                    <Row><img src={image}></img></Row>
                </Col>
                <Col md={{offset: 4 }}>
                    <Row>Calories: {calories}</Row>
                    <Row>Protein: {protein}</Row>
                    <Row>Fat: {fat}</Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Food;