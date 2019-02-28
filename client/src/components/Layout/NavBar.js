import React from 'react';
import { Link } from 'react-router-dom';

const navBar = props => {
   return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
         <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item">
                  <Link to="/" className="nav-link">Launches</Link>
               </li>
               <li className="nav-item">
                  <Link to="/rockets" className="nav-link">Rockets</Link>                  
               </li>
            </ul>
         </div>
      </nav>
   );
};

export default navBar;