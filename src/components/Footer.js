import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Childrenitems from './Childrenitems.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Edu from '../assets/Edu.svg';

function Footer(){
    return(
    <footer className="footer">
    <div className="inner-footer">
<div className="footer-items">
   <img src={Edu} alt="my pic"></img>
   </div>
   <div className="footer-items">
       <h2>Quick links</h2>
  
   <ul>
       <a><li>About us</li></a>
       <a><li>contact us</li></a>
       <a><li>delivery policies</li></a>
       <a><li>customer care</li></a>
   </ul>
   </div>
   <div className="footer-items">
       <h2>services</h2>

   <ul>
       <a><li>Delivery</li></a>
       {/* <a><li>Thrift shop</li></a> */}
       <a href=""><li>Bunnys mall</li></a>
      
   </ul>
   </div>
   <div className="footer-items">
       <h2>contact us</h2>

   <ul>
     <li><i class="fas fa-map-marked-alt"></i> Find Us</li>
     <li><i class="fas fa-phone-square-alt"></i> 0706193075</li>
     <li><i class="fas fa-envelope-square"></i> bunnyskenya@gmail.com</li>
   </ul>
   <div className="social-media">
      <a><i class="fab fa-facebook"></i></a> 
     <a><i class="fab fa-twitter"></i></a> 
      <a><i class="fab fa-whatsapp"></i></a>
    <a>  <i class="fab fa-instagram"></i></a>
   </div>
   </div>
   </div>
   <div className="footer-bottom">
    <ul>

        <li className="footer-bottom-items"><a href="">About Us</a></li>
        <li className="footer-bottom-items"><a href="">Contact Us</a></li>
        <li className="footer-bottom-items"><a href="">Bunnys Mall</a></li>
        <li className="footer-bottom-items"><a href="">Thrift Shop</a></li>
        <li className="footer-bottom-items"><a href="">Services</a></li>
        <li className="footer-bottom-items"><a href="">Return Policy</a></li>
        <li className="footer-bottom-items"><a href="">Collection centres</a></li>
        <li className="footer-bottom-items"><a href="">Black friday</a></li>
      
    </ul>
    <hr></hr>
    bunnys.co.ke
   </div>
   <div/>

 

    </footer>
    );
}
export default Footer;