import React from "react";
import "./CreateAppointment.css";
import { Col, Row, Container, Form, Card } from "react-bootstrap";

export const CreateAppointment = () => {

    return(
        <>
        <Container fluid className="mt-2">
            <div className="CreateAppointmentCard">
                {/* {allAppointments.map((appointment) => ( */}
                    {/* <Card key={appointment.id} className="apcard"> */}
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Denista:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        {/* <div>{appointment.dentist_id}</div> */}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Servicio:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        {/* <div>{appointment.service_id}</div> */}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Día:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        {/* <div>{appointment.date}</div> */}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Hora:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        {/* <div>{appointment.hour}</div> */}
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    {/* </Card> */}
                {/* ))} */}
            </div>
        </Container>
        </>
    )

}