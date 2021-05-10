import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data";
import "./App.css";
import ListRecette from "./ListRecette";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Route,Link, Switch} from 'react-router-dom';
import Dessert from './components/Dessert';
import Saison from './components/Saison';
import Plats from './components/Plats';
import Entrees from './components/Entrees';
import MenuComplet from './components/MenuComplet';
import Hamburger from './components/recettes/Hamburger';
import AmourDeSaumon from './components/recettes/AmourDeSaumon';


const App = () => {
  const [recettes, setRecettes] = useState(Data);
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltred] = useState(false);
  const filterResults = (input)=>{
    let fullList = recettes.flat()
    let results = fullList.filter(recette =>{
      const nom = recette.nom.toLowerCase()
      const term = input.toLowerCase()
      return nom.indexOf(term) > -1

    })
    setFiltred(results)
  }
  useEffect(() => {
    console.log(isFiltering)
  })

  return (
    <>
      <div class="header">
        
      <Router>
        
        <Header filter={filterResults} setFiltering={setFiltering}/>
        <Navbar/>
<Switch>
        <Route path="/desserts" component={Dessert} />
        <Route path="/plats" component={Plats} />
        <Route path="/saisons" component={Saison} />
        <Route path="/entrées" component={Entrees} />
        <Route path="/hamburger" component={Hamburger} DataRecettes={recettes}/>
        <Route path="/amour" component={AmourDeSaumon} />
        <Route path="/menuComplet" component={MenuComplet} />
        <Route path="/" render={() => <ListRecette to="/"  DataRecettes={isFiltering ? filtered : recettes}  />} />


     </Switch>
     <Footer />

        </Router>




       
      </div>
    </>
  );
};

export default App;
