import React from 'react';
import './App.css';
import Accordion from "./components/Accordion";
import Rating from "./components/rating";

function App() {
    return (
        <div className="App">
            <AppTitle />
            <Rating />
            <Accordion />
            <Rating />
        </div>
    );
}

function AppTitle() {
    return <span>This is App component</span>
}

export default App;
