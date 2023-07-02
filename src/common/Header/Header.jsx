
import React, { useEffect } from 'react';
import "./Header.css";

//Método de conexión en modo lectura y escritura a RDX.
import { useSelector, useDispatch } from "react-redux";
import { userData, logout } from "../../pages/userSlice";
import { InputText } from '../InputText/InputText';
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
          {/* Add Bootstrap classes to center the InputText */}
          <div className="inputWrapper d-flex justify-content-center mb-3 d-none d-md-block">
            <InputText></InputText>
          </div>
          {datosCredencialesRedux.data ? (
            <div className="linksDesignToken">
              {datosCredencialesRedux.data.role === 3 ? (
                <>
                  <div className="headerLink" onClick={() => navigate("/profile")}>Perfil</div>
                  <div className="headerLink" onClick={() => navigate("/appointment")}>PideTuCita</div>
                  <div className="headerLink" onClick={handleLogout}>Logout</div>
                </>
              ) : datosCredencialesRedux.data.role === 2 ? (
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
              {/* Render content if datosCredencialesRedux.data condition is not met */}
            </>
          )}
        </div>
      );

};

// why dont show Citas and Admin?