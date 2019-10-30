import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import "./Main";

function Sidemenu(){
    return(
<nav>
  <ul className="nav-links">
<li>

    
</li>
  <li className="item button secondary"><Link to="/Register">Signup</ Link></li>
  
  </ul>
  <div className="burger">
    <div className="link1"></div>
    <div className="link2"></div>
    <div className="link3"></div>
  </div>
</nav>

    );
}
 export default Sidemenu;

