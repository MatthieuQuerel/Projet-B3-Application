import { Link } from "react-router-dom"; // Si vous prévoyez d'utiliser React Router
import './Nav_Bar.css';
function NavBar() {
  return (
    <nav className="navbar">
      <ul>
      <li>
          <Link to="/"><a><img className="nav-Logo" src="/public/Image Video/Image/LOGO.png" alt="Logo Club"/></a></Link>
        </li>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/Club">Club</Link>
        </li>
        <li>
          <Link to="/Cours">Cours</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default NavBar;







