import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ThriftTemplate from "./ThriftTemplate";

function Services(){
    return(
<withRouter>
<Switch>
  <div className="Services">
  <h1>Our services</h1>
  <span>Here are our proffesional servicse that we offer to our esteemed customers</span>
<section className="services-section">
<article className="service-details">
  <h2>icon</h2>
  <h2><span className="first-letter">B</span>unny's Mall</h2>
  <p>Jumika mall offers you all you need under one roof, from fashion, food to entertainment all at affordable price and very good quality. Click the link below to ist our online mall</p>
  <span><Link to="/BunnyShop">Vist Bunny's Shopping Mall</ Link></span>
</article>




<article className="service-details">
  <h2>icon</h2>
  <h2> <span className="first-letter">T</span>hrift Shop</h2>
  <p>They say old is gold, and just like wine, the longer it stays the better it gets, yes, you are right, Jumika now brings to you the old school fashion , with good quality and affordable prices, </p>
  <span><Link to="./ThriftTemplate">Vist our Thrift shop </ Link ></span>
</article>






<article className="service-details">
  <h2>icon</h2>
  <h2> <span className="first-letter">D</span>elivery</h2>
  <p>We offer home and office delivery service, Vist our delivery service section for quotation and price estimates. Prices are calculated by distance and type of poroducts to be delivered.</p>
  <span> <Link to="/delivery-services">Ask For Delivery</Link></span>
</article>






<article className="service-details">
  <h2>icon</h2>
  <h2><span className="first-letter">T</span>ransport</h2>
  <p>Do you want to move something bulk? within the town or outside? Worry less because Jumika have you sorted whenever you want transportation services.. get moving with Jumika</p>
  <span><Link to="/delivery-services">Ask for Transport</Link></span>
</article>
</section>

  </div>
  </Switch>
</withRouter>


    );
}
 export default Services;
