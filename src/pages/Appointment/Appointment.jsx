import React from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import { useNavigate } from 'react-router-dom';

export const Appointment = () => {
    const navigate = useNavigate();

    return (
        <div className="adminContainer">
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                        <div className="adminCardTitle1" >
                            <div>
                                <Button
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/createappointment")}
                                >
                                    PEDIR CITA
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                        <div className="adminCardTitle1">
                            <div>
                                <Button
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/appointmentcard")}
                                >
                                    MIS CITAS
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
