import React from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import "./AppointmentCard.css"
import { InputText } from "../InputText/InputText";

export const AppointmentCard = () => {
    const appointments = useFetchAppointments();

    if (!appointments) {
        return <div>Loading...</div>;
    }

    console.log("All Appointments:", appointments);

    return (
       


<Container className="mt-5">
<div className="searchAppointment">
                <InputText
                placeholder={"Buscar cita..."}
                ></InputText>
            </div>
  {appointments.map((appointment) => (
    <Card key={appointment.id} className="acard mt-2" style={{ backgroundColor: '#3c709a61'}}>
      <Card.Body>
        <Form className="d-flex">
          <Form.Label className="flex-grow-1">
            Cita: <div className="ml-auto">{appointment.id}</div>
          </Form.Label>

          <Form.Label className="flex-grow-1">
            Paciente: <div className="ml-auto">{appointment.patient_id}</div>
          </Form.Label>

          <Form.Label className="flex-grow-1">
            Dentista: <div className="ml-auto">{appointment.dentist_id}</div>
          </Form.Label>

          <Form.Label className="flex-grow-1">
            Servicio: <div className="ml-auto">{appointment.service_id}</div>
          </Form.Label>

          <Form.Label className="flex-grow-1">
            Día: <div className="ml-auto">{appointment.date}</div>
          </Form.Label>

          <Form.Label className="flex-grow-1">
            Hora: <div className="ml-auto">{appointment.hour}</div>
          </Form.Label>
          <div className="d-flex justify-content-center buttonsAppointments"> {/* Use d-flex and justify-content-between to display buttons side by side */}
          <button className="buttonUpdate">Cambiar</button>
          <button className="buttonDelete">borrar</button>
        </div>
        </Form>
        
      </Card.Body>
    </Card>
  ))}
</Container>
    );
};


// <Form className="d-flex">
//                         <Form.Label className="flex-grow-1">
//                             Nombre: <div className="ml-auto">{user.name}</div>
//                         </Form.Label>

//                         <Form.Label className="flex-grow-1">
//                             Apellidos: <div className="ml-auto">{user.lastname}</div>
//                         </Form.Label>

//                         <Form.Label className="flex-grow-1">
//                             Email: <div className="ml-auto">{user.email}</div>
//                         </Form.Label>

//                         <Form.Label className="flex-grow-1">
//                             DNI/NIE: <div className="ml-auto">{user.dni}</div>
//                         </Form.Label>

//                         <Form.Label className="flex-grow-1">
//                             Dirección: <div className="ml-auto">{user.address}}</div>
//                         </Form.Label>

//                         <Form.Label className="flex-grow-1">
//                             Teléfono: <div className="ml-auto">{user.phone}</div>
//                         </Form.Label>
//                         <div className="d-flex justify-content-center buttonsAppointments"> {/* Use d-flex and justify-content-between to display buttons side by side */}
//                             <button className="buttonUpdate">Cambiar</button>
//                             <button className="buttonDelete">borrar</button>
//                         </div>
//                     </Form>











{/* <Container className="mt-5">
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
//         </Container>
//  */}





















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