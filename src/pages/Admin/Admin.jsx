import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../../App.css";

export const Admin = () => {
    const navigate = useNavigate();

    //ADMIN PAGE
    return (
        <div className="adminContainer">
            <Container>
                <Row>
                    <Col className="d-flex justify-content-center g-1">
                        <div className="menuCard"  >
                            <div
                                // style={{ backgroundColor: "#13326fba" }}
                                className="menuCardTitle"
                                onClick={() => navigate("/users")}
                            >
                                USUARIOS
                            </div>
                        </div>
                    </Col>
                    <Col className="d-flex justify-content-center g-1">
                        <div className="menuCard" >
                            <div
                                // style={{ backgroundColor: "#13326fba" }}
                                className="menuCardTitle"
                                onClick={() => navigate("/appointments")}
                            >
                                CITAS
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};