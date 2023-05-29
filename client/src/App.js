import logo from './logo.svg';
import './App.css';
import Outer from './pages/outer';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
     <Routes>
      <Route path='/' element={<Outer/>}/>
     </Routes>
  );
}

export default App;
