import React from "react";
import Card from "./components/Card";
// import Data from './Data';
import Navbar from "./components/Navbar";
import pizza from "./img/pizza.jpeg";
import chocolat from "./img/chocolat.jpeg";
import hamburger from "./img/hamburger.jpeg";

const ListRecette = ({ DataRecettes }) => {
  return (
    <>
      <div class="container">
        {DataRecettes.map((recette) => {
          const { id, image, nom, instructions, ingredients } = recette;
          return <Card key={id} DataRecettes={recette}></Card>;
        })}
      </div>
    </>
  );
};

export default ListRecette;
