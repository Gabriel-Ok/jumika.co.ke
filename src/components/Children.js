  import React from 'react';
  import { Link } from 'react-router-dom';
 import AOS from 'aos'
 import 'aos/dist/aos.css';
 import bunner from '../assets/bunner.gif';
import img from '../assets/img.jpg';
 import Childrenitems from './Childrenitems.json';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faSearch } from '@fortawesome/free-solid-svg-icons'

  AOS.init();



  function Children(){
      return(
        <div className="container">
        <h4>Children</h4>
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
                          <h3 class="title"><a href="#">men's blazer</a></h3>
                          
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
  export default Children;

// // function searchFor(term) {
// //     return function(x) {

// //         return x.itemType.toLowerCase().includes(term.toLowerCase())
        
// //     }
    
// // }
// // class Children extends React.Component {
//  //
//      //   constructor(props) {
//         super(props);
//             this.state = {

              
//                Childrenitems: Childrenitems,                term:'',
//             }
//     this.searchHandler =this.searchHandler.bind(this);    
//     }    searchHandler(event){        this.setState({term: event.target.value})
//   }
//    render(){

//    return(
//        <div>
//            Kenya
//            </di>
//           )
         
         
         

//    })}



//  </div>




// // {/* ================================================================================================================================================ */}

// //     </div>
    
// //     </div>

// //     </div>
// // )};
// // }
//  export default Children;
