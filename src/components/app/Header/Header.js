import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
class Header extends Component {

    render() {
        return (
            <div className="mainflex">
            <div className="imglogo">
              </div>
            <nav id="main" className="main" >
              <ul>
                <li><Link to="/home">Inicio</Link></li>
                <li><Link to="/login">login</Link></li>
                <li><Link to='/hotel/categorias/list'>Habitaciones</Link></li>
                <li><Link to="/photos">Fotos</Link></li>
                <li><Link to='/form'>Registrate</Link></li>
              </ul>

            </nav>
            <span id="main-icon" className="main_icon" >
              <i className="fa fa-bars fa-2x " aria-hidden="true"></i>
            </span>
          </div>
        );
    }
}

export default Header;
