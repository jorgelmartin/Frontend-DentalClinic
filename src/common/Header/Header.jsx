
import React, { useEffect } from 'react';
import "./Header.css";

//Método de conexión en modo lectura y escritura a RDX.
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";

import { useNavigate } from 'react-router-dom';

export const Header = () => {


    const datosCredencialesRedux = useSelector(userData);
    console.log(datosCredencialesRedux.name);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
    console.log("datosCredencialesRedux:", datosCredencialesRedux.credentials?.name);

    useEffect(() => {

        if (!datosCredencialesRedux.credentials?.token) {
            navigate("/login");
        }
    }, []);


    return (
        <div className='headerDesign'>
            <div className='linksDesign'>
                <div className="headerLink" onClick={() => navigate("/about")}>(: SMILE :)</div>
                <div className="headerLink" onClick={() => navigate("/home")}>Services</div>
            </div>
            {datosCredencialesRedux.credentials?.token ? (
                <div className="linksDesignToken">
                    <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                    {datosCredencialesRedux.credentials?.role === 3 && ( // Condición para roleId igual a 1
                        <div className="headerLink" onClick={() => navigate("/appointment")}>Citas</div>
                    )}
                    {datosCredencialesRedux.credentials?.role === 2 && ( // Condición para roleId igual a 2
                        <div className="headerLink" onClick={() => navigate("/admin")}>Admin</div>
                    )}
                    <div className="headerLink">{datosCredencialesRedux?.credentials?.user?.name}</div>
                    <div className="headerLink" onClick={() => dispatch(logout({ credentials: "" }))}>Logout</div>
                </div>
            ) : (
                <div className="linksDesign">
                    <div className="headerLink" onClick={() => navigate("/login")}>Login</div>
                    <div className="headerLink" onClick={() => navigate("/register")}>Register</div>
                </div>
            )}
        </div>
    );
}