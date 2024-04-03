import React from "react";
import { Button, Col , Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../../App.css";

export const Admin = () => {
    const navigate = useNavigate();

    //ADMIN PAGE
    return (
        <div className="adminContainer">
            <Container> 
                <Row className="d-flex justify-content-center mt-5">
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1" >
                    <div className="adminCardTitle1"  >
                            <div>
                                <Button
                                    // style={{ backgroundColor: "#13326fba" }}
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/usercard")}
                                >
                                    USUARIOS
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                        <div className="adminCardTitle1" >
                            <div>
                                <Button
                                    // style={{ backgroundColor: "#13326fba" }}
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/appointmentcard")}
                                >
                                    CITAS
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};