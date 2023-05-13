import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className='login-container'>


      <div className='left'>

        <h3>Welcome back to BackHome =) </h3>

        <h5> If you don't have an account, please click here</h5>
        <Link to="/signup"> <button>SignUp</button> </Link>

      </div>

      <div className='right'>

        <form>
          <div>
            <label>Email:</label><br></br>
            <input type='text'></input>
          </div>

          <div>
            <label>Password:</label><br></br>
            <input type='password'></input>
          </div>

          <div className='btn-container'>
            <button>Login</button>
          </div>
        </form>

      </div>





    </div>
  )
}

export default Login