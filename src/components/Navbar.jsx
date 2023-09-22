import { Link, Outlet } from "react-router-dom";
import "../css/Navbar.css"
import logoImage from "../images/logo.jpeg"; 

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-custom navbar-expand-lg mb-5">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="navbar-brand" href="#">
              <img src={logoImage} alt="Logo" width="70" height="70" /> 
            </a>
          </div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to={`/home`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/about`}>
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={`/contact`}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;
