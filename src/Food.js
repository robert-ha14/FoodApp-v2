import React from 'react';

function Food({ label, image, calories, protein, fat }) {
    return (
        <div>
            <h1 className="label">{label}</h1>
            <img src={image}></img>
            <p>Calories: {calories}</p>
            <p>Protein: {protein}</p>
            <p>Fat: {fat}</p>
        </div>
    )
}

export default Food;