import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Main.css';
import Home from "./components/Home";
import Menubar from "./components/Menubar";
import Progressbar from "./components/Progressbar";
import Aboutus from "./components/Aboutus";
import ProductDescription from "./components/ProductDescription";
import Checkout from "./components/Checkout";
import Contactus from "./components/Contactus";
import Maps from "./components/Maps";
import Ordercost from "./components/Ordercost";
import Profile from "./components/Profile";
import Signin from "./components/Signin";
import Riderpay from "./components/Riderpay";
import Riderprofile from "./components/Riderprofile";
import Ridersavailable from "./components/Ridersavailable";
import Services from "./components/Services";
import ThriftTemplate from "./components/ThriftTemplate";
import BunnyShop from "./components/BunnyMen";
import Login from "./components/Login";
import Men from "./components/Men";
import Women from "./components/Women";
import Children from "./components/Children";
import Unisex from "./components/Unisex";
import BunnyMen from "./components/BunnyMen";
import BunnyWomen from "./components/BunnyWomen";
import BunnyChildren from "./components/BunnyChildren";
import BunnyUnisex from "./components/BunnyUnisex";
import BunnyMain from "./components/BunnyMain";
import ThriftMain from "./components/ThriftMain";
import FreeDelivery from "./components/FreeDelivery";
import CollectionCentres from "./components/CollectionCentres";
import Footer from "./components/Footer";
import Cart from "./components/Cart";



class App extends Component{



  render(){

    return(
    <BrowserRouter>
      <div className="App">


        < Menubar />
        
        <Switch>
        < Route exact path = "/" component={Home} />
        < Route path = "/Services" component={Services} />

        < Route path = "/Progressbar" component={Progressbar} />
        < Route path = "/Aboutus" component={Aboutus} />
        < Route path = "/ProductDescription" component={ProductDescription} />
        < Route path = "/Checkout" component={Checkout} />
        < Route path = "/Contactus" component={Contactus} />
        < Route path = "/Maps" component={Maps} />
        < Route path = "/Ordercost" component={Ordercost} />
        < Route path = "/Profile" component={Profile} />
        < Route path = "/Signin" component={Signin} />
        < Route path = "/Riderpay" component={Riderpay} />
        < Route path = "/Riderprofile" component={Riderprofile} />
        < Route path = "/Ridersavailable" component={Ridersavailable} />
        < Route path = "/ThriftTemplate" component={ThriftTemplate} />
        < Route path = "/BunnyShop" component={BunnyShop} />
        < Route path = "/Login" component={Login} />
        < Route path = "/Men" component={Men} />
        < Route path = "/Women" component={Women} />
        < Route path = "/Children" component={Children} />
        < Route path = "/Unisex" component={Unisex} />
        < Route path = "/BunnyMen" component={BunnyMen} />
        < Route path = "/BunnyWomen" component={BunnyWomen} />
        < Route path = "/BunnyChildren" component={BunnyChildren} />
        < Route path = "/BunnyUnisex" component={BunnyUnisex} />
        < Route path = "/BunnyMain" component={BunnyMain} />
        < Route path = "/ThriftMain" component={ThriftMain} />
        < Route path = "/FreeDelivery" component={FreeDelivery} />
        < Route path = "/CollectionCentres" component={CollectionCentres} />
        < Route path = "/Cart" component={Cart} />
       
        
        
        </Switch>
      
        <Footer/>
  
      </div>
    </BrowserRouter>
   

    );
  }
}

export default App;
