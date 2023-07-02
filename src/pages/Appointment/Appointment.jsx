import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./Appointment.css";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { CreateAppointment } from "../../common/CreateAppointment/CreateAppointment";
// import { ProfileCard } from "../../common/ProfileCard/ProfileCard";
// import { ProfileCard } from "../../common/ProfileCard/ProfileCard";
// import { userData } from "../userSlice";



export const Appointment = () => {
    const [activeTab, setActiveTab] = useState('pedirCita');
    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div className="userContainer">
            <Container fluid>
                <Row className="userCard gap-3">
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="userCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('pedirCita')}>PEDIR CITA</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                    <Col xs={7} md={6} lg={3} className="">
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="userCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('misCitas')}>MIS CITAS</Button>
                            </Card.Body>
                        </Card>

                    </Col>
                </Row>
                {activeTab === 'pedirCita' && (
                    <div className="appointments">
                        <CreateAppointment></CreateAppointment>
                    </div>
                )}
                {activeTab === 'misCitas' && (
                    <div className="appointments">
                        <AppointmentCard></AppointmentCard>
                    </div>
                )}
            </Container>
        </div>
    );
}