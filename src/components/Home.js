import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

import bunner from '../assets/bunner.gif';
import img from '../assets/img.jpg';

import "./BunnyMain";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Container,Col,Row,Button,Card}from 'react-bootstrap';




 function Home(){
     return(

   
<main className="wrapper ">
  
<section className="top-container">
<div className="showcase">
  
<h1>Welcome to Bunny's</h1>
<p>We have redefined online shopping, experience a modern and classic online shopping by visting our online store</p>

</div>
<div className="top-box top-box-a">
 <a href="#"> <h5>Return policy</h5></a>
<a href="#"><h5>Payment mode</h5></a>
 <a href="#"> <h5>Delivery policy</h5></a>

</div> 
<div className="top-box top-box-b">
  <a>
  <h5>NEW ARRIVAL </h5>
  <h5>CRAZY SALE</h5>
  <h5>BLACK FRIDAY</h5>
</a>
</div>

</section>
<section className="boxes">
<Link to="/FreeDelivery">
<div className="box one">
  
<h5>Free Delivery</h5>

</div>
</ Link>
<Link to="/BunnyMain">
<div className="box">
 <h5>Bunny's Mall</h5>
  
</div>
</Link>
<Link to="/ThriftMain">
<div className="box">
  <h5>Thrift Shop</h5>
 
</div>
</Link>
<Link to="/CollectionCentres">
<div className="box">
  
  <h5>Collection centers</h5>
  
</div>
</Link>
</section>



<section className ="product">
<div className=" product-info products">
 
  <div className="subscribe-form">
  <h2>Need help to place your order?</h2>
 <h3>Call 0706193075</h3>
 <span>We are here to help you</span>
  </div>
  <Link to="/Women"><div>
  <img src={bunner} alt="info photo"></img> 
  </div></Link>
  

</div>
</section> 
<div className="container">
  <div className="row">
    
    <div className="col-md-3 ">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
            <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3 ">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    
    <div className="col-md-3">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3 ">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3 ">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    <div className="col-md-3">
      <div className="product-grid">
        <div className="product-image">
          <a href="/">
          <img src={img} alt="info photo" className="pic-1"></img>
          <img src={img} alt="info photo" className="pic-2"></img>
          </a>
          <span className="product-trend-label">
            Trending
          </span>
          <span class="product-discount-label">-20%</span>
          <ul className="social">
          <li><a href="/" data-tip="add to cart"><i class="fas fa-shopping-cart"></i></a></li>
            <li><a href="/" data-tip="add to wish list"><i class="fas fa-heart"></i></a></li>
            <li><a href="/" data-tip="search this product"><i class="fas fa-search"></i></a></li>
          </ul>
        </div>
        <div className="product-content">
        <div class="product-content">
                    <h3 class="title"><a href="#">Kenyan men's blazer</a></h3>
                    <div class="price discount"><span>Khs 700</span> Ksh 508</div>
                </div>
        </div>
       
      </div>
    </div>
    </div>
  
</div>
</main>

     );
 }
 export default Home;
