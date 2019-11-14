import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ThriftTemplate from "./ThriftTemplate";
import take from "./take.png";

function Login(){
    return(
<withRouter>

  <div className="login">
  <h3>Welcome! Login please</h3>

  <form action="login.php" method="post" onSubmit="myForm()">

  <div className="inputgroup">
  <label  >Email</label>
  <input type ='email' name="email"></input>


  </div>
  <div className="inputgroup" >
  <label>Password</label>
  <input  type ='password' name="password"></input>


  </div>
  <button type="submit">Login</button>
<p>If you dont  have an account  register <Link to="/Register">Here</Link></p>
  </form>


  </div>


 



  
</withRouter>


    );
}
 export default Login;
