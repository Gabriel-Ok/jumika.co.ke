import React from 'react';
import take from './take.png';
 function Home(){
     return(

   <div className="Home">
     <div className="homePage">
       <h1>Welcome to <span>Jumika</span></h1>
       <h2>We deliver anything at anytime ,any day..</h2>
       <p>We are the only  delivery partners you can trust and rely on</p>
       <button className="btn">learn more</button>
     </div>
<div className="homPic">
<img src={take} alt="my pic"></img>
<span><h4>Save money and time with our affordable delivery services</h4></span>

</div>
   </div>


     );
 }
 export default Home;
