
import React, { useState, useEffect } from 'react';
import "./Header.css";

//Método de conexión en modo lectura y escritura a RDX.
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";

import { useNavigate } from 'react-router-dom';

export const Header = () => {

    //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
    const datosCredencialesRedux = useSelector(userData);

    //Redux en modo escritura
    const dispatch = useDispatch();

    //Instancio navigate para poder moverme entre la SPA
    const navigate = useNavigate();

    useEffect(() => {

        if (!datosCredencialesRedux.credentials?.token) {
            navigate("/");
        }
    }, []);


    return (
        <div className='headerDesign'>

            {datosCredencialesRedux.credentials?.token

                ? (
                    <div className="linksDesign">
                        <div className="headerLink" >{datosCredencialesRedux?.credentials?.user?.name}</div>
                        <div className="headerLink" onClick={() => dispatch(logout({ credentials: "" }))}>Logout</div>
                    </div>
                )

                : (
                    <div className="linksDesign">
                        <div className="headerLink" onClick={() => navigate("/login")}>Login</div>
                        <div className="headerLink" onClick={() => navigate("/register")}>Register</div>
                    </div>
                )

            }

        </div>
    )
}