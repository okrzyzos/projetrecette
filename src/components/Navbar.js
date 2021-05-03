import React from "react";

const Navbar = () => {


  const handlelogo = () =>{
  console.log('heloo');
  }
  return (
    <nav class="menum navbar navbar-light navbar-expand-md justify-content-center sticky-top">
      <div class="container">
        <div
          class="navbar-collapse collapse justify-content-between align-items-center w-100"
          id="collapsingNavbar2"
        >
          <ul class="topBotomBordersOut navbar-nav mx-auto text-center">
            <li class="nav-item">
              <a onClick={handlelogo} class="nav-link" href="#">
                Plats
              </a>
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="#">
                Dessert
              </a>
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="#">
                Menu complet{" "}
              </a>
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="#">
                Entrées
              </a>
            </li>
            <li class="nav-item">
              {" "}
              <a class="nav-link" href="#">
                Saison
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
