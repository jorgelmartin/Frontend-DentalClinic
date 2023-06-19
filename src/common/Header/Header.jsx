
import React, { useState } from 'react';
import "./Header.css";

import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const [token, setToken] = useState("");

    //Instancio navigate para poder moverme entre la SPA
    const navigate = useNavigate();

    return (
        <div className='headerDesign'>

            {token !== ""

                ? (
                    <div>aqui si mostraríamos opciones de logeado....</div>
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