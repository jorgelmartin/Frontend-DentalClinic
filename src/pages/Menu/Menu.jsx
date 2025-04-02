import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Menu.css";

// MENU
export const Menu = () => {
    const navigate = useNavigate();
    const userRole = useSelector((state) => state.user.data.role);

    return (
        <Container>
            <div className="menuContainer">
                <Row>
                    {userRole === 2 ? (
                        <>
                            <Col>
                                <div className="menuCard" onClick={() => navigate("/users")}>
                                    <div className="menuCardTitle">USUARIOS</div>
                                </div>
                            </Col>
                            <Col>
                                <div className="menuCard" onClick={() => navigate("/appointments")}>
                                    <div className="menuCardTitle">CITAS</div>
                                </div>
                            </Col>
                        </>
                    ) : userRole === 3 ? (
                        <>
                            <Col>
                                <div className="menuCard" onClick={() => navigate("/createappointment")}>
                                    <div className="menuCardTitle">NUEVA CITA</div>
                                </div>
                            </Col>
                            <Col>
                                <div className="menuCard" onClick={() => navigate("/appointments")}>
                                    <div className="menuCardTitle">MIS CITAS</div>
                                </div>
                            </Col>
                        </>
                    ) : ''}
                </Row>
            </div>
        </Container>
    );
};