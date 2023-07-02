
import React from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Col, Row, Container, Form, Card } from "react-bootstrap";
import "./UserCard.css"
// import { getAllUsers } from "../../services/ApiCalls";

export const UserCard = () => {

    const users = useFetchUsers();
    if (!users) {
        return <div>Loading...</div>;
    }

    return (


        <Container fluid className="mt-2">
            <div className="userCardsRow">
                {users.map((user) => (
                    <Card key={user.id} className="ucard">
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>Nombre:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.name}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>Apellidos:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.lastname}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>Email:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.email}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>DNI/NIE:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.dni}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>Dirección:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.address}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={5}>Teléfono:</Form.Label>
                                    <Col xs={7} sm={7}>
                                        <div>{user.phone}</div>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </Container>
    );
}