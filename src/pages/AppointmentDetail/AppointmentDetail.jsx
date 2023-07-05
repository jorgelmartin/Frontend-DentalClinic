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
        // Si hay datos en appointments y no es null o undefined
        if (appointments && Array.isArray(appointments)) {
            // Encuentra el producto correspondiente al id en el array de productos obtenido del hook.
            const foundAppointment = appointments.find((item) => item.id === parsedId);

            // Si se encuentra el producto, actualiza el estado productDetail con el producto correspondiente.
            // Si no se encuentra, el estado productDetail se establece en null.
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
                        {/* Si appointmentDetail no es null, muestra la información */}
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