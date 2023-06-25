import React from "react";
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Card, Container, Row, Col } from 'react-bootstrap';



export const Register = () => {
    const inputFields = [
        { label: 'Nombre completo:', type: 'text', placeholder: 'Escribe tu nombre...', name: 'fullname' },
        { label: 'Email:', type: 'email', placeholder: 'Escribe tu email...', name: 'email' },
        // Agrega el resto de los inputs aquí
    ];

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
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu nombre..."
                                        name="fullname"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Email:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="email"
                                        placeholder="Escribe tu email..."
                                        name="email"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Contraseña:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="password"
                                        placeholder="Escribe tu contraseña..."
                                        name="password"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>DNI/NIE:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu DNI..."
                                        name="nif"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Dirección:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu dirección..."
                                        name="address"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Edad:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu edad..."
                                        name="age"
                                    />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label column>Teléfono:</Form.Label>
                                <Col>
                                    <Form.Control
                                        type="text"
                                        placeholder="Escribe tu teléfono..."
                                        name="phone"
                                    />
                                </Col>
                            </Form.Group>
                            <div className="text-center">
                <Button style={{ backgroundColor: '#13326fba' }} className="w-50" type="submit">
                  Registro
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