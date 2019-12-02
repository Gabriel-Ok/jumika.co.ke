
import Popper from 'popper.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();


//back to top button
const scrollButton= document.querySelector("#back_top");
//scrollButton.style.display="block";
window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
     if(window.pageYOffset > 300){
         scrollButton.style.display="block";
     }else{
        scrollButton.style.display="none";
     }
}
scrollButton.addEventListener("click", goTop);
function goTop(){
    window.scrollTo(0,0);
}
