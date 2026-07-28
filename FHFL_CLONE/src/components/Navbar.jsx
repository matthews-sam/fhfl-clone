import logo_green from '../assets/images/Logo_green.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
        <a href="#"><img src={logo_green} alt="Family Homes Funds logo" className="nav-logo"></img></a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">What We Do</a></li>
            <li><a href="#">Our Impact</a></li>
        </ul>
    </nav>
  );
};

export default Navbar;