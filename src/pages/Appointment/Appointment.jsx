import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Appointment.css";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { ProfileCard } from "../../common/ProfileCard/ProfileCard";
// import { ProfileCard } from "../../common/ProfileCard/ProfileCard";
// import { userData } from "../userSlice";



export const Appointment = () => {


    return (

        <div className="userContainer">
            <Container fluid>
                <Row className="userCard gap-3">
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100">PEDIR CITA</Button>
                            </Card.Body>
                        </Card>
                        <div className="appointments">
                        <AppointmentCard></AppointmentCard></div>
                    </Col>
                    <Col xs={7} md={6} lg={3} className="">
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100">MIS CITAS</Button>
                            </Card.Body>
                        </Card>
                        <div className="appointments">
                            <AppointmentCard></AppointmentCard>
                      
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}