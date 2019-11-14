import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ThriftTemplate from "./ThriftTemplate";
import take from "./take.png";
import register from "../php-folder/register.php";

function Register(){
    return(
      <withRouter>

        <div className="Register">

        <div className="Registercontainer">
        <h3 className="Registertitle">Welcome! Please Register</h3>

        <form method="post" action="register.php">

        

        <div className="inputgroup"  >
        <label  >Username</label>
        <input type ='text' name="username" placeholder="enter your username"></input>


        </div>
        <div className="inputgroup"  >
        <label  >Email</label>
        <input  type ='email' name="email" placeholder="enter your email"></input>


        </div>
        <div className="inputgroup"  >
        <label  >Password</label>
        <input  type ='password' name="password" placeholder="create password"></input>


        </div>
        <div className="inputgroup"  >
        <label>Confirm Password</label>
        <input type ='password' name="c_password" placeholder="repeat password"></input>


        </div>
        <button type='submit' className='loginbtn' name="submit" >Sign Up</button>
        <p>If you already have an account  login <Link to="/Login">Here</Link></p>
        </form>


        </div>


        </div>



       

      </withRouter>



    );
}
 export default Register;
