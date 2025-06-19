import React from 'react';
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";
import { useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';

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

                            {/* DROPDOWN */}
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="secondary"
                                    id="dropdown-basic" 
                                    className="dropdownStyle"
                                    >
                                    Citas
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => navigate("/createappointment")}>Crear cita</Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate("/appointments")}>Mis citas</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="headerLink" onClick={handleLogout}>Salir</div>
                        </>
                    ) : userDataRedux.data.role === 2 ? (
                        <>
                            <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>

                            {/* DROPDOWN */}
                            <Dropdown>
                                <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                    Admin
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => navigate("/users")}>Usuarios</Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate("/appointments")}>Citas</Dropdown.Item>
                                    <Dropdown.Item onClick={() => navigate("/accesslogs")}>Logs de accesso</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="headerLink" onClick={handleLogout}>Salir</div>
                        </>
                    ) : (
                        <>
                            <div className="headerLink" onClick={() => navigate("/login")}>Entrar</div>
                            <div className="headerLink" onClick={() => navigate("/register")}>Regístrate</div>
                        </>
                    )}
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};