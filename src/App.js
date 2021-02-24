import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';
import Data from './Data';

import './App.css';
import ListRecette from './ListRecette';

const App = () => {
    const [recettes, setRecettes] = useState(Data);

    return (
        <>
            <div className="header">
                <Header />
                <Navbar />
            <ListRecette DataRecettes={recettes} />
            </div>
        </>

    )
}



export default App;