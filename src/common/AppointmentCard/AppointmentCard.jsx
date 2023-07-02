import React from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "./AppointmentCard.css";
import { Col, Row, Container, Form, Card } from "react-bootstrap";

export const AppointmentCard = () => {

    const appointments = useFetchAppointments();
    if (!appointments) {
        return <div>Loading...</div>;
    }
    return (
        <Container fluid className="mt-2">
            <div className="appointmentCardsRow">
                {appointments.map((appointment) => (
                    <Card key={appointment.id} className="acard">
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Cita:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Paciente:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.patient_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Dentista:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.dentist_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Servicio:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.service_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Día:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.date}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Hora:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.hour}</div>
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