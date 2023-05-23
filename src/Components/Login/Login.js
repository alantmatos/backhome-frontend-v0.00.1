import React , {useState }from 'react';
import './index.css';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {

  let navigate = useNavigate();
  
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [errors, setErrors] = useState([]);

  const login = (e) => {

    console.log('ran')
      
      e.preventDefault();

      fetch('/login', {
          method: 'POST',
          headers: {
              "Content-Type":"application/json",
          },
          body: JSON.stringify({ email,password }),})
          .then((r)=> {
              if (r.ok) {
                  r.json().then((user) => {
                      setUser(user)
                  })
                  .then(                    
                    navigate('/profile')
                  )
              } else {
                  r.json().then((err) => { setErrors(err.errors)})
              }
          });
          
  }





  return (
    <div className='login-container'>
      <div className='left'>
        <h3>Welcome Back !</h3>
        <h5>First time here? Please create an account </h5><br></br>
        <Link to="/signup"> <button>SignUp</button> </Link>
      </div>
      <div className='right'>
        <form>
          <div>
            <label>Email:</label><br></br>
            <input type='text' onChange={(e)=>setEmail(e.target.value)}></input>
          </div>
          <div>
            <label>Password:</label><br></br>
            <input type='password' onChange={(e)=>setPassword(e.target.value)}></input>
          </div>
          <div className='btn-container'>
            <button onClick={(e)=>{login(e)}}>Login</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login