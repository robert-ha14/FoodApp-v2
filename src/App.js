import React, { useState, useEffect } from 'react';
import Food from './Food';
import Graph from './Graph';
import './App.css';

function App() {
  const app_id = '34ac4de3';
  const app_key = '505f331b839f0970acd4cf3e86015311'
  const [food, setFood] = useState("apple");
  const [data, setData] = useState([]);

  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [fat, setFat] = useState(0);
  
  // useEffect(() => {
  //   console.log(food);
  // });

  function handleClick() {
    getData();


  }
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

  function addTotals() {
    {data.map(element => (
      setCalories(calories + element.food.nutrients.ENERC_KCAL),
      setProtein(protein + element.food.nutrients.PROCNT),
      setFat(fat + element.food.nutrients.FAT)
    ))}
    
  }

  return (
    <div className="App">
      <input className="search-bar" type="text" value={food} onChange={e => setFood(e.target.value)}></input>
      <input className="search-button" type="button" onClick={() => handleClick()}></input>
      <h1 className="data">
        {data.map(element => (
          <Food label={element.food.label} image={element.food.image} calories={element.food.nutrients.ENERC_KCAL} protein={element.food.nutrients.PROCNT} fat={element.food.nutrients.FAT}/>
        ))}
      </h1>
      <h2 className="graph">
        <Graph calories={calories} protein={protein} fat={fat}></Graph>
      </h2>
    </div>
  );
}

export default App;
