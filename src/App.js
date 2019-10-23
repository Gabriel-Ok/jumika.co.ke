import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import './Main.css';
import edi from "./assets/edi.png";
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
import ThriftTemplate from "./components/ThriftTemplate";
import BunnyShop from "./components/BunnyShop";
import Login from "./components/Login";


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
        < Route path = "/ThriftTemplate" component={ThriftTemplate} />
        < Route path = "/BunnyShop" component={BunnyShop} />
        < Route path = "/Login" component={Login} />
        </Switch>

      </div>
    </BrowserRouter>

    );
  }
}

export default App;
