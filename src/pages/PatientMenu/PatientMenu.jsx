import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import { useNavigate } from 'react-router-dom';

export const PatientMenu = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <div className="menuContainer">
                <Row>
                    <Col>
                        <div className="menuCard" >
                            <div
                                className="menuCardTitle"
                                onClick={() => navigate("/createappointment")}
                            >
                                PEDIR CITA
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="menuCard">
                            <div
                                className="menuCardTitle"
                                onClick={() => navigate("/appointments")}
                            >
                                MIS CITAS
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
}