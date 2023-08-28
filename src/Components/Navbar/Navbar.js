import React from 'react';
import './index.css';
import icon from '../Assets/icon.png';
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {

  // const loginBtn = { user ? "logout" : "login" }
  // Btn Login will change from login to logout if there is an user logged on



  return (
    <div className='navbar-container'>

      <div className='icon-container'>
        <img className='navbar-icon' src={icon}></img>
      </div>

      <div className='navigation-container'>
        <Link to="/"> <button>Home</button> </Link>
        <Link to="/about" > <button>About</button> </Link>
        <Link to="/login"> <button>Login</button> </Link>
        <Link to="/signup"> <button>SignUp</button> </Link>
        {user ? <Link to="/profile"> <button>My Page</button> </Link> : null }
      </div>

      <div className='user-container'>
        {user ?
          <div>
            <p>User: {user.name}</p>
            <p>Location: {user.location}</p>
          </div>
          :
          null}
      </div>

    </div>
  )
}

export default Navbar;