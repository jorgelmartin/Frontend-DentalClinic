import React, {useState} from "react";
import "./Login.css";
import { ChangeView } from '../../common/ChangeView/ChangeView';
import { InputText } from "../../common/InputText/InputText";

export const Login = () => {


  const [credentials, setCredentials] = useState({
    email: "",
    password: ""
  });


  const InputHandler = (e) => {

    setCredentials((prevState) => ({
        ...prevState,
        //En este punto es donde el handler 
        //asigna el valor a la propiedad adecuada....

        [e.target.name]: e.target.value,
        
      }));

  }


  return (
    <div className="loginDesign">
    {<pre>{JSON.stringify(credentials, null,2)}</pre>}

      <div className="navLogin">
        <ChangeView path={"/"} name={"Home"} />
        <ChangeView path={"/register"} name={"Register"} />
      </div>

      <div className="loginForm">
        <InputText 
            type={"email"}
            placeholder={"email..."}
            name={"email"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
        />
        <InputText 
            type={"password"}
            placeholder={"password..."}
            name={"password"}
            classDesign={"InputText"}
            functionHandler={InputHandler}
        />
      </div>
    </div>
  );
};