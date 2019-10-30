import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import "./Main";

function Menubar(){
    return(
<nav>

        <div id="logo"><img src={logo} alt="my pic"></img></div>

        <label for="drop" class="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul class="menu">
            <li className="item"><Link to="/">Home</ Link></li>
            <li>

           
<label for="drop-2" class="toggle">Bnny's Mall +</label>
<a href="#">Bunny's Mall</a>
<input type="checkbox" id="drop-2"/>
<ul>

   
    <li> 
    <label for="drop-3" class="toggle">Fashion +</label>
    <a href="#">Fashion</a>         
    <input type="checkbox" id="drop-3"/>

    <ul>
        <li><a href="#">Men's</a></li>
        <li><a href="#">Women's</a></li>
        <li><a href="#">Kids</a></li>
        <li><a href="#">Unisex</a></li>
    </ul>
    </li>
</ul>
</li>
                <li>

           
                <label for="drop-2" class="toggle">Thrift Shop +</label>
                <a href="#">Thrift Shop</a>
                <input type="checkbox" id="drop-2"/>
                <ul>
    
                   
                    <li> 
                    <label for="drop-3" class="toggle">Fashion +</label>
                    <a href="#">Fashion</a>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><a href="#">Men's</a></li>
                        <li><a href="#">Women's</a></li>
                        <li><a href="#">Kids</a></li>
                        <li><a href="#">Unisex</a></li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li className="item"><Link to="/Services">Services</ Link></li>
                <li className="item"><Link to="/Aboutus">About us</ Link></li>
                <li><a href="#">Contact Us</a></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Register">Signup</Link></li>
            </ul>
       


       




</nav>

    );
}
 export default Menubar;
