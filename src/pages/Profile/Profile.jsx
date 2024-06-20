import React, { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/apiCalls";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { inputHandler } from "../../services/useful";
import { AppButton } from "../../common/AppButton/AppButton";

export const Profile = () => {
    //GETTING TOKEN FROM REDUX
    const token = useSelector((state) => state.user.credentials.token);
    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});

    //UPDATE PROFILE
    const editHandler = () => {
        if (editing) {
            updateProfile(body, token)
                .then(() => {
                    setEditing(false);
                })
                .catch((error) => {
                    console.error('Error al actualizar el perfil:', error);
                });
        } else {
            setEditing(true);
        }
    };

    //GET USER PROFILE
    useEffect(() => {
        if (!editing) {
            getProfile(token)
                .then((res) => {
                    setUser(res);
                })
                .catch((error) => {
                    console.error('Error al obtener el perfil:', error);
                });
        }
    }, [editing, token]);

    //Para ignorar el autocomplete
    {/* eslint-disable-next-line jsx-a11y/autocomplete-ignore */ }
    return (
        <Container className="mt-2 d-flex justify-content-center">
            <Card style={{
                backgroundColor: '#9f53b97d',
                borderRadius: '5em',
                boxShadow: 'rgba(14, 30, 37, 0.12) 0em 0.125em 0.25em 0em, rgba(14, 30, 37, 0.32) 0em 0.125em 1em 0em',
                minWidth: '20.4em',
                maxWidth: '26m'
            }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3 display-5"
                        style={{
                            color: 'white',
                            textShadow: '0.05em 0.05em 0.08em rgba(0, 0, 0)',
                        }}>
                        <strong>Perfil</strong>
                    </Card.Title>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="name"><strong>Nombre</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"name"}
                                            type={"text"}
                                            name={"name"}
                                            placeholder={user.name}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"name"}
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
                                    <Form.Label htmlFor="lastname"><strong>Apellido</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"lastname"}
                                            type={"text"}
                                            name={"lastname"}
                                            placeholder={user.lastname}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"family-name"}
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
                                    <Form.Label htmlFor="email"><strong>Email</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"email"}
                                            type={"text"}
                                            name={"email"}
                                            placeholder={user.email}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"email"}
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
                                        <Form.Label htmlFor="password"><strong>Contraseña</strong></Form.Label>
                                    </Col>
                                    <Col>
                                        <input
                                            id={"password"}
                                            type={"password"}
                                            name={"password"}
                                            placeholder={user.password}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"current-password"}
                                        />
                                    </Col>
                                </Row>
                            </Form.Group>
                        )}
                        <Form.Group>
                            <Row>
                                <Col>
                                    <Form.Label htmlFor="dni"><strong>DNI/NIE</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"dni"}
                                            type={"text"}
                                            name={"dni"}
                                            placeholder={user.dni}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"dni"}
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
                                    <Form.Label htmlFor="address"><strong>Dirección</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"address"}
                                            type={"text"}
                                            name={"address"}
                                            placeholder={user.address}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"address"}
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
                                    <Form.Label htmlFor="phone"><strong>Teléfono</strong></Form.Label>
                                </Col>
                                {editing ? (
                                    <Col>
                                        <input
                                            id={"phone"}
                                            type={"text"}
                                            name={"phone"}
                                            placeholder={user.phone}
                                            onChange={(e) => inputHandler(e, setBody)}
                                            autoComplete={"phone"}
                                        />
                                    </Col>
                                ) : (
                                    <Col>
                                        <div>{user.phone}</div>
                                    </Col>
                                )}
                            </Row>
                        </Form.Group>
                    </Form>
                    <AppButton
                        onClick={() => {
                            editHandler();
                        }}
                        text={editing ? 'Guardar' : 'Editar'}
                        action={editing ? 'Guardar' : 'Editar'}
                    />
                </Card.Body>
            </Card>
        </Container>
    )
}