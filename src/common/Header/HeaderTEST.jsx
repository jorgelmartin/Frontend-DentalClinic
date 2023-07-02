
import React, { useEffect, useState } from 'react';
import "./Header.css";

//Método de conexión en modo lectura y escritura a RDX.
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";
import { InputText } from '../InputText/InputText';
import { searchAppointment } from '../../services/ApiCalls';

import { useNavigate } from 'react-router-dom';
import { debounce } from "lodash";

export const Header = () => {

    const [criteria, setCriteria] = useState("");
    const [products, setProducts] = useState([]);

   


    useEffect(() => {
        //Voy a aplicar mi proceso de debounce....

        if (criteria !== "") {
            const bring = setTimeout(() => {
                //El siguiente bloque es la búsqueda en si
                searchCharacter(criteria)
                    .then((resultado) => {
                        console.log("he buscado");
                        setProducts(resultado.data.results);
                    })
                    .catch((error) => console.log(error));
                ///////////////////////////////////////////
            }, 350);

            return () => clearTimeout(bring);

        } else if (criteria === "") {
            bringProducts()
                .then((resultados) => {
                    setProducts(resultados.data.results);
                })
                .catch((error) => console.log(error));
        }
    }, [criteria]);

    const inputHandler = (e) => {
        setCriteria(e.target.value);
    };

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
            <InputText
                type="search"
                placeholder="Search"
                id="inputDesign"
                aria-label="Search"
                onChange={(e) => criteriaHandler(e)}
            />
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