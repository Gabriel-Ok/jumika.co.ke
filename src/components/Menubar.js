import React,{ Component, useState, PropTypes } from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import Cart from "./Cart";




    class Menubar extends Component {

    
      
        render(){
       
   
            
    return(

<div>


<nav className ='navba'>

<div className="navbar">
      <div className="navba" id="logo" to="/ ">
        <img alt="my pic" src={logo}/>
      </div>
    
    

        <label for="drop" className="toggle">Menu</label>
        <input type="checkbox" id="drop" />
            <ul className="menu">
            <li className="item"><Link to="/">Home</ Link></li>
            <li>

           
                <label for="drop-2" className="toggle">Bunny's Mall +</label>
                <a href="#">Bunny's Mall</a>
                <input type="checkbox" id="drop-2"/>
                <ul>
                
                    <li> 
                    <label for="drop-3" className="toggle">Fashion +</label>
                    <a href="#">Fashion</a>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><Link to="/BunnyMen">Men</Link> </li>
                        <li><Link to="/BunnyWomen">Women</Link> </li>
                        <li><Link to="/BunnyChildren">Children</Link> </li>
                        <li><Link to="/BunnyUnisex">Unisex</Link> </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li>

           
                <label for="drop-2" class="toggle">Thrift Shop +</label>
                <Link to="#">Thrift Shop</Link>
                <input type="checkbox" id="drop-2"/>
                <ul>
    
                   
                    <li> 
                    <label for="drop-3" class="toggle">Fashion +</label>
                    <Link to="#">Fashion</Link>         
                    <input type="checkbox" id="drop-3"/>

                    <ul>
                        <li><Link to="/Men">Men</Link> </li>
                        <li><Link to="/Women">Women</Link> </li>
                        <li><Link to="/Children">Children</Link> </li>
                        <li><Link to="/Unisex">Unisex</Link> </li>
                    </ul>
                    </li>
                </ul>
                </li>
                <li className="item"><Link to="/Services">Services</ Link></li>
                <li className="item"><Link to="/Aboutus">About us</ Link></li>


                

                {/* <li><a href="#">Contact Us</a></li> */}
             
                <li>  <div>

<Cart />
</div></li>
                <li><Link to="/Signin">Sign in</Link></li>
            </ul>
       


       

            </div>


</nav>

<div>
    
             
</div>
</div>


    );
    
    
    }
}


 export default Menubar;
