import React from 'react';
import './FrontPage.css';
import Pics from './images.js';
// import Pics from './images.json';

function FrontPage() {
    return (
        <div className="FrontPage">
            <header className="FrontPage-text">
                frontpage
            </header>
            <p className="FrontPage-pics">
                { Pics.map(({index, src}) => (<img key={index} src={require("" + src)}/>)) }
            </p>    
        </div>
    );
}

export default FrontPage;