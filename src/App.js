import React, { useState,useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Card from "./components/Card";
import Data from "./Data";
import "./App.css";
import ListRecette from "./ListRecette";
import Footer from "./components/Footer";


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
        <Header filter={filterResults} setFiltering={setFiltering}/>
        <Navbar />
        <ListRecette DataRecettes={isFiltering ? filtered : recettes} />
        <Footer />
      </div>
    </>
  );
};

export default App;
