import React from 'react';
import emptyStar from './img/empty-star.svg'
import fullStar from './img/full-star.svg'
import './App.css';

function App() {
    return (
        <div className="App">
            <Rating />
        </div>
    );
}

function Rating() {

    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {
    return(
        <img src={emptyStar} alt="es"/>
    )
}

function Accorfion() {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
            </ul>
        </div>
    )
}

export default App;
