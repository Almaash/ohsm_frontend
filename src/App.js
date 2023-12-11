import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Components/Register';
import Profile from './Components/Profile';
import Stricture from './Components/Stricture';
import Property from './Components/Property';
import Inventory from './Components/Inventory';
import Propinfo from './Components/Propinfo';
import Propstrct from './Components/Propstrct';
import Inventinfo from './Components/Inventinfo';
import Inventstr from './Components/Inventstr';

function App() {
  return (
    <>
    <Router>
      <Routes>
    
          <Route path="/" element={<Register/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/stricture" element={<Stricture/>}/>
          <Route path="/property" element={<Property/>}/>
          <Route path="/inventory" element={<Inventory/>}/>
          <Route path="/inventinfo" element={<Inventinfo/>}/>
          <Route path="/inventstr" element={<Inventstr/>}/>
          <Route path="/propinfo" element={<Propinfo/>}/>
          <Route path="/propstrct" element={<Propstrct/>}/>
          
          
      </Routes>
    </Router>
    </>
  );
}

export default App;
