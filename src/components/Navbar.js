import React from 'react';

const Navbar = () => {
    return (
             <nav className="menum navbar navbar-light navbar-expand-md justify-content-center ">
                <div className="container">

                <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
                  <ul className="topBotomBordersOut navbar-nav mx-auto text-center">
                  
                    <li className="nav-item"><a className="nav-link" href="#">Plats</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Dessert</a></li> 
                    <li className="nav-item"> <a className="nav-link" href="#">Menu complet </a></li> 
                    <li className="nav-item"> <a className="nav-link" href="#">Entrées</a></li>
                    <li className="nav-item"> <a className="nav-link" href="#">Saison</a></li> 
                  </ul>
                </div>
                </div>   
              </nav>
    );
};

export default Navbar;