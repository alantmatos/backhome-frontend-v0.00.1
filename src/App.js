import './App.css'
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Stories from './Components/Stories/Stories';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Signup from './Components/SignUp/Signup';
import UserPage from './Components/UserPage/UserPage';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [user, setUser] = useState([]);
  const [pets, setPets] = useState([]);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  
  useEffect(() => { fetchData() }, [])
  const fetchData = () => {
    fetch('/autologin')
      .then((res) => {
        if(res.ok){          
        res.json().then((data) => {
          setUser(data)
        console.log(data)})
        }
      })
  };




  return (
    <BrowserRouter>
      <nav> <Navbar user={user}> </Navbar> </nav>
      <Routes>
        <Route exact path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/login' element={<Login setUser={setUser}></Login>}></Route>
        <Route path='/signup' element={<Signup setUser={setUser}></Signup>}></Route>
        <Route path='/profile' element={<UserPage user={user} ></UserPage>}></Route>
      </Routes>
      <nav> <Footer></Footer> </nav>
    </BrowserRouter>
  );
}

export default App;
