import React, { useState } from "react";
import "./Register.css";
import { InputText } from "../../common/InputText/InputText";
import { Form, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { registerMe } from "../../services/apiCalls";
import { ClinicButton } from "../../common/ClinicButton/ClinicButton";
import { WarningModal } from "../../common/WarningModal/WarningModal";

export const Register = () => {

    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [userError, setUserError] = useState({});
    const [showModal, setShowModal] = useState(false);

    //SENDING FORM REGISTER
    const submitHandler = (e, body) => {
        e.preventDefault();
        registerMe(body)
            .then(() => {
                navigate("/login");
            })
            .catch((error) => {
                setUserError({ credentials: error.response.data.message });
            });
    };

    const areAllFieldsFilled = () => {
        if (!user.name || !user.lastname || !user.email || !user.password || !user.dni || !user.address || !user.phone) {
            return false;
        }
        return true;
    };

    return (
        <div className="registerDesign">
            <Container fluid className="d-flex justify-content-center align-items-center mt-4">
                <Card className="registerCard"
                    style={{
                        backgroundColor: 'rgba(64, 139, 209, 0.607)',
                        borderRadius: '8.7em',
                        boxShadow: 'rgba(14, 30, 37, 0.12) 0em 0.125em 0.25em 0em, rgba(14, 30, 37, 0.32) 0em 0.125em 1em 0em'
                    }}>
                    <Card.Body >
                        <Card.Title className="text-center mb-3 display-5"
                            style={{
                                textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)'
                            }}>
                            <strong>Registro</strong>
                        </Card.Title>
                        <Form>
                            <Form.Group as={Row} className="mb-2 mt-4">
                                <Form.Label htmlFor="name" column xs={4} md={4} lg={4}>Nombre:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.nameError ? "errorInput" : ""}
                                        placeholder={"Ingrese su nombre..."}
                                        name={"name"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"name"}
                                    />
                                    <div className="fontError">{userError.nameError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="lastname" column xs={4} md={4} lg={4}>Apellido:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.lastnameError ? "errorInput" : ""}
                                        placeholder={"Ingrese su apellido..."}
                                        name={"lastname"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"family-name"}
                                    />
                                    <div className="fontError">{userError.lastnameError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="email" column xs={4} md={4} lg={4}>Email:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"email"}
                                        design={userError.emailError ? "errorInput" : ""}
                                        name={"email"}
                                        placeholder={"Enter email"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"email"}
                                    />
                                    <div className="fontError">{userError.emailError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="password" column xs={4} md={4} lg={4}>Contraseña:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"password"}
                                        design={userError.passwordError ? "errorInput" : ""}
                                        placeholder={"Ingrese su contraseña..."}
                                        name={"password"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"current-password"}
                                    />
                                    <div className="fontError">{userError.passwordError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="dni" column xs={4} md={4} lg={4}>DNI/NIE:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.dniError ? "errorInput" : ""}
                                        placeholder={"Ingrese su dni/nie..."}
                                        name={"dni"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"dni"}
                                    />
                                    <div className="fontError">{userError.dniError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="address" column xs={4} md={4} lg={4}>Dirección:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.addressError ? "errorInput" : ""}
                                        placeholder={"Ingrese su dirección..."}
                                        name={"address"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"address"}
                                    />
                                    <div className="fontError">{userError.addressError}</div>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="mb-2">
                                <Form.Label htmlFor="phone" column xs={4} md={4} lg={4}>Teléfono:</Form.Label>
                                <Col>
                                    <InputText
                                        type={"text"}
                                        design={
                                            userError.phoneError ? "errorInput" : ""}
                                        placeholder={"Ingrese su teléfono..."}
                                        name={"phone"}
                                        state={setUser}
                                        errorState={setUserError}
                                        autoCompleteValue={"phone"}
                                    />
                                    <div className="fontError">{userError.phoneError}</div>
                                </Col>
                            </Form.Group>
                            {userError?.credentials ? (
                                <div>{userError.credentials}</div>
                            ) : (
                                <div></div>
                            )}
                            <div className="text-center">
                                <ClinicButton
                                    onClick={(e) => {
                                        if (areAllFieldsFilled() && !showModal) {
                                            submitHandler(e, user);
                                        } else {
                                            e.preventDefault();
                                            setShowModal(true);
                                        }
                                    }}
                                    text={'Registrarme!'}
                                />
                            </div>
                            <WarningModal show={showModal} onHide={() => setShowModal(false)} />
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};