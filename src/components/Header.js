import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logochef2.png'

const Header = ({filter,setFiltering}) => {
  

  
    return (
            	<nav className="navbar navbar-expand-lg navbar-dark  ">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <Link  className="nav-link" to="/accueil">
        Recette Afpa
        <img   className="logo" src={logo}
        />
        </Link>
      </li>
    </ul>

    <div>
    <form className="form-inline my-2 my-lg-0">
      <input  
       className="form-control mr-sm-2" 
       type="search"
        placeholder="Search"
      onChange={(e)=>{
      setFiltering(e.target.value.length > 0)
      filter(e.target.value)
     
      }}
        />

    </form>
    </div>


  </div>
</nav>
    );
};

export default Header;