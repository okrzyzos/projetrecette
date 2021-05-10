
import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';





const Footer = props => {

  const listRef = React.useRef(null);
  const partRef = React.useRef(null);
  const catRef = React.useRef(null);

  const onToggleClickRecettes = (e) => {
    listRef.current.classList.toggle("show");
  }
  const onToggleClickPartenaires = (e) => {
    partRef.current.classList.toggle("show");
  }
  const onToggleClickCategories = (e) => {
    catRef.current.classList.toggle("show");
  }
  return (

    <div className="footer page-content mt-5">
       
        <div className="row logo-reseaux">
          <div className="col-3 col-sm-3 col-md-3 col-lg-3 ">
            <i className="fab fa-facebook-square fa-4x"></i>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <i className="fab fa-instagram-square fa-4x"></i>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <i className="fab fa-twitter fa-4x"></i>
          </div>
          <div className="col-3 col-sm-3 col-md-3 col-lg-3">
            <i className="fab fa-snapchat-square fa-4x"></i>
          </div>
        </div>
        <hr />
        <div className="row mt-3 d-flex justify-content-center recettes ">
          <div className="col-sm-4 col-md-4 col-lg-3 " >
            <h3 onClick={onToggleClickRecettes} className="recettes">RECETTES</h3>



            <ul ref={listRef} className="recettelist">

              <li>tiramitsu</li>
              <li>Tarte aux pommes</li>
              <li>Mousse au chocolat</li>
              <li>Blanquette de veau</li>
              <li>Pain perdu</li>
            </ul>

          </div>



          <div className="col-sm-4 col-md-4 col-lg-3">
            <h3 onClick={onToggleClickCategories} className="categories">CATÉGORIES</h3>

            <ul ref={catRef} className="categorieslist">
              <li>
<Link to="/entrées">

              Entrées
              </Link>

              </li>

              <li>
              <Link to="/desserts">
              Déssert
              </Link>
              </li>
              <li>
              <Link to="/plats">
              Plats
              </Link>
              </li>
              <li>
              <Link to="/saisons">
              Saisons
              </Link>
              </li>
              <li>
              <Link to="/menuComplet">
              Menu Complet
              </Link>
              </li>
              

            </ul>


          </div>
          <div className="col-sm-4 col-md-4 col-lg-3">
            <h3 onClick={onToggleClickPartenaires} className="partenaires">PARTENAIRES</h3>


            <ul ref={partRef} className="partenaireslist">

              <li>Déco.fr</li>
              <li>M6</li>
              <li>Afpa</li>
              <li>Rtl.fr</li>
              <li>Intersport</li>
            </ul>

          </div>

        </div>

        <hr />
        <div className="info">


          <ul className="liste">
            <li><a href="#">Mentions légales</a> -</li>
            <li><a href="#">Conditions générales</a> -</li>
            <li><a href="#">Vos questions</a> -</li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>




        <div className="row droits">
          <div className="col-lg-12">
            <span className="droits">Tous droits résrvés Afpa Recette - 2021</span>
          </div>
        </div>



    </div>
  )
};


export default Footer;


