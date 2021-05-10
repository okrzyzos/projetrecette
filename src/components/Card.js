import React,{useState} from "react";
import './Card.css'
import StarIcon from '@material-ui/icons/Star';
import Hamburger from "./recettes/Hamburger";
import { useHistory } from "react-router-dom";



const Card = ({ DataRecettes }) => {
  const history = useHistory();

  // const [showIngredients,setShowIngredients] = useState(false);

  const ingredients = DataRecettes.ingredients
    .split(",")
    .map((item) => <li key={item}>{item}</li>);

    // const url = DataRecettes.url;



  // const instructions = DataRecettes.instructions
  //   .split("\n")
  //   .map((item) => <li key={item}>{item}</li>);

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
        <img onClick={() => history.push('/hamburger')} src={requireImage(DataRecettes.image)} alt={DataRecettes.nom} />
      </div>
      <div class="recette mb-3">
        <h1>{DataRecettes.nom}</h1>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>

        <StarIcon />
        <span>4/5</span><br/>

      

  
   <p  onClick={() => history.push('/hamburger')}  className="read pt-2">READ MORE</p>
   
</div>

    </div>
  );
};
export default Card;
