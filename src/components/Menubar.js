import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';

function Menubar(){
    return(
<nav>
  <ul className="menu">
  <li className="logo"><Link to="/">BUNNY'S</ Link></li>
  <li className="item"><Link to="/">Home</ Link></li>
  <li className="item"><Link to="/Services">Services</ Link></li>
  <li className="item"><Link to="/Aboutus">About us</ Link></li>
  <li className="item"><Link to="/Contactus">Contact us</ Link></li>
  <li className="item button"><Link to="/Login">Login</ Link></li>
  <li className="item button secondary"><Link to="/Register">Signup</ Link></li>

  <li className="toggle"><span className="bars"></span></li>
  </ul>

</nav>





    );
}
 export default Menubar;
