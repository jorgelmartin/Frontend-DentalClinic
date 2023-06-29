import React, { useState } from "react"; 1
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/ApiCalls";

export const Register = () => {

    const [user, setUser] = useState({
        fullname: "",
        email: "",
        password: "",
        dni: "",
        address: "",
        age: "",
        phone: "",
    });

    const [userError, setUserError] = useState({
        fullname: "",
        email: "",
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

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
    
            e.preventDefault();
            registerMe(user)
                .then(() => {
// console.log(user);
                    setTimeout(() => {
                        navigate("/profile");
                    }, 2000);

                })
                .catch((error) => console.log(error));
        
    };



    return (
        <div className="registerDesign">
            <Container className="d-flex justify-content-center align-items-center mt-4">
                <Card>

                    <Card.Body>
                        <Card.Title className="text-center mb-3 display-5">Registro</Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Nombre completo:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.fullNameError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su nombre..."}
                                        name={"fullName"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Email:</Form.Label>
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
                                <Form.Label column>Contraseña:</Form.Label>
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
                                <Form.Label column>DNI/NIE:</Form.Label>
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
                                <Form.Label column>Dirección:</Form.Label>
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
                                <Form.Label column>Edad:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.ageError === ""
                                                ? "normalInputRegister"
                                                : "normalInputRegister errorInput"
                                        }
                                        placeholder={"Ingrese su edad..."}
                                        name={"age"}
                                        state={setUser}
                                        errorState={setUserError}
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Teléfono:</Form.Label>
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
                            <div className="text-center">
                                <Button onClick={(e) => {
                                    submitHandler(e);
                                }} style={{ backgroundColor: '#13326fba' }} className="w-50" type="submit">
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