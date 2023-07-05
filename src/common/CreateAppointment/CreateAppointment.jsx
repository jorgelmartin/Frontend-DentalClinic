
import React, { useState, useEffect } from "react";
import "./CreateAppointment.css";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SelectServices } from "../../../hooks/useFetchSelectServices";
import { SelectDoctors } from "../../../hooks/useFetchSelectDoctors";
import { SelectDate } from "../../../hooks/useFetchSelectDate";
import { SelectHour } from "../../../hooks/useFetchSelectHour";
import { userData } from "../../pages/userSlice";
import { useSelector } from "react-redux";
import { createAppointment, updateAppointment } from "../../services/apiCalls";

export const CreateAppointment = ({ isUpdate, updateData }) => {

    console.log(updateData)
    const navigate = useNavigate();
    const datos = useSelector(userData);
    const token = datos?.credentials?.token;
    const [appointmentData, setAppointmentData] = useState({patient_id: datos.data.userId, ...updateData});
    console.log(appointmentData)
    const createApp = () => {
        console.log(appointmentData, datos);
        isUpdate ? updateAppointment(token, appointmentData.id, appointmentData).then(() =>  navigate("/")) : createAppointment(appointmentData, token).then(() =>  navigate("/"));
    };
    return (
        <div className="ContainerCreate1">
            <div className="ContainerCreate">
                <Container>
                    <Row className="CreateAppointmentCard">
                        <Col xs={12} sm={12} md={12}>
                            <Card style={{ backgroundColor: '#3c709a61' }}>
                                <Card.Body>
                                    <Form>
                                        <Form.Group as={Row}>
                                            <Form.Label column xs={4} sm={5}>Denista:</Form.Label>
                                            <Col xs={6} sm={6}>
                                                <SelectDoctors
                                                    className="dentistSelector"
                                                    name={"dentist_id"}
                                                    value={appointmentData.dentist_id}
                                                    handleChange={(value) => {
                                                        setAppointmentData({
                                                            ...appointmentData,
                                                            dentist_id: parseInt(value),
                                                        }) }
                                                    }
                                                >

                                                </SelectDoctors>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column xs={4} sm={5}>Servicio:</Form.Label>
                                            <Col xs={6} sm={6}>
                                                <SelectServices
                                                    className="serviceSelector"
                                                    name={"service_id"}
                                                    value={appointmentData.service_id}
                                                    handleChange={(value) => {
                                                        setAppointmentData({
                                                            ...appointmentData,
                                                            service_id: parseInt(value),
                                                        }) }
                                                    }>
                                                </SelectServices>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column xs={4} sm={5}>Día:</Form.Label>
                                            <Col xs={6} sm={6}>
                                                <SelectDate
                                                    className="dateSelector"
                                                    name={"date_id"}
                                                    value={appointmentData.date}
                                                    handleChange={(value) => {
                                                        setAppointmentData({
                                                            ...appointmentData,
                                                            date: value,
                                                        }) }
                                                    }>
                                                </SelectDate>
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row}>
                                            <Form.Label column xs={4} sm={5}>Hora:</Form.Label>
                                            <Col xs={6} sm={6}>
                                                <SelectHour
                                                    className="hourSelector"
                                                    name={"hour_id"}
                                                    value={appointmentData.hour}
                                                    handleChange={(value) => {
                                                        setAppointmentData({
                                                            ...appointmentData,
                                                            hour: value,
                                                        }) }
                                                    }>
                                                </SelectHour>
                                            </Col>
                                        </Form.Group>
                                    </Form>
                                    <Button onClick={createApp} style={{ backgroundColor: '#13326fba' }} className="w-50">Crear cita!</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
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