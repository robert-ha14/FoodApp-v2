import React, { useState, useEffect } from 'react';
import Food from './Food';
import Graph from './Graph';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

function App() {
  const app_id = '34ac4de3';
  const app_key = '505f331b839f0970acd4cf3e86015311'
  const [food, setFood] = useState("");
  const [data, setData] = useState([]);

  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  
  useEffect(() => {
    console.log(food);
  });

  async function getData() {
    const response = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=${food}&app_id=${app_id}&app_key=${app_key}`);
    const data = await response.json();
    setData(data.parsed);
    data.parsed.map(element => (
      setCalories(calories + element.food.nutrients.ENERC_KCAL),
      setProtein(protein + element.food.nutrients.PROCNT),
      setFat(fat + element.food.nutrients.FAT)
    ));
    console.log(data.parsed);
    
  }

  return (
    <Container className="App">
      <Jumbotron>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="formInput">
                <Form.Control placeholder="Enter Food" onChange={e => setFood(e.target.value)}></Form.Control>            
              </Form.Group>
              <Button variant="primary" type="button" onClick={() => getData()}>
                Submit
              </Button>
            </Form>
            {data.map(element => (
              <Food label={element.food.label} image={element.food.image} calories={element.food.nutrients.ENERC_KCAL} protein={element.food.nutrients.PROCNT} fat={element.food.nutrients.FAT}/>
            ))}
          </Col>
          <Col>
            <h2 className="graph">
              <Graph calories={calories} protein={protein} fat={fat}></Graph>
            </h2>
          </Col>
        </Row>
      </Jumbotron>
    </Container>
  );
}

export default App;
