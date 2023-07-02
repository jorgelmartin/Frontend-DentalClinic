
import React from "react";
import "./CreateAppointment.css";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SelectServices } from "../../../hooks/useFetchSelectServices";
import { SelectDoctors } from "../../../hooks/useFetchSelectDoctors";
import { SelectDate } from "../../../hooks/useFetchSelectDate";
import { SelectHour } from "../../../hooks/useFetchSelectHour";

export const CreateAppointment = () => {

    const navigate = useNavigate(); 

    const handleGoToAppointments = () => {
        navigate("/appointment"); 
    };
    return (
        <div className="ContainerCreate">
            <Container>
                <Row className="CreateAppointmentCard">
                    <Col xs={12} sm={12} md={12}>
                        <Card>
                            <Card.Body>
                                <Form>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={5}>Denista:</Form.Label>
                                        <Col xs={6} sm={6}>
                                            <SelectDoctors></SelectDoctors>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={5}>Servicio:</Form.Label>
                                        <Col xs={6} sm={6}>
                                            <SelectServices></SelectServices>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={5}>Día:</Form.Label>
                                        <Col xs={6} sm={6}>
                                            <SelectDate></SelectDate>
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={4} sm={5}>Hora:</Form.Label>
                                        <Col xs={6} sm={6}>
                                            <SelectHour></SelectHour>
                                        </Col>
                                    </Form.Group>
                                </Form>
                                <Button onClick={handleGoToAppointments} style={{ backgroundColor: '#13326fba' }} className="w-50">Volver!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
};







// import React from "react";
// import "./CreateAppointment.css";
// import { Col, Row, Container, Form, Card } from "react-bootstrap";

// export const CreateAppointment = () => {

//     return(
//         <><div className="ContainerCreate">
//         <Container>
//             <div className="">
//                 {/* {allAppointments.map((appointment) => ( */}
//                     {/* <Card key={appointment.id} className="apcard"> */}
//                         <Card.Body>
//                             <Form>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Denista:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         {/* <div>{appointment.dentist_id}</div> */}
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Servicio:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         {/* <div>{appointment.service_id}</div> */}
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Día:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         {/* <div>{appointment.date}</div> */}
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Hora:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         {/* <div>{appointment.hour}</div> */}
//                                     </Col>
//                                 </Form.Group>
//                             </Form>
//                         </Card.Body>
//                     {/* </Card> */}
//                 {/* ))} */}
//             </div>
//         </Container>
//         </div>
//         </>
//     )

// }