import React, {Components, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './Main.css'
import edi from './edi.png';
import Okay from "./components/homePage";
import Menubar from "./components/Menubar";

class App extends Component{
  render(){
    return(
<div className="App">

  <Menubar />
  <Okay />
</div>

    );
  }
}

export default App;
