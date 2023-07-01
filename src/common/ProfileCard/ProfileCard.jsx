
import React, { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/ApiCalls";
import "./ProfileCard.css";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../../pages/userSlice";
import { InputText } from "../InputText/InputText";

export const ProfileCard = () => {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({
        // name: "",
        // lastname: "",
        // email: "",
        // password: "",
        // dni: "",
        // address: "",
        // age: "",
        // phone: "",
    });
    // console.log(user)

    const datos = useSelector(userData);
    const token = datos.credentials.token;
    

    const editHandler = (body, token) => {
        console.log('Body recibido:', body);
  console.log('Token recibido:', token);
        updateProfile(body, token)
            .then((data) => {
                console.log('Nombre del perfil actualizado:', data.data[0].name);
console.log('Apellido del perfil actualizado:', data.data[0].lastname);// Imprime la respuesta del servidor en caso de éxito
                setEditing(false);
            })
            .catch((error) => {
                console.error('Error al actualizar el perfil:', error); // Imprime el error en caso de falla
            });
    };

    useEffect(() => {
        if (!editing) {
            getProfile(token)
                .then((data) => {
                    console.log('Perfil obtenido:', data);
                    setUser(data);
                })
                .catch((error) => {
                    console.error('Error al obtener el perfil:', error);
                });
        }
    }, [editing]);

    //Para ignorar el autocomplete
    {/* eslint-disable-next-line jsx-a11y/autocomplete-ignore */ }
    return (

        <Container fluid className="mt-2">
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Nombre:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"name"}
                                            placeholder={user.name}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.name}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Apellido:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"lastname"}
                                            placeholder={user.lastname}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.lastname}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Email:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"email"}
                                            placeholder={user.email}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.email}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        {editing && (
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Contraseña:</Form.Label>
                                    </Col>
                                    <Col>
                                        <InputText
                                            type={"password"}
                                            name={"password"}
                                            placeholder={user.password}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        )}
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>DNI/NIE:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"dni"}
                                            placeholder={user.dni}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.dni}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Dirección:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"address"}
                                            placeholder={user.address}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.address}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Edad:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"age"}
                                            placeholder={user.age}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.age}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Teléfono:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <InputText
                                            type={"text"}
                                            name={"phone"}
                                            placeholder={user.phone}
                                            onChange={(e) => inputHandler(e, setBody)}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.phone}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                        {editing ? (
                            <Button
                                onClick={() => {
                                    editHandler(body, token);
                                    console.log("soy el body:", body);
                                }}
                            >
                                SEND
                            </Button>
                        ) : (
                            <Button
                                onClick={() => {
                                    setEditing(true);

                                }}
                            >
                                EDIT
                            </Button>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>

    );
};