
import React, { useState, useEffect } from "react";
import { getProfile,updateProfile } from "../../services/apiCalls";
import "./ProfileCard.css";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../../pages/userSlice";
import { inputHandler } from "../../services/useful";

export const ProfileCard = () => {

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});

    //GETTING TOKEN FROM REDUX
    const datos = useSelector(userData);
    const token = datos.credentials.token;
    

    //UPDATE PROFILE
    const editHandler = (body, token) => {
        updateProfile(body, token)
            .then(() => {
                setEditing(false);
            })
            .catch((error) => {
                console.error('Error al actualizar el perfil:', error);
            });
    };

    //GET USER PROFILE
    useEffect(() => {
        if (!editing) {
            getProfile(token)
                .then((res) => {
                    // console.log('Perfil obtenido:', data);
                    setUser(res);
                })
                .catch((error) => {
                    console.error('Error al obtener el perfil:', error);
                });
        }
    }, [editing]);

    //Para ignorar el autocomplete
    {/* eslint-disable-next-line jsx-a11y/autocomplete-ignore */ }
    return (
        <Container className="mt-2">
            <Card style={{ backgroundColor: '#3c709a61' }}>
                <Card.Body>
                <Card.Title className="text-center mb-3 display-5">Perfil</Card.Title>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Nombre:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
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
                                        <input
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
                                        <input
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
                                        <input
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
                                        <input
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
                                        <input
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
                            {/* <Row>
                                <Col>
                                    <Form.Label>Edad:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
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
                            </Row> */}
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label>Teléfono:</Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
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
                                }}
                            >
                                Guardar
                            </Button>
                        ) : (
                            <Button style={{ backgroundColor: '#13326fba' }}
                                onClick={() => {
                                    setEditing(true);
                                }}
                            >
                                Editar
                            </Button>
                        )}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};