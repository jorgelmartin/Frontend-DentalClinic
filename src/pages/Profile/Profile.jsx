import React, { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../../services/apiCalls";
import "./Profile.css";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { userData } from "../../pages/userSlice";
import { inputHandler } from "../../services/useful";
import { ClinicButton } from "../../common/ClinicButton/ClinicButton";

export const Profile = () => {
    //GETTING TOKEN FROM REDUX
    const datos = useSelector(userData);
    const token = datos.credentials.token;

    const [user, setUser] = useState({});
    const [editing, setEditing] = useState(false);
    const [body, setBody] = useState({});

    //UPDATE PROFILE
    const editHandler = () => {
        if (editing) {
            // Si estamos en modo de edición, guardar los cambios
            updateProfile(body, token)
                .then(() => {
                    setEditing(false);
                })
                .catch((error) => {
                    console.error('Error al actualizar el perfil:', error);
                });
        } else {
            // Si no estamos en modo de edición, cambiar a modo de edición
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
    }, [editing]);

    //Para ignorar el autocomplete
    {/* eslint-disable-next-line jsx-a11y/autocomplete-ignore */ }
    return (
        <Container className="mt-2 d-flex justify-content-center">
            <Card style={{
                backgroundColor: '#9f53b97d',
                borderRadius: '5em',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0em 3.5em 3em -0.5em',
                minWidth: '20.4em',
                maxWidth: '26m'
            }}>
                <Card.Body>
                    <Card.Title className="text-center mb-3 display-5"
                        style={{
                            textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)',
                        }}>Perfil
                    </Card.Title>
                    <Form>
                        <Form.Group>
                            <Row>
                                <Col>
                                    <strong><Form.Label>Nombre</Form.Label></strong>
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
                                    <strong><Form.Label>Apellido</Form.Label></strong>
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
                                    <strong><Form.Label>Email</Form.Label></strong>
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
                                        <strong><Form.Label>Contraseña</Form.Label></strong>
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
                                    <strong><Form.Label>DNI/NIE</Form.Label></strong>
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
                                    <strong><Form.Label>Dirección</Form.Label></strong>
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
                            <Row>
                                <Col>
                                    <strong><Form.Label>Teléfono</Form.Label></strong>
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
                    </Form>
                    <ClinicButton
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