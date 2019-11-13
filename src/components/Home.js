import React from 'react';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom';
import delivery from '../assets/delivery.jpg';
import take from './take.png';
import "./BunnyMain";
 function Home(){
     return(

   
<main className="wrapper">
  <br></br>
  <br></br>
  <br></br>
<section className="top-container">
<div className="showcase">
  
<h1>Welcome to Bunny's


</h1>
<p>We have redefined online shopping, experience a modern and classic online shopping by visting our online store</p>
<a href="#" className="btn">Vist our Store</a>
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
<div className="box">
  
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
{/* <section className ="info">
<img src={delivery} alt="info photo"></img>
<div className="content-info">
  <h2>Your shopping and delivery partner</h2>
  <p>Created for all, serving the whole country. Bunnys provides all-under-one-roof services whereyou find all yo need at your desk by just a click of a button</p>
 <a href="#">Find more</a>
</div>
</section> */}
<div className="selected">
  <h5>Todays Selections</h5>
  <a href="#">Check More</a>
</div>

<section className="portfolio">

{/* 
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img>
<img src={delivery} alt="info photo"></img> */}

</section>
</main>

     );
 }
 export default Home;
