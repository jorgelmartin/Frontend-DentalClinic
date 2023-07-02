
import React, { useEffect } from 'react';
import "./Header.css";

//Método de conexión en modo lectura y escritura a RDX.
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";

import { useNavigate } from 'react-router-dom';

export const Header = () => {

    const datosCredencialesRedux = useSelector(userData);
    console.log(datosCredencialesRedux.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //Guardo los datos de REDUX en una constante para poder acceder a ellos en Header
    console.log("datosCredencialesRedux:", datosCredencialesRedux.credentials?.token);

    useEffect(() => {

        if (!datosCredencialesRedux.credentials?.token) {
            navigate("/login");
        }
    }, []);

    const handleLogout = () => {
        // Agregar aquí la lógica de logout o limpiar los datos de autenticación, si es necesario.
        // Por ejemplo, si utilizas Redux, aquí podrías despachar una acción para limpiar los datos de autenticación.
        dispatch(logout({ credentials: "" }));

        // Luego, redirecciona a la página de inicio (Home) después de logout.
        navigate("/login");
    };



    return (
        <div className='headerDesign'>
            <div className='linksDesign'>
                {/* <div className="headerLink" onClick={() => navigate("/about")}> :)SMILE(:</div> */}
                <div className="headerLink" onClick={() => navigate("/home")}>:(SMILE:)</div>
            </div>
            {datosCredencialesRedux.data ? (
                <div className="linksDesignToken">
                    {datosCredencialesRedux.data.role === 3 ? ( // Condición para roleId igual a 3
                        <>
                            <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                            <div className="headerLink" onClick={() => navigate("/appointment")}>PideTuCita</div>
                            <div className="headerLink" onClick={handleLogout}>Logout</div>
                        </>
                    ) : datosCredencialesRedux.data.role === 2 ? ( // Condición para roleId igual a 2
                        <>
                            <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                            <div className="headerLink" onClick={() => navigate("/admin")}>Admin</div>
                            <div className="headerLink" onClick={handleLogout}>Logout</div>
                        </>
                    ) : (
                        <>
                            <div className="headerLink" onClick={() => navigate("/login")}>Login</div>
                            <div className="headerLink" onClick={() => navigate("/register")}>Register</div>
                        </>
                    )}

                </div>
            ) : (
                <>
                    {/* Renderizar el contenido si no se cumple la condición datosCredencialesRedux.data */}
                </>
            )}
        </div>
    );

};

// why dont show Citas and Admin?