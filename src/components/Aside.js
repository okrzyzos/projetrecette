import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';


const Aside = () => {
    return (
        <div>
             <div className="aside text-center">
          <div className="icon">

          <FormatQuoteIcon/><span className="best">Best of</span><FormatQuoteIcon/>

          </div>
        

          <span>-Hamburger maison</span><br/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
         
          <span className="etoile">4/5</span><br/>

          <span>-Salades d’épinard</span><br />
          <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
          <span className="etoile">4/5</span><br />
          <span>-Pizza au chorizon</span><br />
          <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
          <span className="etoile">4/5</span><br />
          <span>-Amour au maison</span><br />
          <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
          <span className="etoile">4/5</span><br />
          <span>-Moelleux au chocolat</span><br />
          <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
        <StarIcon style={{color:"#fff200"}}/>
          <span className="etoile">4/5</span><br /><br />
          <label htmlFor="pet-select">Recette du mois:</label><br />

          <select name="month" id="month-select">
            <option value="">Mois</option>
            <option value="dog">Janvier</option>
            <option value="cat">Fevrier</option>
            <option value="hamster">Mars</option>
            <option value="parrot">Avril</option>
            <option value="spider">Mai</option>
            <option value="goldfish">Juin</option>
          </select>


        </div>

        </div>
    );
};

export default Aside;