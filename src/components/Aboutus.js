import React from 'react';
import take from './take.png';
function Aboutus(){
    return(

      <div className="Home">
      <div className="homePage">
        <h1>About <span>Us</span></h1>
        <p>Jumika is the leading online store, that not only sells but also offers <a href="/Delivery">delivery</a>  and <a href="/Transport">transportaion</a> services to its clients</p>
        <p>With both <a href="/Thrift">wholesale and retail selling</a>, we have attracted a large numbe of customers across the region. we work around the clock to ensure our customers get quality services to their satisfaction</p>
      </div>

 <div className="homPic">
 <img src={take} alt="my pic"></img>
 <span><h4>Save money and time with our affordable delivery services</h4></span>
 
 </div>
 
 <div className="mision">
   <h1>Our Vison</h1>
   <p>To be the leading changer of online shoping experience in kenya and the neighbouring countries</p>
 </div>
 <div className="mision">
   <h1>Our Mision</h1>
   <p>Provide affordable sevices and high quality products to enhance a healthy and a happy society</p>
 </div>
    </div>
 


    );
}
 export default Aboutus;
