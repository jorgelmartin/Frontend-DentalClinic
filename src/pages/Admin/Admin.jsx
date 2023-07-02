import React, { useState } from "react";
import { Button, Col, Card, Collapse, Container, Row } from "react-bootstrap";
import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";

import "./Admin.css";
import { UserCard } from "../../common/userCard/userCard";




export const Admin = () => {
    const [activeTab, setActiveTab] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Container fluid className="adminContainer" style={{ backgroundColor: 'dark' }}>
            <Row className="d-flex justify-content-center mt-5">
                <Col xs={7} md={6} lg={3} className="d-flex">
                    <Card style={{ backgroundColor: '#33468d58' }} border={'dark'} text={'dark'} className="adminCardTitle mt-3">
                        <Card.Body>
                            <Button
                                style={{ backgroundColor: '#13326fba' }}
                                className="w-100"
                                onClick={() => handleTabClick('usuarios')}
                                active={activeTab === 'usuarios'} // Set the active prop based on the activeTab state
                            >
                                USUARIOS
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={7} md={6} lg={3} className="d-flex">
                    <Card style={{ backgroundColor: '#33468d58' }} border={'dark'} text={'dark'} className="adminCardTitle">
                        <Card.Body>
                            <Button
                                style={{ backgroundColor: '#13326fba' }}
                                className="w-100"
                                onClick={() => handleTabClick('citas')}
                                active={activeTab === 'citas'} // Set the active prop based on the activeTab state
                            >
                                CITAS
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={7} md={6} lg={3} className="d-flex">
                    <Card style={{ backgroundColor: '#33468d58' }} border={'dark'} text={'dark'} className="adminCardTitle">
                        <Card.Body>
                            <Button
                                style={{ backgroundColor: '#13326fba' }}
                                className="w-100"
                                onClick={() => handleTabClick('misCitas')}
                                active={activeTab === 'misCitas'} // Set the active prop based on the activeTab state
                            >
                                MIS CITAS
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {activeTab === 'usuarios' && (
                <Row className="">
                    <Col xs={12}>
                        <UserCard />
                    </Col>
                </Row>
            )}
            {activeTab === 'citas' && (
                <Row className="d-flex flex-row justify-content-center">
                    <Col xs={12}>
                        <AppointmentCard />
                    </Col>
                </Row>
            )}
        </Container>
    );
}



// <Container fluid style={{ backgroundColor:'dark' }}>
//     <Row className="d-flex justify-content-center mt-5">
//     <Col xs={7} md={6} lg={3} className="d-flex">
//         <Card style={{ backgroundColor: activeTab === 'usuarios' ? '#33468d58' : '#ffffff' }} border={activeTab === 'usuarios' ? 'dark' : 'light'} text={activeTab === 'usuarios' ? 'dark' : 'light'} className="adminCardTitle mt-3">
//             <Card.Body>
//                 <Button style={{ backgroundColor: activeTab === 'usuarios' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('usuarios')}>USUARIOS</Button>
//             </Card.Body>
//         </Card>
//     </Col>
//     <Col xs={7} md={6} lg={3} className="d-flex">
//         <Card style={{ backgroundColor: activeTab === 'citas' ? '#33468d58' : '#ffffff' }} border={activeTab === 'citas' ? 'dark' : 'light'} text={activeTab === 'citas' ? 'dark' : 'light'} className="adminCardTitle">
//             <Card.Body>
//                 <Button style={{ backgroundColor: activeTab === 'citas' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('citas')}>CITAS</Button>
//             </Card.Body>
//         </Card>
//     </Col>
//     <Col xs={7} md={6} lg={3} className="d-flex">
//         <Card style={{ backgroundColor: activeTab === 'misCitas' ? '#33468d58' : '#ffffff' }} border={activeTab === 'misCitas' ? 'dark' : 'light'} text={activeTab === 'misCitas' ? 'dark' : 'light'} className="adminCardTitle">
//             <Card.Body>
//                 <Button style={{ backgroundColor: activeTab === 'misCitas' ? '#13326fba' : '#ffffff' }} className="w-100" onClick={() => handleTabClick('misCitas')}>MIS CITAS</Button>
//             </Card.Body>
//         </Card>
//     </Col>
// </Row>