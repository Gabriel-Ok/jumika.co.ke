import React, { Component } from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';


class Signin extends Component {
state = {isSignedIn : false }
uiConfig = {
  signInFlow : "popup",
  signInOptions:[
  firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  firebase.auth.EmailAuthProvider.PROVIDER_ID
],

callbacks :
{
  signInSuccess: function(currentUser, credential, redirectUrl) { 

    window.location = '/';

     } 
}
}

  render(){

  return (
<withRouter>
<div className="login">
      <h3>Welcome! Sign in please</h3>
      
      <form >
     
     <StyledFirebaseAuth 
      uiConfig = {this.uiConfig}
      firebaseAuth = {firebase.auth()} />

</form>
</div>

  
</withRouter>


    );
}
}
 export default Signin;
