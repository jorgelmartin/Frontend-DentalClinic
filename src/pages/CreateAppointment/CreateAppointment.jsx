
import React, { useState, useEffect } from "react";
import "./CreateAppointment.css";
import { Col, Row, Container, Form, Card, Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SelectServices } from "../../../hooks/useFetchSelectServices";
import { SelectDoctors } from "../../../hooks/useFetchSelectDoctors";
import { SelectDate } from "../../../hooks/useFetchSelectDate";
import { SelectHour } from "../../../hooks/useFetchSelectHour";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { createAppointment, updateAppointment } from "../../services/apiCalls";
import { ClinicButton } from "../../common/ClinicButton/ClinicButton";
import { WarningModal } from "../../common/WarningModal/WarningModal";

export const CreateAppointment = ({ isUpdate, updateData }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const datos = useSelector(userData);
    const token = datos?.credentials?.token;

    //UPDATE DATA
    const [appointmentData, setAppointmentData] = useState(
        {
            ...updateData,
            patient_id: datos.data.userId
        }
    );

    //CREATE AND UPDATE APPOINTMENT
    const createApp = () => {
        // VERIFY IF THE USER PUT ALL THE DATA
        if (
            !appointmentData.dentist_id ||
            !appointmentData.service_id ||
            !appointmentData.date ||
            !appointmentData.hour
        ) {
            setShowModal(true); // SHOW MODAL IF SOME DATA IS MISSING
            return; 
        }
        if (isUpdate) {
            updateAppointment(token, appointmentData.id, appointmentData)
                .then(() => navigate("/home"));
        } else {
            createAppointment(appointmentData, token)
                .then(() => navigate("/home"));
        }
    };

    return (
        <Container style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card style={{
                backgroundColor: '#9f53b97d',
                borderRadius: '5em',
                boxShadow: 'rgba(0, 0, 0, 0.2) 0em 3.5em 3em -0.5em',
                minWidth: '20.4em',
                maxWidth: '26m'
            }} >
                <Card.Body>
                    <Card.Title className="text-center mb-3 display-5">Crea tu cita</Card.Title>
                    <Form>
                        <Form.Group as={Row}>
                            {/* <Form.Label column xs={12} sm={5}>Dentista:</Form.Label> */}
                            <Col xs={12} sm={12}>

                                <SelectDoctors
                                    className="dentistSelector"
                                    name={"dentist_id"}
                                    value={appointmentData.dentist_id}
                                    handleChange={(value) => {
                                        setAppointmentData({
                                            ...appointmentData,
                                            dentist_id: parseInt(value),
                                        })
                                    }
                                    }
                                >
                                </SelectDoctors>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column xs={12} sm={5}>Servicio:</Form.Label> */}
                            <Col xs={12} sm={12}>
                                <SelectServices
                                    className="serviceSelector"
                                    name={"service_id"}
                                    value={appointmentData.service_id}
                                    handleChange={(value) => {
                                        setAppointmentData({
                                            ...appointmentData,
                                            service_id: parseInt(value),
                                        })
                                    }
                                    }>
                                </SelectServices>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column xs={12} sm={5}>Día:</Form.Label> */}
                            <Col xs={12} sm={12}>
                                <SelectDate
                                    className="dateSelector"
                                    name={"date_id"}
                                    value={appointmentData.date}
                                    handleChange={(value) => {
                                        setAppointmentData({
                                            ...appointmentData,
                                            date: value,
                                        })
                                    }
                                    }>
                                </SelectDate>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            {/* <Form.Label column xs={12} sm={5}>Hora:</Form.Label> */}
                            <Col xs={12} sm={12}>
                                <SelectHour
                                    className="hourSelector"
                                    name={"hour_id"}
                                    value={appointmentData.hour}
                                    handleChange={(value) => {
                                        setAppointmentData({
                                            ...appointmentData,
                                            hour: value,
                                        })
                                    }
                                    }>
                                </SelectHour>
                            </Col>
                        </Form.Group>
                    </Form>
                    <ClinicButton
                        onClick={createApp}
                        text={'Aceptar!'}
                    />
                </Card.Body>
            </Card>

            {/* SHOW MODAL TO VERIFY THE APPOINTMENT IS COMPLETE BEFORE CREATE ONE */}
            <WarningModal show={showModal} onHide={() => setShowModal(false)} />
        </Container>
    )
};