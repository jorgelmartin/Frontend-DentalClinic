import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "./AppointmentDetail.css";
import { Container } from "react-bootstrap";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { ClinicButton } from "../../common/ClinicButton/ClinicButton";

export const AppointmentDetail = () => {
    //GET THE ID VALUE FROM THE URL
    let { id } = useParams();
    const parsedId = parseInt(id);
    //ASSIGN APPOINTMENTS
    const appointments = useFetchAppointments();
    const [appointmentDetail, setAppointmentDetail] = useState(null);
    const [editing, setEditing] = useState(false);

    useEffect(() => {
        // FOUND THE APPOINTMENT WITH THE ID GET IT FROM THE ARRAY
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
        <Container className="d-flex justify-content-center">
            {appointmentDetail && !editing ? (
                <div className="DetailAppointment">
                    <strong 
                style={{
                    fontSize:'2em',
                    color:'white',
                    width: '8em',
                    backgroundColor: 'rgba(209, 89, 179, 0.947)',
                    borderRadius:'2em',
                    border:'0.05em solid blue',
                    textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)',
                    boxShadow: 'rgba(0, 0, 0, 0.17) 0em -2em 2em 0em inset, rgba(0, 0, 0, 0.15) 0em -3em 2.2em 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px'
             
                }}
                >Detalle de cita</strong>

                   
                    <div className="tableHeader mt-3">Paciente</div>
                        <h5>{appointmentDetail.patient.name} {appointmentDetail.patient.lastname}</h5>
                        <div className="tableHeader">Servicio</div>
                        
                        <h5>{appointmentDetail.Service.name}</h5>
                        <div className="tableHeader">Dentista</div>
                        <h5>{appointmentDetail.dentist.name} {appointmentDetail.dentist.lastname}</h5>
                        <div className="tableHeader">Día</div>
                        <h5>{appointmentDetail.date}</h5>
                        <div className="tableHeader">Hora</div>
                        <h5>{appointmentDetail.hour}</h5>

                        <ClinicButton
                            text={'Editar'}
                            onClick={() => {
                                setEditing(!editing);
                            }}
                            />
                    </div>
            

            ) : (
                <CreateAppointment isUpdate={true} updateData={appointmentDetail}/>
            )
            }

</Container>
    );
};