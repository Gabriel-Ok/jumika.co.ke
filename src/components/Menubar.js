import React from 'react';

function Menubar(){
    return(
<nav>
  <ul className="menu">
  <li className="logo"><a href="/">Jumika</a></li>
  <li className="item"><a href="/">Home</a></li>
  <li className="item"><a href="/Services">Services</a></li>
  <li className="item"><a href="/Aboutus">About us</a></li>
  <li className="item"><a href="/">Contact us</a></li>
  <li className="item button"><a href="">Login</a></li>
  <li className="item button secondary"><a href="">Signup</a></li>
  <li className="toggle"><span className="bars"></span></li>
  </ul>
  
</nav>
  

     


    );
}
 export default Menubar;
