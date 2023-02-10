import { Route,Routes} from 'react-router-dom'
import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { AboutUs }  from './container';
import {  Header } from './container';
import { Menu } from './container';


function App()   {
  return (


    <Routes>  
<Route path='/' element={<Navbar/>} />
<Route path='/home' element={<Header/>} />
<Route path='/about' element={<AboutUs/>} />
<Route path='/menu' element={<Menu/>} />



  </Routes>
 


);
}

export default App;