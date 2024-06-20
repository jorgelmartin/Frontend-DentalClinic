import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import { useNavigate } from 'react-router-dom';

export const PatientMenu = () => {
    const navigate = useNavigate();

    return (
        <Container className='mt-5 d-flex justify-content-center'>
            <Row>
                <Col className="d-flex justify-content-center g-1" >
                    <div className="menuCard" >
                        <div
                            className="menuCardTitle"
                            onClick={() => navigate("/createappointment")}
                        >
                            PEDIR CITA
                        </div>
                    </div>
                </Col>
                <Col className="d-flex justify-content-center g-1" >
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
        </Container>
    );
}