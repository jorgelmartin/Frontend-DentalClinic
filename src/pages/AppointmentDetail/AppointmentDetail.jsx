import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "./AppointmentDetail.css";
import { Button } from "react-bootstrap";
import { CreateAppointment } from "../../common/CreateAppointment/CreateAppointment";

export const AppointmentDetail = () => {
    let { id } = useParams();
    const parsedId = parseInt(id);
    const appointments = useFetchAppointments();
    const [appointmentDetail, setAppointmentDetail] = useState(null);

    const [editing, setEditing] = useState(false);




    useEffect(() => {
        if (appointments && Array.isArray(appointments)) {
            const foundAppointment = appointments.find((item) => item.id === parsedId);
            if (foundAppointment) {
                setAppointmentDetail(foundAppointment);
            } else {
                setAppointmentDetail(null);
            }
        }
    }, [parsedId, appointments]);

    return (
        <>
            { appointmentDetail && !editing ? (
                <div className="appointmentDetail">
                    <div className="DetailAppointment1">
                        <>
                            <h2>Paciente: {appointmentDetail.patient.name} {appointmentDetail.patient.lastname}</h2>
                            <h4>Servicio: {appointmentDetail.Service.name}</h4>
                            <h5>Dentista: {appointmentDetail.dentist.name} {appointmentDetail.dentist.lastname}</h5>
                            <h5>Día: {appointmentDetail.date}</h5>
                            <h5>Hora: {appointmentDetail.hour}</h5>
                        </>
                    </div>
                </div>
                ) : (
                <CreateAppointment isUpdate={true} updateData={appointmentDetail}></CreateAppointment>
                )
            }
            <Button style={{ backgroundColor: '#13326fba' }}
                onClick={() => {
                    setEditing(!editing);
                }}
            >
                EDITAR
            </Button>
        </>
    );
};