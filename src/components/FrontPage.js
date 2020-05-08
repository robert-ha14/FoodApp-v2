import React, { useEffect, useState } from 'react';
import './FrontPage.css';
import Pics from './images.js';

function FrontPage() {
    const [counter, setCounter] = useState(0);
    return (
        <div className="FrontPage">
            <form className="search-form">
                <input className="search-bar" type="text"/>
                <button className="testButton" type="submit">
                    click me
                </button>
            </form>
        </div>
    );
}

export default FrontPage;