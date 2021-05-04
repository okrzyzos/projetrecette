import React from "react";
import Card from "./components/Card";
// import Data from './Data';
import Navbar from "./components/Navbar";
import pizza from "./img/pizza.jpeg";
import chocolat from "./img/chocolat.jpeg";
import hamburger from "./img/hamburger.jpeg";
import Aside from "./components/Aside";

const ListRecette = ({ DataRecettes }) => {
  return (
    <>
      <div className="container">


        {DataRecettes.map((recette) => {
          const { id, image, nom, instructions, ingredients } = recette;
          return <Card key={id} DataRecettes={recette}></Card>;


        })}
        </div>
        <div className="subcontainer">
          <div className="item1">
            <Aside />
            <Aside />
          </div>

        </div>

    </>
  );
};

export default ListRecette;
