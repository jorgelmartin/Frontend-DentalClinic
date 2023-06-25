import React from "react";
import { Button, Col, Card, Collapse, Container, Row } from "react-bootstrap";

import "./Admin.css";


export const Admin = () => {


    return (
        <div className="adminContainer">
            <Container fluid>
                <Row className="adminCard gap-3">
                    <Col xs={7} md={6} lg={3} >
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="adminCardTitle">
                            <Card.Body >
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100">USUARIOS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100">CITAS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: '#33468d58' }} border="dark" text="dark" className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: '#13326fba' }} className="w-100">MIS CITAS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
