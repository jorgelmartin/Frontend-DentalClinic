import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "../../App.css";

export const Admin = () => {
    const navigate = useNavigate();

    //ADMIN PAGE
    return (
        <Container>
            <div className="menuContainer">
                <Row>
                    <Col>
                        <div
                            className="menuCard"
                            onClick={() => navigate("/users")}>
                            <div className="menuCardTitle">
                                USUARIOS
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div
                            className="menuCard"
                            onClick={() => navigate("/appointments")}>
                            <div className="menuCardTitle">
                                CITAS
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};