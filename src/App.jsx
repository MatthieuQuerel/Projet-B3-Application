//import React from 'react';
import  { useState } from 'react';
import NavBar from './components/Nav_Bar'; // Assurez-vous d'importer correctement le composant NavBar
import Accueil from './components/Accueil.jsx';
import Club from './components/Club.jsx';
import Erreur from './components/Erreur.jsx';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import './App.css';
 function App() {
  const [showNavigation, setShowNavigation] = useState(false);

  const toggleNavigation = () => {
      setShowNavigation(!showNavigation);
  };
  return (
    <Router>
      <div className="App">
      <button onClick={toggleNavigation}>=</button>
        {showNavigation &&  <NavBar />}
        <Routes >
          <Route path="/" exact element={<Accueil />} />
          <Route path="/Club" element={<Club />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
       
      </div>
    </Router>
  );
}
export default App;
