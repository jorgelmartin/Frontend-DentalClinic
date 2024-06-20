import { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchAppointmentById } from "../../../hooks/useFetchAppointmentById";
import "./../../App.css";
import { Container } from "react-bootstrap";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { AppButton } from "../../common/AppButton/AppButton";

export const AppointmentDetail = () => {
    let { id } = useParams();
    const parsedId = parseInt(id);
    const appointment = useFetchAppointmentById(parsedId);
    const [editing, setEditing] = useState(false);

    return (
        <Container className="d-flex justify-content-center align-items-center mt-5">

            {!editing ? (
                appointment && (
                    <div className="dataDetailContainer">

                        {/* APPOINTMENT DETAIL TITLE */}
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="dataStyleTitle">
                                Detalle de cita
                            </div>
                        </div>

                        {/* DATA APPOINTMENT */}
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Nº Cita</div>
                            <strong> <div>{appointment.id}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Paciente</div>
                            <strong> <div>{appointment.patient.name} {appointment.patient.lastname}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Servicio</div>
                            <strong>  <div>{appointment.Service.name}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Precio</div>
                            <strong> <div>{appointment.Service.price}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Dentista</div>
                            <strong> <div>{appointment.dentist.name} {appointment.dentist.lastname}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Día</div>
                            <strong> <div>{appointment.date}</div></strong>
                        </div>
                        <div className="dataDataDetail">
                            <div className="dataDetailHeader">Hora</div>
                            <strong> <div>{appointment.hour}</div></strong>
                        </div>

                        {/* EDIT BUTTON */}
                        <div className="d-flex align-items-center justify-content-center">
                            <AppButton
                                text={'Editar'}
                                onClick={() => {
                                    setEditing(!editing);
                                }}
                            />
                        </div>
                    </div>
                )
            ) : (
                // IF CLICK IN EDIT USE CREATEAPPOINTMENT COMPONENT FOR EDIT THE ACTUAL APPOINTMENT
                <CreateAppointment isUpdate={true} updateData={appointment} />
            )}
        </Container>
    );
};