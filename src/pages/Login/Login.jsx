import React, { useState } from "react";
import jwt_decode from "jwt-decode";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
import { checkError } from "../../services/usefull";
import { loginMe } from "../../services/ApiCalls";
import { useNavigate } from "react-router-dom";

//RDX
//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";

export const Login = () => {

  //Instancio Redux en modo lectura y escritura

  //Dispatch escritura
  const dispatch = useDispatch();

  //useSelector es para el modo de lectura
  const credentialsRdx = useSelector(userData);

  //Instanciamos useNavigate dentro de la constante navigate
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState(
    //   {
    //   email: "",
    //   password: "",
    // }
  );

  const [credentialsError, setCredentialsError] = useState({
    // emailError: "",
    // passwordError: "",
  });

  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    //Ahora vamos a proceder a bindear o atar los inputs mediante
    //la presente función handler a sus correspondientes estados en el hook, que
    //ahora se llama credentials.

    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const inputCheck = (e) => {
    let mensajeError = checkError(e.target.name, e.target.value);

    setCredentialsError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: mensajeError,
    }));
    // checkError(e.target.name, e.target.value); ver que hace
  };

  const logMe = () => {
    loginMe(credentials)
      .then((resultado) => {
        let decodificado = jwt_decode(resultado.data.token);

        let datosBackend = {
          token: resultado.data.token,
          user: decodificado
        }

        //Guardo en redux.....
        dispatch(login({ credentials: datosBackend }))

        setTimeout(() => {
          navigate("/");
        }, 3500);

        setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="loginDesign">
      {welcome !== "" ? (
        <div>{welcome}</div>
      ) : (
        <div>
          {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
          {<pre>{JSON.stringify(credentials, null, 2)}</pre>}

          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"email"}
            design={
              credentialsError.emailError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Email...."}
            name={"email"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.emailError}</div>
          <InputText
            // type, design, placeholder, name, functionHandler, onBlurFunction
            type={"password"}
            design={
              credentialsError.passwordError === ""
                ? "normalInput"
                : "normalInput errorInput"
            }
            placeholder={"Password...."}
            name={"password"}
            functionHandler={inputHandler}
            onBlurFunction={inputCheck}
          />
          <div className="errorText">{credentialsError.passwordError}</div>

          <div onClick={() => logMe()} className="botonLogin">
            Login me!
          </div>
        </div>
      )}
    </div>
  );
};