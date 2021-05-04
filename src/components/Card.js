import React from "react";
// import './Card.css'
import StarIcon from '@material-ui/icons/Star';


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
<div class="card mt-4">
      <div class="image">
        <img src={requireImage(DataRecettes.image)} alt={DataRecettes.nom} />
      </div>
      <div class="recette mb-3">
        <h1>{DataRecettes.nom}</h1>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>

        <StarIcon />
        <span>4/5</span><br/>

      
{ingredients}
</div>
    </div>
  );
};
export default Card;
