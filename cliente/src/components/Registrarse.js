import React from 'react';
import './css/registrarse.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Registrarse = () => {

    const [regis, registra] = useState({
        nombre_docente: "",
        apellido_docente: "",
        telefono_docente: "",
        correo_docente: "",
        usuario_docente: "",
        contrasena_docente: "",
    });
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();

        const resul = await fetch("http://localhost:4000/usuario", {
            method: "POST", body: JSON.stringify(regis),
            headers: { "Content-Type": "application/json" }
        })
        const dato = await resul.json();
        
        if (dato === "usuario no guardado") {
            alert("intentelo de nuevo");
        } else if (dato === "usuario guardado") {
            alert("usuario registrado con exito");
            navigate('/logueado');
        }
    };
    const handleChange = (e) => {
        registra({ ...regis, [e.target.name]: e.target.value });
    };



    return (
        <div className="container-registrarse" >
            <h1> Registrate:</h1>
            <form onSubmit={handleRegister} className="registrarse">
                <div className="date" >
                    <input type="text" name='nombre_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Nombres</label>
                </div>
                <div className="date" >
                    <input type="text" name='apellido_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Apellidos</label>
                </div>
                <div className="date" >
                    <input type="text" name='correo_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Correo electronico</label>
                </div>
                <div className="date" >
                    <input type="text" name='telefono_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Telefono</label>
                </div>
                <div className="date" >
                    <input type="text" name='usuario_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Nombre de Usuario</label>
                </div>
                <div className="date" >
                    <input type="password" name='contrasena_docente' onChange={handleChange} required />
                    <span></span>
                    <label>Contrasena</label>
                </div>
                <div className="date" >
                    <input type="password" required />
                    <span></span>
                    <label>Repetir Contrasena</label>
                </div>
                <input className="btn-login" type="submit" value="Registrar" />
                <div className="link-registrarse">
                    Ya estas registrado? <a className="enlace-iniciar sesion" href="/"> Inicar sesion</a>
                </div>
            </form>
        </div>
    )
}

export default Registrarse;
