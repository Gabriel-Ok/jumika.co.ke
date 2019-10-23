import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import ThriftTemplate from "./ThriftTemplate";
import take from "./take.png";

function Register(){
    return(
      <withRouter>

        <div className="Register">
        <div className="fullscreencontainer" style = {{backgroundImage: 'url('+take+')',
      height: '100vh', width: '100vw', backgroundSize: 'cover', backgroundPosition: 'center',
        display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <div className="Registercontainer" style = {{backgroundColor: 'hsla(201, 100%, 6%, 0.6)', padding: '50px 30px', minWidth: '400px', width: '50%', maxWidth: '600px'}}>
        <h3 className="Registertitle" style = {{color: 'white', textAlign:'center',margin:'0', marginBottom: '40px', fontWeight: 'normal', fontSize:'2.5em'}}>Welcome! Please Register</h3>

        <form>

        <div className="inputgroup" style = {{display: 'flex', flexDirection: 'column', marginBottom : '20px'}} >
        <label style = {{color: 'white', fontWeight: 'lighter', fontSize:'1.5em', marginBottom: '7px' }} >Email</label>
        <input style = {{fontSize: '1.5em', padding: '.1em .25em', backgroundColor: 'hsla(201, 100%, 91%, 0.3)', border: '1px solid hsl(201, 100%, 6%)', outline: 'none', color: 'white', fontWeight: 'lighter'}}  type ='email'></input>


        </div>

        <div className="inputgroup" style = {{display: 'flex', flexDirection: 'column', marginBottom : '20px'}} >
        <label style = {{color: 'white', fontWeight: 'lighter', fontSize:'1.5em', marginBottom: '7px' }} >Username</label>
        <input style = {{fontSize: '1.5em', padding: '.1em .25em', backgroundColor: 'hsla(201, 100%, 91%, 0.3)', border: '1px solid hsl(201, 100%, 6%)', outline: 'none', color: 'white', fontWeight: 'lighter'}}  type ='name'></input>


        </div>
        <div className="inputgroup" style = {{display: 'flex', flexDirection: 'column', marginBottom : '20px'}} >
        <label style = {{color: 'white', fontWeight: 'lighter', fontSize:'1.5em', marginBottom: '7px' }} >Password</label>
        <input style = {{fontSize: '1.5em', padding: '.1em .25em', backgroundColor: 'hsla(201, 100%, 91%, 0.3)', border: '1px solid hsl(201, 100%, 6%)', outline: 'none', color: 'white', fontWeight: 'lighter'}}  type ='password'></input>


        </div>
        <div className="inputgroup" style = {{display: 'flex', flexDirection: 'column', marginBottom : '20px'}} >
        <label style = {{color: 'white', fontWeight: 'lighter', fontSize:'1.5em', marginBottom: '7px' }} >Confirm Password</label>
        <input style = {{fontSize: '1.5em', padding: '.1em .25em', backgroundColor: 'hsla(201, 100%, 91%, 0.3)', border: '1px solid hsl(201, 100%, 6%)', outline: 'none', color: 'white', fontWeight: 'lighter'}}  type ='password'></input>


        </div>
        <button type='submit' className='loginbtn' style = {{fontSize: '1.5em', padding: '10px 30px', width: '100%', backgroundColor: 'hsla(201, 100%, 50%, 0.1)', border: '1px solid hsl(201, 100%, 50%)', outline: 'none', color: 'white', fontWeight: 'lighter', borderRadius: '5px'}}>Sign Up</button>
        </form>


        </div>


        </div>



        </div>

      </withRouter>



    );
}
 export default Register;
