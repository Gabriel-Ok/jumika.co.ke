import React from 'react';

function Services(){
    return(

  <section className="our-services">
    <h3>Our Services</h3>
    <p className="section-lead">Welcome to our services, with brilliance and respect, we provide quality services to our clients</p>
  
    <div className="services-grid">
    <div className="service service1">
      <i className="ti-bar-chart"></i>
      <h4>Bunny's Mall</h4>
      <p>We have a variety of products and services awaiting for you . visit our mall to experience a modern, stylish way of online shopping</p>
      <a href="#" class="cta">Vist our Mall <span class="ti-angle-right"></span></a>
    </div>
    <div className="service service2">
      <i className="ti-light-bulb"></i>
      <h4>Thrift Shop</h4>
      <p>Old is gold so they say, we at bunny's we have a different answer, we have made gold affordable to 'all'. on  click of a button.</p>
      <a href="#" className="cta">Vist our Thrift shop<span class="ti-angle-right"></span></a>
    </div>
      <div className="service service3">
      <i className="ti-money"></i>
      <h4>Delivery</h4>
      <p>Why go out and get stressed with trafic, sunshine or rain?  just click.shop.wait</p>
      <a href="#" className="cta">Ask for delivery </a>
    </div>
    </div>
  </section>


    );
}
 export default Services;
