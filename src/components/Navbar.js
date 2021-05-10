import React from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {


  
  return (
    <nav class="menum navbar navbar-light navbar-expand-md justify-content-center sticky-top">
      <div class="container">
        <div
          class="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul class="topBotomBordersOut navbar-nav mx-auto text-center">
            <li class="nav-item">
              <Link to="/plats" class="nav-link" >
                Plats
              </Link>
            </li>

            <li class="nav-item">
            <Link to="/desserts" class="nav-link" >

              {" "}
                Dessert
                </Link>

            </li>

            <li class="nav-item">
            <Link to="/menuComplet" class="nav-link" >

              {" "}
                Menu complet
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/entrées" class="nav-link">

              {" "}
                Entrées
              </Link>
            </li>
            <li class="nav-item">
            <Link to="/saisons" class="nav-link">

              {" "}
                Saison
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
