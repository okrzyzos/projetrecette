import React,{useState} from 'react';
import Card from '../Card';


const Hamburger = ({DataRecettes}) => {
    return (
        <>
        <h1 className="text-center pt-2 titreburger">Hamburger Maison</h1>

        <div className="container pt-3 d-flex justify-content-center mx-auto ">
        <img  className="entres p-3" src="https://www.hachette-vins.com/uploads/media/recettes/0001/09/6e16669a1b27b974fbe943c7ddca7941cd96fcf7.jpeg" alt="burger"/>
        
         

         
        

            
          
        
        Culpa consectetur, id repudiandae nisi unde iure aliquid nihil dicta possimus commodi vel esse a fuga doloribus quisquam eos minus veritatis ratione magnam corrupti cupiditate at eaque porro? Ut, officia.
        Repellat eaque molestiae nostrum debitis commodi, rem repudiandae laborum, est doloremque consequatur necessitatibus magni perspiciatis atque soluta quo perferendis, officiis error unde quibusdam! Dolorem vitae sequi, sed saepe in esse?
        Aliquid id a nam eaque, minus pariatur asperiores veritatis at nesciunt corporis eum explicabo molestiae, dolor, maiores officia. Dolores sequi nobis reiciendis unde eum quibusdam quidem voluptatibus fugiat quam quod?<br/>
        
       <ul><br/>
       <li>2 gros Steacks Hachés</li>
       <li>2 Buns</li>
       <li>80g de Cheddar</li>
       <li>4 tranches de Bacon</li>
       <li>1 Oignon, Ketchup ou sauce BBQ, Salade'</li><br/>
      instructions: "Peler et couper l'oignon en rondelles puis les faire fondre à la poêle avec une noix de beurre.<br/>Faire cuire les Steacks.<br/>Faire revenir les tranches de Bacon.\nFaire dorer les Buns au four.<br/>Monter le Hamburger dans cet ordre : oignons, bacon, steack, sauce, cheddar, salade.<br/>S'accorde bien avec un Coca-Cola.",
        </ul>
            
        </div>
        </>
    );
};

export default Hamburger;