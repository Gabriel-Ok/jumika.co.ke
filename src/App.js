import React, { Component } from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import './App.css';
import './Main.css'
import edi from './edi.png';
import Okay from "./components/homePage";
import Services from "./components/service";
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Progressbar from "./components/Progressbar";
import Aboutus from "./components/Aboutus";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contactus from "./components/Contactus";
import Maps from "./components/Maps";
import Ordercost from "./components/Ordercost";
import Profile from "./components/Profile";
import Register from "./components/Register";
import Riderpay from "./components/Riderpay";
import Riderprofile from "./components/Riderprofile";
import Ridersavailable from "./components/Ridersavailable";
import Services from "./components/Services";


class App extends Component{
  render(){
    return(
<<<<<<< HEAD
<div className="App">
  <Okay />
  <Services />
</div>
=======
    <BrowserRouter>
      <div className="App">

        < Menubar />
        < Route exact path = "/" component= {Home} />
        < Route path = "/Progressbar" component={Progressbar} />
        < Route path = "/Aboutus" component={Aboutus} />
        < Route path = "/Cart" component={Cart} />
        < Route path = "/Checkout" component={Checkout} />
        < Route path = "/Contactus" component={Contactus} />
        < Route path = "/Maps" component={Maps} />
        < Route path = "/Ordercost" component={Ordercost} />
        < Route path = "/Profile" component={Profile} />
        < Route path = "/Register" component={Register} />
        < Route path = "/Riderpay" component={Riderpay} />
        < Route path = "/Riderprofile" component={Riderprofile} />
        < Route path = "/Ridersavailable" component={Ridersavailable} />
        < Route path = "/Services" component={Services} />


      </div>
    </BrowserRouter>
>>>>>>> 7c8a990bb9075ee11673d840b42be8363eb54f4f

    );
  }
}

export default App;
