import React from 'react';
import take from './take.png';
function Aboutus(){
    return(
<main className="wrapper">

<div className="about-us">
      <div className="about.info">
        <h1>About <span>Us</span></h1>
        <p>Bunnny's is the leading Western region online store, that not only sells but also offers <a href="/Delivery">delivery</a>  and <a href="/Transport">transportaion</a> services to its clients</p>
        <p>With both <a href="/Thrift">wholesale and retail selling</a>, we have attracted a large numbe of customers across the region. we work around the clock to ensure our customers get quality services to their satisfaction</p>
      </div>

 <div className="about-pic">
 <img src={take} alt="my pic"></img>


 </div>

    </div>

</main>
      



    );
}
 export default Aboutus;
