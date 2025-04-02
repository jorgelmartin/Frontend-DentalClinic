
import React from 'react';
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";
import { useNavigate } from 'react-router-dom';

export const Header = () => {

    //GETTING CREDENTIALS FROM REDUX
    const userDataRedux = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //LOGOUT
    const handleLogout = () => {
        dispatch(logout({ credentials: "" }));
        navigate("/home");
    };

    return (
        <div className='headerDesign'>
            <div className='linksDesign'>
                <div className="headerLink" onClick={() => navigate("/home")}>:(SMILE:)</div>
            </div>
            {userDataRedux.data ? (
                <div className="linksDesignToken">
                    {userDataRedux.data.role === 3 ? (
                        <>
                            <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                            <div className="headerLink" onClick={() => navigate("/menu")}>Citas</div>
                            <div className="headerLink" onClick={handleLogout}>Salir</div>
                        </>
                    ) : userDataRedux.data.role === 2 ? (
                        <>
                            <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                            <div className="headerLink" onClick={() => navigate("/menu")}>Admin</div>
                            <div className="headerLink" onClick={handleLogout}>Salir</div>
                        </>
                    ) : (
                        // IF THERE IS NO TOKEN SHOW THIS
                        <>
                            <div className="headerLink" onClick={() => navigate("/login")}>Entrar</div>
                            <div className="headerLink" onClick={() => navigate("/register")}>Regístrate</div>
                        </>
                    )}
                </div>
            ) : (
                <>
                </>
            )}
        </div>
    );
};