import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "./AppointmentDetail.css";
import { Container } from "react-bootstrap";
import { CreateAppointment } from "../CreateAppointment/CreateAppointment";
import { AppButton } from "../../common/AppButton/AppButton";

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
        <Container className="d-flex justify-content-center align-items-center mt-5">
            {appointmentDetail && !editing ? (
                <div className="detailAppointment">

                    {/* APPOINTMENT DETAIL TITLE */}
                    <div className="d-flex align-items-center justify-content-center">
                        <strong
                            style={{
                                fontSize: '2em',
                                color: 'white',
                                width: '8em',
                                padding:'0.2em',
                                backgroundColor: 'rgba(158, 27, 219, 0.725)',
                                borderRadius: '2em',
                                border: '0.03em solid rgb(64, 139, 209)',
                                textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)',
                                boxShadow: 'rgba(0, 0, 0, 0.15) 0em -3em 2.2em 0 inset,rgba(0, 0, 0, 0.1) 0em -4.95em 2.5em 0em inset, inset rgba(0, 0, 0, 0.06) 0em 0.2em 0.1em, rgba(0, 0, 0, 0.09) 0em 0.4em 0.2em inset, rgba(0, 0, 0, 0.09) 0em 1.6em 0.8em inset, inset rgba(0, 0, 0, 0.09) 0em 3.2em 1.6em'
                            }}
                        >Detalle de cita
                        </strong></div>

                    {/* DATA APPOINTMENT */}
                    <div className="appointmentDetails">
                        <div className="tableHeader">Nº Cita</div>
                        <strong> <div>{appointmentDetail.id}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Paciente</div>
                        <strong> <div>{appointmentDetail.patient.name} {appointmentDetail.patient.lastname}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Servicio</div>
                        <strong>  <div>{appointmentDetail.Service.name}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Precio</div>
                        <strong> <div>{appointmentDetail.Service.price}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Dentista</div>
                        <strong> <div>{appointmentDetail.dentist.name} {appointmentDetail.dentist.lastname}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Día</div>
                        <strong> <div>{appointmentDetail.date}</div></strong>
                    </div>
                    <div className="appointmentDetails">
                        <div className="tableHeader">Hora</div>
                        <strong> <div>{appointmentDetail.hour}</div></strong>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                        <AppButton
                            text={'Editar'}
                            onClick={() => {
                                setEditing(!editing);
                            }}
                        /></div>
                </div>
            ) : (
                <CreateAppointment isUpdate={true} updateData={appointmentDetail} />
            )
            }
        </Container>
    );
};