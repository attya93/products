import {  NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
        
         <div className="container-fluid">
         <NavLink className="navbar-brand fs-5 text-muted "   to="/">
             Home
         </NavLink>
  </div>
</nav>
  )
}

export default Navbar