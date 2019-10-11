import React, {Components, Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import './Main.css'
import edi from './edi.png';
import Okay from "./components/homePage";
import services from "./components/service";


class App extends Component{
  render(){
    return(
<div className="App">
  <Okay />
  <services />
</div>

    );
  }
}

export default App;
