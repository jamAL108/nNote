import './App.css';
import React from 'react';
import { Routes , Route } from 'react-router-dom';

import Outer from './pages/outer';
import Register from './pages/logins/signup.js';
import Login from './pages/logins/login.js';

function App() {
  return (
     <Routes>
      <Route path='/' element={<Outer/>}/>

      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      
     </Routes>
  );
}

export default App;
