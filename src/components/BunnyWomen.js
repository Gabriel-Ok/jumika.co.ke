 import React from 'react';
 import { Link } from 'react-router-dom';
 import AOS from 'aos'
 import 'aos/dist/aos.css';
 import Womenitems from './Womenitems.json';
 import bunner from '../assets/bunner.gif';
import img from '../assets/img.jpg';

 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faSearch } from '@fortawesome/free-solid-svg-icons'

 AOS.init();


 function BunnysWomen(){
    return(
        <div className="container">
        <h4>woman</h4>
        <div className="items-row">
          
          <div className="product-items " data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
                          
              
                      </div>
              </div>
             
            </div>
          </div>
          <div className="product-items " data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          
          <div className="product-items" data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          <div className="product-items" data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          <div className="product-items " data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          <div className="product-items" data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          <div className="product-items" data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
          <div className="product-items" data-aos="fade-up" data-aos-duration="1500">
            <div className="product-grid">
              <div className="product-image">
                <a href="/">
                <img src={img} alt="info photo" className="pic-1"></img>
                <img src={img} alt="info photo" className="pic-2"></img>
                </a>
                <span className="product-trend-label">
                click me
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
        <hr></hr>
      </div>
      )
 }
 export default BunnysWomen;

// function searchFor(term) {
//     return function(x) {

//         return x.itemType.toLowerCase().includes(term.toLowerCase())
        
//     }
    
// }
//  class BunnyWomen extends React.Component {
   
//     constructor(props) {
//         super(props);
//             this.state = {

               
//                 Womenitems: Womenitems,
//                 term:'',
//             }
//     this.searchHandler =this.searchHandler.bind(this);
        
//     }
//     searchHandler(event){
//         this.setState({term: event.target.value})
//     }
//     render(){

//   return(
//       <div>

//     <div className="template">
     
//      {/* ==============container===================== */}

//     <div className="container " style = {{fontSize: 16}}>
       
//         <input
//         placeholder='search' 
//                 type='text'
//                 onChange={this.searchHandler}
                
//                     >
                        
//                     </input>
//                     {/* <FontAwesomeIcon icon={faSearch} /> */}
        


// {/* =========================================================================================================================================== */}
    


   
    
    
//         {/* ==============row for women item============================ */}

//         <div className="row">

//     {/* ==============mapItems============================ */}
//         {this.state.Womenitems.filter(searchFor(this.state.term)).map((getItems, index)=>{ 
//             return (
                

//                 <div className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-duration="1500">
//                 <div className="card h-100">
//                 <Link To="#" ><img className="card-img-top" style = {{height: '20vh'}}  alt=""/></Link>
//                 <div className="card-body">
//                 <h4 className="card-title">
//                 {/* ==============itemName============================ */}

//                 <Link To="#" style = {{color: 'green'}}>{getItems.itemName}{getItems.itemType}</Link>
//                 </h4>
//                 {/* ==============itemPrice============================ */}
//                 <h5 className='price'>{getItems.price}</h5>

//                 {/* ==============itemIntro============================ */}
//                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
//                 {/* ==============itemDescription============================ */}
//                     <p className="card-text">ITEM DESCRIPTION</p>
//                     </div>
//                     <div className="card-footer">

//                 {/* ==============glyphicons============================ */}

//                     <span className="glyphicon glyphicon-heart-empty" >2</span>

//                 {/* ==============btn============================ */}
  
//                 <button className='ItemBtn' id='BtnItem'>BUY</button>
//                 </div>
//                 </div>
//                 </div>
     

//             )
             
             
             
//  } 
//   ) 
//         }
    
    
    
//     </div>



// </div>
//     </div>
//     </div>
   
// )};
// }
// export default BunnyWomen;
