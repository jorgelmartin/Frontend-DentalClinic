import React, { useState } from "react";
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";


export const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "Jorge",
        lastname: "Martin",
        email: "jorge@jorge.com",
        password: "123456",
        dni: "35435341y",
        address: "dslihgsld",
        age: "28",
        phone: "600297521",
    });
    const [token, setToken] = useState("");

    const [userError, setUserError] = useState({
        name: "",
        lastname: "",
        password: "",
        dni: "",
        address: "",
        age: "",
        phone: "",
    });

    // const inputHandler = (e) => {

    //     setCredentials((prevState) => ({
    //         ...prevState,
    //         [e.target.name]: e.target.value,
    //     }));
    // };

    // const inputCheck = (e) => {

    //     let mensajeError = checkError(e.target.name, e.target.value);

    //     setCredentialsError((prevState) => ({
    //         ...prevState,
    //         [e.target.name + "Error"]: mensajeError,
    //     }));
    // };



    const submitHandler = (e, body) => {
        console.log("submithandler", body);
        e.preventDefault();
        registerMe(body)
            .then(() => {
                navigate("/login");
            })

            .catch((error) => {
                setUserError({ credentials: error.response.data.message });
            });
    };



    return (
        <div className="registerDesign">
            <Container fluid className="d-flex justify-content-center align-items-center mt-4">
                <Card className="registerCard" style={{ backgroundColor: '#3c709a61' }}>
                    <Card.Body >
                        <Card.Title className="text-center mb-3 display-5">Registro</Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Nombre:</Form.Label>
                                <Col> {/* Ajusta el tamaño de la columna para que ocupen el espacio deseado */}
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.nameError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su nombre..."}
                                        name={"name"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Apellido:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.lastnameError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su apellido..."}
                                        name={"lastname"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Email:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"email"}
                                        design={
                                            userError.emailError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su email..."}
                                        name={"email"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Contraseña:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"password"}
                                        design={
                                            userError.passwordError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su contraseña..."}
                                        name={"password"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>DNI/NIE:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.dniError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su dirección..."}
                                        name={"address"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Dirección:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.addressError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su dni..."}
                                        name={"dni"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column xs={4} md={4} lg={4}>Teléfono:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.phoneError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su teléfono..."}
                                        name={"phone"}
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
                            <div className="text-center">
                                <Button onClick={(e) =>
                                    submitHandler(e, user)
                                } style={{ backgroundColor: '#13326fba' }} className="w-50" type="submit">
                                    Registrarme!
                                </Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};


// import React from 'react';

// const RegisterForm = () => {
//   const inputFields = [
//     { label: 'Nombre completo:', type: 'text', placeholder: 'Escribe tu nombre...', name: 'fullname' },
//     { label: 'Email:', type: 'email', placeholder: 'Escribe tu email...', name: 'email' },
//     // Agrega el resto de los inputs aquí
//   ];

//   return (
//     <div className="registerDesign">
//       <div className="container">
//         <h2>Registro</h2>
//         {inputFields.map((input, index) => (
//           <div className="dataRegister" key={index}>
//             <span className="label">{input.label}</span>
//             <input
//               type={input.type}
//               placeholder={input.placeholder}
//               name={input.name}
//               className="input-inline"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;