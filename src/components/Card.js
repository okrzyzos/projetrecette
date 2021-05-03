import React from "react";
import Data from "../Data";
import ListRecette from "../ListRecette";

const Card = ({ DataRecettes }) => {
  const ingredients = DataRecettes.ingredients
    .split(",")
    .map((item) => <li key={item}>{item}</li>);

  const instructions = DataRecettes.instructions
    .split("\n")
    .map((item) => <li key={item}>{item}</li>);

  const requireImage = (chemin) => {
    try {
      return require(`../img/${chemin}`).default;
    } catch (err) {
      return require(`../img/default.jpeg`).default;
    }
  };

  return (
    <div class="card">
      <div class="image">
        <img src={requireImage(DataRecettes.image)} alt={DataRecettes.nom} />
      </div>
      <div class="recette">
        <h1>{DataRecettes.nom}</h1>
        <i class={DataRecettes.fafa}></i>

        <ul class="liste-ingredients">{ingredients}</ul>
        <ol class="liste-instructions">{instructions}</ol>
      </div>
    </div>
  );
};
export default Card;
