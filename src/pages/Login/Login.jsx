import React, { useState, useEffect } from "react";
import "./Login.css";
import { InputText } from "../../common/InputText/InputText";
// import { checkError, inputHandler } from "../../services/useful";
import { loginMe } from "../../services/ApiCalls";
import { Button, Card, Col, Container, Row, Form } from "react-bootstrap";


import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

//RDX
//Importo métodos de Redux
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
// import { inputHandler } from "../../services/useful";

export const Login = () => {




  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [token, setToken] = useState("");
  const [userError, setUserError] = useState({
    credentials: "",
  });

  //Instancio Redux en modo lectura y escritura

  //Dispatch escritura
  const dispatch = useDispatch();

  //useSelector es para el modo de lectura
  const credentialsRdx = useSelector(userData);

  //Instanciamos useNavigate dentro de la constante navigate
  const navigate = useNavigate();

  const [welcome, setWelcome] = useState("");



  const submitHandler = (e, body) => {
    e.preventDefault();
    loginMe(body)
      .then((res) => {
        setToken(res.data.token);
        console.log(body);
      })
      
      .catch((error) => {
        console.log(error)
        setUserError({ credentials: error.response.data.message });
      });
  };

  useEffect(() => {
    if (token) {
      let decoded = jwtDecode(token);
      console.log(decoded)
      dispatch(
        login({
          token: token,
          name: decoded.name,
          role: decoded.roleId,
          userId: decoded.userId
        })
      );
      navigate("/");
    }
  }, [token]);


  return (
    <div className="loginDesign">
      {/* {welcome !== "" ? (
        <div>{welcome}</div>
      ) : ( */}
        
          {/* La utilidad de la siguiente linea es renderizar un hook at tiempo real en el DOM */}
          {/* {<pre>{JSON.stringify(credentials, null, 2)}</pre>} */}
      <Container className="d-flex justify-content-center align-items-center mt-4">
        <Card>
          <Card.Body>
        <Row className="justify-content-center align-items-center">
          <Col xs={10} md={6}>
            <Form as={Row}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              
                  <Form.Label>Email:</Form.Label>
                <Col>
                  <InputText
                    type={"email"}
                    design={userError.emailError ? "errorInput" : ""}
                    name={"email"}
                    placeholder={"Enter email"}
                    state={setUser}
                    errorState={setUserError}
                  />
                </Col>
            
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              
                
                  <Form.Label>Password:</Form.Label>
              
                <Col>
                  <InputText
                    type={"password"}
                    design={userError.passwordError ? "errorInput" : ""}
                    name={"password"}
                    placeholder={"Password"}
                    state={setUser}
                    errorState={setUserError}
                  />
                </Col>
                        </Form.Group>
              {userError?.credentials ? (
                <div>{userError.credentials}</div>
              ) : (
                <div></div>
              )}
              <Button
                style={{ backgroundColor: '#13326fba' }}
                type="submit"
                onClick={(e) => {
                  submitHandler(e, user);
                }}
              >
                Iniciar sesión!
              </Button>
            </Form>
          </Col>
        </Row>
        </Card.Body>
        </Card>
      </Container>
      </div>
    
  );
};



//BUSCAR ERRORES

// import axios from 'axios';
// try {
//   const response = await axios.get('http://localhost:4000/user/getUser');
//   // Manejar la respuesta exitosa aquí
// } catch (error) {
//   if (error.response) {
//     // El servidor respondió con un código de error (por ejemplo, 404)
//     console.log(error.response.data);
//     console.log(error.response.status);
//     console.log(error.response.headers);
//   } else if (error.request) {
//     // No se recibió ninguna respuesta del servidor
//     console.log(error.request);
//   } else {
//     // Ocurrió un error al realizar la solicitud
//     console.log('Error', error.message);
//   }
// };

  // const logMe = () => {
  //   loginMe(credentials)
  //     .then((resultado) => {
  //       let decodificado = jwt_decode(resultado.data.token);
  //       console.log(decodificado);
  
  //       // Dividir el token en sus partes: encabezado, carga útil y firma
  //       const parts = resultado.data.token.split('.');
  //       const encodedPayload = parts[1];
  
  //       // Decodificar la carga útil
  //       const decodedPayload = atob(encodedPayload);
  //       const payload = JSON.parse(decodedPayload);
  
  //       let datosBackend = {
  //         token: resultado.data.token,
  //         user: payload
  //       };
  
  //       console.log(datosBackend);
  //       // Guardo en redux.....
  //       dispatch(login({ credentials: datosBackend }));
  
  //       setTimeout(() => {
  //         navigate("/");
  //       }, 1700);
  
  //       setWelcome(`Bienvenid@ de nuevo ${payload.fullname}`);
  //     })
  //     .catch((error) => console.log(error));
  // };


    // const inputHandler = (e) => {
  //   // Ahora vamos a proceder a bindear o atar los inputs mediante
  //   // la presente función handler a sus correspondientes estados en el hook, que
  //   // ahora se llama credentials.

  //   // Mara
  //   const { name, value } = e.target;
  //   setCredentials((prevState) => ({
  //     ...prevState,
  //     [name]: value
  //   }));

  //   // David :
  //   // setCredentials((prevState) => ({
  //   //   ...prevState,
  //   //   [e.target.name]: e.target.value,
  //   // }));
  // };

  // const inputCheck = (e) => {
  //   let mensajeError = checkError(e.target.name, e.target.value);

  //   setCredentialsError((prevState) => ({
  //     ...prevState,
  //     [e.target.name + "Error"]: mensajeError,
  //   }));
  //   // checkError(e.target.name, e.target.value); ver que hace
  // };



  // DAVID way to do
  // const logMe = () => {
  //   loginMe(credentials)
  //     .then((resultado) => {
  //       let decodificado = jwt_decode(resultado.data.token);

  //       let datosBackend = {
  //         token: resultado.data.token,
  //         user: decodificado
  //       }

  //       //Guardo en redux.....
  //       dispatch(login({ credentials: datosBackend }))

  //       setTimeout(() => {
  //         navigate("/");
  //       }, 2000);

  //       setWelcome(`Bienvenid@ de nuevo ${decodificado.name}`);
  //     })
  //     .catch((error) => console.log(error));
  // };

  //Mara way to do