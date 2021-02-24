import React from 'react';

const Header = () => {
    return (
            	<nav className="navbar navbar-expand-lg navbar-dark ">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#">Recette Afpa</a>
      </li>
      
     
    </ul>

    
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
    </form>
    <i className="fas fa-user fa-2x"></i><a className="nav-link" href="#">connexion</a>

  </div>
</nav>
    );
};

export default Header;