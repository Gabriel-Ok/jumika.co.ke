import React from 'react';
import Edu from '../assets/Edu.svg';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Aboutus(){
    return(
<main className="wrapper">

<div className="about-us">
      <div className="about_info " data-aos="fade-right" data-aos-duration="1500">
          <h1><i class="fas fa-truck"></i></h1>
        <h1>About    <span>Us</span></h1>
      
        <p>Bunny's is the leading Western region online store, that not only sells but also offers <a href="/Delivery">delivery</a>  and <a href="/Transport">transportaion</a> services to its clients</p>
        <p>With both <a href="/Thrift">wholesale and retail selling</a>, we have attracted a large number of customers across the region. We work around the clock to ensure our customers get quality services to their satisfaction</p>
      </div>

 <div className="about-pic" data-aos="fade-down" data-aos-duration="1500">
 <img src={Edu} alt="my pic"></img>


 </div>

    </div>
<div className="our_team">
    <div className="why_us">
        <div className="why_us_header" data-aos="fade-up" data-aos-duration="1500"><h1>Why us</h1></div>
        <div className="why_us_details">
       
        <div className="details_header">
            <h1>Pricing/money refund</h1>
            <p>Both in services and products, our charges are Affordable by all clients as we give the lowest price posible for quality services and products</p>
        </div>
       
        <div className="details_header">
            <h1> support/return</h1>
            <p>With trained personel, our clients enjoy easy problem solving strategy laid down by our profesional cusomer care personels</p>
        </div>
        </div>
        </div>


</div>
</main>
      



    );
}
 export default Aboutus;
