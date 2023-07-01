import React, { useState } from "react";
import { Button, Col, Card, Collapse, Container, Row } from "react-bootstrap";

import "./Admin.css";
import { UserCard } from "../../common/userCard/userCard";




export const Admin = () => {
    const [activeTab, setActiveTab] = useState('usuarios');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
      };

    return (
        <div className="adminContainer">
            <Container fluid>
                <Row className="adminCard gap-2">
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: activeTab === 'usuarios' ? '#33468d58' : '#ffffff' }} border={activeTab === 'usuarios' ? 'dark' : 'light'} text={activeTab === 'usuarios' ? 'dark' : 'light'} className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: activeTab === 'usuarios' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('usuarios')}>USUARIOS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: activeTab === 'citas' ? '#33468d58' : '#ffffff' }} border={activeTab === 'citas' ? 'dark' : 'light'} text={activeTab === 'citas' ? 'dark' : 'light'} className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: activeTab === 'citas' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('citas')}>CITAS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={7} md={6} lg={3}>
                        <Card style={{ backgroundColor: activeTab === 'misCitas' ? '#33468d58' : '#ffffff' }} border={activeTab === 'misCitas' ? 'dark' : 'light'} text={activeTab === 'misCitas' ? 'dark' : 'light'} className="adminCardTitle">
                            <Card.Body>
                                <Button style={{ backgroundColor: activeTab === 'misCitas' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('misCitas')}>MIS CITAS</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {activeTab === 'usuarios' && <UserCard />} {/* Muestra el contenido del componente UserCard solo si el botón "USUARIOS" está activo */}
        </div>
    );
}
