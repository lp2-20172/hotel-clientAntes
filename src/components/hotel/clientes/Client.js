import React, { Component } from 'react';
import {
    Switch,
    Route,
    Link,
    NavLink

} from 'react-router-dom'
class Client extends Component {

    render() {
        return (
            <div className="imgbackground portada">
            <div className="reserva">
                <input className="form2" type="text"  placeholder="Nombre"></input>
                <input className="form2" type="text"  placeholder="Apellido"></input>
                <input className="form2" type="text"  placeholder="DNI"></input>
                <input className="form2" type="email" placeholder="E-mail"></input>
                <input className="form2btn"  type="button" name="aceptar" value="Aceptar"/>
            </div>

          </div>
        );
    }
}

export default Client;