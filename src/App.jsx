//import React from 'react';
import  { useState } from 'react';
import NavBar from './components/Nav_Bar'; // Assurez-vous d'importer correctement le composant NavBar
import Accueil from './components/Accueil.jsx';
import Club from './components/Club.jsx';
import Cours from './components/Cours.jsx';
import CoursSpecifique from './components/CoursSpecificiter.jsx';
import Contact from './components/Contact.jsx';
import Tarif from './components/Tarif.jsx';
import Erreur from './components/Erreur.jsx';

//const conection = require('../Conection.cjs');
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
          <Route path="/Cours" element={<Cours />} />
          <Route path="/Tarif" element={<Tarif />} />
          <Route path="/Cours/CoursSpecifique" element={<CoursSpecifique />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<Erreur />} />
        </Routes>
       
      </div>
    </Router>
  );
}
export default App;
