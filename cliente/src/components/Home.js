import React from 'react';
import './css/login.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Home = () => {


    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:4000/login", {
            method: "POST", body: JSON.stringify(valida),
            headers: { "Content-Type": "application/json" }
        })
        const data = await res.json();

        if (data === "usuario no existe") {
            alert("intentelo de nuevo");
        } else if (data === "usuario existe") {
            alert("usuario logueado con exito");
            navigate('/logueado');
        }

    };

    const [valida, validacion] = useState({
        usuario_docente: "",
        contrasena_docente: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        validacion({ ...valida, [e.target.name]: e.target.value });
    };


    return (
        <div className="container" >
            <h1> Iniciar Sesion</h1>
            <form onSubmit={handleSubmit}>
                <div className="date" >
                    <input type="text" name='usuario_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Nombre de Usuario</label>
                </div>
                <div className="date" >
                    <input type="password" name='contrasena_docente' onChange={handleChange} required autoComplete='on' />
                    <span></span>
                    <label>Contrasena</label>
                </div>
                <div className="forgot-pass" > olvido su contrasena?</div>
                <input className="btn-login" type="submit" value="Iniciar sesion" />
                <div className="link-registrarse">
                    No estas registrado? <a className="enlace-registrate" href="/registrate"> Registrate</a>
                </div>
            </form>



        </div>
    );
}

export default Home;
