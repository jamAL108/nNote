import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Outer from './pages/outer';
import Register from './pages/logins/signup.js';
import Login from './pages/logins/login.js';
import Home from './pages/home';
import Archive from './pages/archive';
import Deleted from './pages/deleted';
import Settings from './pages/settings';

function App() {
  return (
     <Routes>
      <Route path='/' element={<Outer/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/archives' element={<Archive/>}/>
      <Route path='/deleted' element={<Deleted/>}/>
      <Route path='/settings' element={<Settings/>}/>
      
     </Routes>
  );
}

export default App;
