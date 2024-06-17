
import React, { useState } from "react";
import "./CreateAppointment.css";
import { Col, Row, Container, Form, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { SelectServices } from "../../../hooks/useFetchSelectServices";
import { SelectDoctors } from "../../../hooks/useFetchSelectDoctors";
import { SelectDate } from "../../../hooks/useFetchSelectDate";
import { SelectHour } from "../../../hooks/useFetchSelectHour";
import { userData } from "../userSlice";
import { useSelector } from "react-redux";
import { createAppointment, updateAppointment } from "../../services/apiCalls";
import { WarningModal } from "../../common/WarningModal/WarningModal";
import { AppButton } from "../../common/AppButton/AppButton";

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
                .then(() => navigate("/appointmentcard"));
        } else {
            createAppointment(appointmentData, token)
                .then(() => navigate("/appointmentcard"));
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
                minWidth: '20em',
                maxWidth: '26m'
            }} >
                <Card.Body>
                    <Card.Title className="text-center mb-3 display-5"><strong>Crea tu cita</strong></Card.Title>
                    <Form>
                        <Form.Group as={Row}>
                            <Form.Label htmlFor="doctorSelect"></Form.Label>
                            <Col>

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
                            <Form.Label htmlFor="serviceSelect"></Form.Label>
                            <Col >

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
                            <Form.Label htmlFor="dateSelect"></Form.Label>
                            <Col>
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
                            <Form.Label htmlFor="hourSelect"></Form.Label>
                            <Col>
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
                    <AppButton
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