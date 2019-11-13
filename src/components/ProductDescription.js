import React from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import items from './Menitems.json';
import Womenitems from './Womenitems.json';
import Childrenitems from './Childrenitems.json';
import Unisexitems from './Unisexitems.json';

AOS.init();

function ProductDescription(){
    return(

      <div className="template">
     
      {/* ==============container===================== */}
 
     <div className="container " style = {{fontSize: 16}}>
         <br></br>
         <br></br>
         <br></br>
     {/* ==============row============================ */}
     
         <div className="row">
            
 
     {/* ==============mapItems============================ */}
         {items.map((getItems, id)=>{
              return (

               
                 
 
                 <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
                    <h1>{getItems.itemName}</h1>
                 <div className="card h-100">
                 <Link To="#" ><img className="card-img-top" style = {{height: '20vh'}}  alt=""/></Link>
                 <div className="card-body">
                 <h4 className="card-title">
                 {/* ==============itemName============================ */}
 
                 <Link To="#" style = {{color: 'green'}}>{getItems.itemName}{getItems.itemType}</Link>
                 </h4>
                 {/* ==============itemPrice============================ */}
                 <h5 className='price'>{getItems.price}</h5>
 
                 {/* ==============itemIntro============================ */}
                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
                 {/* ==============itemDescription============================ */}
                     <p className="card-text">ITEM DESCRIPTION</p>
                     </div>
                     <div className="card-footer">
 
                 {/* ==============glyphicons============================ */}
 
                     <span className="glyphicon glyphicon-heart-empty" >2</span>
 
                 {/* ==============btn============================ */}
   
       <button className='ItemBtn' id='BtnItem'>CHECKOUT</button>
       </div>
       </div>
       </div>
      
 
              )
              
              
              
 
         })}
     
     
     
     </div>
     </div>
 
    
     
     </div>
 
 
 );
 }
 export default ProductDescription;
