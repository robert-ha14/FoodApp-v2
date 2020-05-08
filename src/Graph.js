import React from 'react';

function Graph({ calories, protein, fat }) {
    

    return (
        <div>
            
            <p>Total Calories: {calories}</p>
            <p>Total Protein: {protein}</p>
            <p>Total Fat: {fat}</p>
        </div>
    )
}

export default Graph;