import React from 'react';
import Data from '../Data';
import ListRecette from '../ListRecette'

const Card = (props) => {
    

console.log(props)


    // const ingredients = Da.ingredients
    //     .split(',')
    //     .map(item => <li key={item}>{item}</li>)


    // const instructions = recette.instructions
    //     .split('\n')
    //     .map(item => <li key={item}>{item}</li>)

    // const requireImage = chemin => {
    //     try {
    //         return require(`../img/${chemin}`).default
    //     } catch (err) {
    //         return require(`../img/default.jpeg`).default

    //     }
    // }



    return (
        // <div className="card">
        //     <div className="image">
        //         <img src={requireImage(recette.image)} alt={recette.nom} />
        //     </div>
        //     <div className="recette">
        //         {/* <h1>{recette.nom}</h1> */}
        //         <ul className="liste-ingredients">
        //             {/* {recette.ingredients} */}
        //         </ul>
        //         <ol className="liste-instructions">

        //             {/* {recette.instructions} */}
        //         </ol>
        //     </div>
        <div>
<h1>coucocu olivieze</h1>
<h2>{props}</h2>


        </div>




    )
}
export default Card


