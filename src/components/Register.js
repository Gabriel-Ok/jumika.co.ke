import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ThriftTemplate from "./ThriftTemplate";
import take from "./take.png";

function Register(){
    return(
      <withRouter>

        <div className="Register">

        <div className="Registercontainer">
        <h3 className="Registertitle">Welcome! Please Register</h3>

        <form>

        <div className="inputgroup"  >
        <label  >Email</label>
        <input  type ='email'></input>


        </div>

        <div className="inputgroup"  >
        <label  >Username</label>
        <input type ='text'></input>


        </div>
        <div className="inputgroup"  >
        <label  >Password</label>
        <input  type ='password'></input>


        </div>
        <div className="inputgroup"  >
        <label>Confirm Password</label>
        <input type ='password'></input>


        </div>
        <button type='submit' className='loginbtn' >Sign Up</button>
        <p>If you already have an account  login <Link to="/Login">Here</Link></p>
        </form>


        </div>


        </div>



       

      </withRouter>



    );
}
 export default Register;
