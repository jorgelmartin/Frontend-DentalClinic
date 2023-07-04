import React from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";

export const AppointmentCard = () => {
    const appointments = useFetchAppointments();

    if (!appointments) {
        return <div>Loading...</div>;
    }

    console.log("All Appointments:", appointments);

    return (
        <Container className="mt-5">
            <div className="appointmentCardsRow">
                {appointments.map((appointment) => (
                    <Card key={appointment.id} className="acard mt-5" style={{ backgroundColor: '#3c709a61' }}>
                        <Card.Body>
                            <Form>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Cita:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Paciente:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.patient_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Dentista:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.dentist_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Servicio:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.service_id}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Día:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.date}</div>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row}>
                                    <Form.Label column xs={5} sm={6}>Hora:</Form.Label>
                                    <Col xs={7} sm={6}>
                                        <div>{appointment.hour}</div>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            {/* <Button onClick={handleGoToAppointments} style={{ backgroundColor: '#13326fba' }} className="w-50">Volver!</Button> */}
        </Container>
    );
};






// import React from "react";
// import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
// import { useFetchUserAppointments } from "../../../hooks/useFecthUserAppointment";
// import "./AppointmentCard.css";
// import { Col, Row, Container, Form, Card } from "react-bootstrap";

// export const AppointmentCard = () => {

//     const appointments = useFetchAppointments();
//     const userAppointments = useFetchUserAppointments();

//     if (!appointments || !userAppointments) {
//         return <div>Loading...</div>;
//     }

//     console.log("All Appointments:", appointments);
//     console.log("User Appointments:", userAppointments);

//     const allAppointments = [...appointments, ...userAppointments];
//     return (
//         <Container fluid className="mt-2">
//             <div className="appointmentCardsRow">
//                 {allAppointments.map((appointment) => (
//                     <Card key={appointment.id} className="acard">
//                         <Card.Body>
//                             <Form>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Cita:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.id}</div>
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Paciente:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.patient_id}</div>
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Dentista:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.dentist_id}</div>
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Servicio:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.service_id}</div>
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Día:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.date}</div>
//                                     </Col>
//                                 </Form.Group>
//                                 <Form.Group as={Row}>
//                                     <Form.Label column xs={5} sm={6}>Hora:</Form.Label>
//                                     <Col xs={7} sm={6}>
//                                         <div>{appointment.hour}</div>
//                                     </Col>
//                                 </Form.Group>
//                             </Form>
//                         </Card.Body>
//                     </Card>
//                 ))}
//             </div>
//             <Button onClick={handleGoToAppointments} style={{ backgroundColor: '#13326fba' }} className="w-50">Volver!</Button>
//         </Container>
//     );
// }