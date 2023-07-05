import React, { useState, useEffect } from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import { Col, Row, Container, Form, Card, Button } from "react-bootstrap";
import "./AppointmentCard.css"
import { useNavigate } from "react-router-dom";
import { inputHandler } from "../../services/useful";

export const AppointmentCard = () => {
  const [searchText, setSearchText] = useState("");
  const appointments = useFetchAppointments();

  const [filteredAppointments, setfilteredAppointments] = useState([]);

  useEffect(() => {setfilteredAppointments(appointments)}, [appointments])

  useEffect(() => {
    const searchAppointment = (text) => {
      let filtered = appointments;
      
      if(text && appointments) {
        filtered = (appointments.filter((appointment) => appointment.dentist.name.includes(text) || appointment.patient.name.includes(text) || appointment.date.includes(text)))
      }

      setfilteredAppointments(filtered);
    }
    const timeOutId = setTimeout(() => searchAppointment(searchText.text), 500);
    return () => clearTimeout(timeOutId);
  }, [searchText, appointments]);

  const navigate = useNavigate();
  if (!filteredAppointments) {
    return <div>Loading...</div>;
  }

  return (<div className="searchAppointment">
    <Container className="mt-5">

      {/* INPUT SEARCH */}
      
      <input
          className="InputSearch"
          type={"text"}
          name={"text"}
          placeholder={"Buscar cita..."}
          onChange={(e) => inputHandler(e, setSearchText)}
      />
      
      {filteredAppointments.map((appointment) => (
        <Card key={appointment.id} className="acard mt-2" style={{ backgroundColor: '#3c709a61' }}>
          <Card.Body>
            <Form className="d-flex">
              <Form.Label className="flex-grow-1">
                Cita: <div className="ml-auto">{appointment.id}</div>
              </Form.Label>
              <Form.Label className="flex-grow-1">
                Paciente: <div className="ml-auto">{appointment.patient.name} {appointment.patient.lastname}</div>
              </Form.Label>
              <Form.Label className="flex-grow-1">
                Dentista: <div className="ml-auto">{appointment.dentist.name} {appointment.dentist.lastname}</div>
              </Form.Label>
              <Form.Label className="flex-grow-1">
                Servicio: <div className="ml-auto">{appointment.Service.name}</div>
              </Form.Label>
              <Form.Label className="flex-grow-1">
                Día: <div className="ml-auto">{appointment.date}</div>
              </Form.Label>
              <Form.Label className="flex-grow-1">
                Hora: <div className="ml-auto">{appointment.hour}</div>
              </Form.Label>
              <div className="d-flex justify-content-center buttonsAppointments"> {/* Use d-flex and justify-content-between to display buttons side by side */}
                <button className="buttonUpdate" onClick={() => navigate(`/appointmentdetail/${appointment.id}`)}>Detalle</button>
                <button className="buttonDelete">borrar</button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      ))}
    </Container></div>
  );
};