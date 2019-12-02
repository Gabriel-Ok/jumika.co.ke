// import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
// import ThriftTemplate from "./ThriftTemplate";

// import firebase from 'firebase';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


// firebase.initializeApp({
//   apiKey: "AIzaSyDMZIC3d11AZ3TTFVD9e3Xo7AD4oyuW-b4",
//   authDomain: "bunny-s-auth.firebaseapp.com"

// });

// class Login extends Component {
// state = {isSignedIn : false }
// uiConfig = {
//   signInFlow : "popup",
//   signInOptions:[
//   firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//   firebase.auth.FacebookAuthProvider.PROVIDER_ID,
//   firebase.auth.EmailAuthProvider.PROVIDER_ID
// ],

// callbacks :
// {
//   signInSucess: () => false
// }
// }
// componentDidMount = ()=>{




//   firebase.auth().onAuthStateChanged(user =>{
//     this.setState({ isSignedIn: !! user})
//   })
// }
//   render(){
//   return (
// <withRouter>

//   <div className="login">
  

 
//   {this.state.isSignedIn ? 
//       (   

//          <header className="App-header">
//   <h1>hi {firebase.auth().currentUser.displayName}</h1>
//   <img
//   src={firebase.auth().currentUser.photoURL}
//   />
//       <button onClick={() => firebase.auth().signOut()}>sign out</button>
//      </header>
//      )

//      :

//      (
//       <div className="login">
//       <h3>Welcome! Sign in please</h3>
//       <form >
     
//      <StyledFirebaseAuth 
//       uiConfig = {this.uiConfig}
//       firebaseAuth = {firebase.auth()} />

// </form>
// </div>
//       )
  
    
    
//     }

  

  


//   </div>


 



  
// </withRouter>


//     );
// }
// }
//  export default Login;
