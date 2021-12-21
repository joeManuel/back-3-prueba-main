import React from 'react';
import './css/styles.css';
import logo from '../images/FacciLOGO.png';


const Navbar = () => {
    return (
        <header className="nav">
            <nav className="navbar">

                <a href={'/'}> <img className="logo-nav" src={logo} /> </a>
                <a className="nav-gest-lab" href={'/'} > <h5>GESTION DE LABORATORIOS</h5>  </a>
                <ul className="nav-menu">
                    {/* <button className="btn-registrarse" >Registrarse</button> */}
                    {/* <li> <a to='' > Registrarse </a>  </li> */}
                    {/* <li> <a to='' > hola 2 </a>  </li>
                    <li> <a to='' > hola 3</a>  </li> */}
                </ul>

            </nav>


        </header>


    )
}

export default Navbar
