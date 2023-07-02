import React, { useState } from "react";
import { Button, Col , Container, Row } from "react-bootstrap";
// import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";
import { useNavigate } from 'react-router-dom';
import "./Admin.css";
// import { UserCard } from "../../common/userCard/userCard";




export const Admin = () => {
    const navigate = useNavigate();

    return (
        <div className="adminContainer">
            <Container>
                <Row className="d-flex justify-content-center mt-5">
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                    <div className="adminCardTitle1">
                            <div>
                                <Button
                                    style={{ backgroundColor: "#13326fba" }}
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/usercard")}
                                >
                                    USUARIOS
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                        <div className="adminCardTitle1">
                            <div>
                                <Button
                                    style={{ backgroundColor: "#13326fba" }}
                                    className="w-100 adminCardTitle"
                                    onClick={() => navigate("/appointmentcard")}
                                >
                                    CITAS
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col xs={10} md={5} lg={3} className="d-flex justify-content-center g-1">
                        <div className="adminCardTitle1">
                            <div>
                                <Button
                                    style={{ backgroundColor: "#13326fba" }}
                                    className="w-100 adminCardTitle"
                                    onClick={() => handleTabClick("/")}
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
};


//NAVBAR
// <Navbar bg="light" expand="lg" fixed="top">
//       <Navbar.Brand href="/">Mi Sitio Web</Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ml-auto">
//           {/* Aquí colocarías los enlaces de la navegación */}
//           <Nav.Link href="/">Inicio</Nav.Link>
//           <Nav.Link href="/about">Acerca de</Nav.Link>
//           <Nav.Link href="/contact">Contacto</Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>


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


{/* <Container fluid style={{ backgroundColor: 'dark' }}>
            <Row className="d-flex justify-content-center mt-5">
                <Col xs={7} md={6} lg={3} className="d-flex">
                    <div className="adminCardTitle mt-3">
                        <div>
                            <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('usuarios')}>USUARIOS</Button>
                        </div>
                    </div>
                </Col>
                <Col xs={7} md={6} lg={3} className="d-flex">
                <div className="adminCardTitle">
                        <div>
                            <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('citas')}>CITAS</Button>
                            </div>
                    </div>
                </Col>
                <Col xs={7} md={6} lg={3} className="d-flex">
                <div className="adminCardTitle">
                        <div>
                            <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('misCitas')}>MIS CITAS</Button>
                        </div>
                    </div>
                </Col>
            </Row>

            {activeTab === 'usuarios' && (
                <div className="usersCards">
                <Row className="">
                    <Col xs={12}>
                        <UserCard />
                    </Col>
                </Row>
                </div>
            )}
            {activeTab === 'citas' && (
                <Row className="d-flex flex-row justify-content-center">
                    <Col xs={12}>
                        <AppointmentCard />
                    </Col>
                </Row>
            )}
        </Container> */}


//         import React, { useState } from "react";
// import { Button, Col, Card, Collapse, Container, Row, Nav, Navbar } from "react-bootstrap";
// import { AppointmentCard } from "../../common/AppointmentCard/AppointmentCard";

// import "./Admin.css";
// import { UserCard } from "../../common/userCard/userCard";




// export const Admin = () => {
//     const [activeTab, setActiveTab] = useState('');

//     const handleTabClick = (tab) => {
//         setActiveTab(tab);
//     };

//     return (
// <div className="adminContainer">

//         <Container fluid style={{ backgroundColor: 'dark' }}>
//             <Row className="d-flex justify-content-center mt-5">
//                 <Col xs={7} md={6} lg={3} className="d-flex">
//                     <div className="adminCardTitle mt-3">
//                         <div>
//                             <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('usuarios')}>USUARIOS</Button>
//                         </div>
//                     </div>
//                 </Col>
//                 <Col xs={7} md={6} lg={3} className="d-flex">
//                 <div className="adminCardTitle">
//                         <div>
//                             <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('citas')}>CITAS</Button>
//                             </div>
//                     </div>
//                 </Col>
//                 <Col xs={7} md={6} lg={3} className="d-flex">
//                 <div className="adminCardTitle">
//                         <div>
//                             <Button style={{ backgroundColor: '#13326fba' }} className="w-100" onClick={() => handleTabClick('misCitas')}>MIS CITAS</Button>
//                         </div>
//                     </div>
//                 </Col>
//             </Row>

            
//         </Container></div>
//     );
// }
