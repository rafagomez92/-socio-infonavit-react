import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Formulario = () => {
    
    // Estado para guardar el email y el password
    const [ dataLogin, setDataLogin ] = useState({
        email: '',
        password: ''
    });

    // Estado para activar el botón, el estado iniciale es desactivado
    const [ error, setError ] = useState(true);
    
    // Estado para activar el mensaje cuando un input este incorrecto
    const [ messageError, setMessageError] = useState(true);

    // Estado para direccionar a los benevits
    const [ redirect, setRedirect ] = useState(false);
    
    const { email, password } = dataLogin;    
    
    const baseUrl = "https://staging.api.socioinfonavit.io/api/v1/login";

// Comprobamos que email y password tengan valores
    useEffect(() => {        
            if(email && password) {
                setError(false);
            } else {            
                setError(true);
            }       
    },[error, email, password]);


    // Iniciamos sesión
    const handleSubmit = (e) => {
        e.preventDefault();        
        IniciarSesion();         
                    
        setDataLogin({
            email: '',
            password: ''
        });        
        

    }


    // Guardamos los valores introducidos de email y password
    const handleChange = (e) => {        
        setDataLogin({
            ...dataLogin,
            [e.target.name]: e.target.value
        })        
    }

    // Variable para ser utilizada en la llamada axios
    const jsonSend = {
        user: {
            email,
            password
        }
    };

    // Para obtener el header
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
        }
      };

    // Realizamos un post al endpoint donde obtenemos el jwt
    const IniciarSesion = async () => {                
        await axios.post(baseUrl, jsonSend, axiosConfig)
        .then(res => {
            localStorage.jwt = res.headers.authorization;            
            setRedirect(true);            
            
        })
        .catch(err => {
            setMessageError(false);
        })         
    }

    const message = (
        <div className="bg-danger text-white alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Error</strong> Correo o contraseña invalido.
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    );

    return (
        <div className="mt-4 row justify-content-center">
        <form onSubmit={handleSubmit} >
            <div className="form-group">            
                <input 
                    type="email" 
                    name="email"
                    className="form-control" 
                    placeholder="Correo"
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"
                    value={email}
                    onChange={handleChange}                 
                />            
            </div>
            {redirect && <Redirect to="/benevits" />}
            { messageError ? null : message }
            <div className="form-group">            
                <input
                    type="password" 
                    name="password"
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Contraseña"
                    value={password}
                    onChange={handleChange}                 
                />
            </div> 
            {error 
            ? <button className="btn btn-secondary btn-lg" disabled>Submit</button>
            : <button type="submit" className="btn btn-lg btn-danger">Submit</button>
            }           
        </form>                                                            
    </div>

    );
}
 
export default Formulario;