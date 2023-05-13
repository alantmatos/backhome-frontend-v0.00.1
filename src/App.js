import './App.css'
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import Home from './Components/Home/Home';
import Stories from './Components/Stories/Stories';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Signup from './Components/SignUp/Signup';
import { Link } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  
  return (
    <BrowserRouter>
    <nav> <Navbar> </Navbar> </nav>
    <Routes>
      <Route exact path='/' element={<Home></Home>}> </Route>
      <Route path='/home' element={<Home></Home> }> </Route>
      <Route path='/about' element={<About></About>}> </Route>
      <Route path='/login' element={<Login  ></Login>}></Route>
      <Route path='/signup' element={<Signup></Signup>}></Route>
    </Routes>
    <nav> <Footer></Footer> </nav>
  </BrowserRouter>
  );
}

export default App;
