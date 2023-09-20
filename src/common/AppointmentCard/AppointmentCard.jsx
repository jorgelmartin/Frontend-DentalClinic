import React, { useState, useEffect } from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { inputHandler } from "../../services/useful";
import { Container } from "react-bootstrap";

export const AppointmentCard = () => {

  const [searchText, setSearchText] = useState("");

  //GET THE APPOINTMENT FROM THE HOOK
  const appointments = useFetchAppointments();

  //STATE TO GET THE FILTERED APPOINTMENTS
  const [filteredAppointments, setfilteredAppointments] = useState([]);

  //UPDATE THE APPOINTMENTS WHEN CHANGE TH E STATE OF APPOINTMENTS
  useEffect(() => {
    setfilteredAppointments(appointments)
  }, [appointments])

  //MAKE THE SEARCH FILTERED
  useEffect(() => {
    const searchAppointment = (text) => {
      let filtered = appointments;

      if (text && appointments) {
        filtered = (appointments.filter(
          (appointment) => appointment.dentist.name.includes(text) || appointment.patient.name.includes(text) || appointment.date.includes(text)))
      }
      setfilteredAppointments(filtered);
    }
    //ADD TIMEOUT
    const timeOutId = setTimeout(() =>
      searchAppointment(searchText.text), 500);
    return () => clearTimeout(timeOutId);
  }, [searchText, appointments]);

  const navigate = useNavigate();
  if (!filteredAppointments) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="mt-5" style={{margin:'0', padding:'0'}}>
      {/* INPUT SEARCH */}
      <input
        className="InputSearch"
        type={"text"}
        name={"text"}
        placeholder={"Buscar cita..."}
        onChange={(e) => inputHandler(e, setSearchText)}
      />

      {/* TABLE APPOINTMENTS */}
      <div className="tableContainerCheck mt-4">
        <div className="tableDataRow">
          {/* <div className="tableHeaderRequest"><strong>ID</strong></div> */}
          <div className="tableHeaderRequest"><strong>Paciente</strong></div>
          <div className="tableHeaderRequest"><strong>Dentista</strong></div>
          <div className="tableHeaderRequest"><strong>Servicio</strong></div>
          <div className="tableHeaderRequest"><strong>Día</strong></div>
          {/* <div className="tableHeaderRequest"><strong>Hora</strong></div> */}
          <div className="tableHeaderRequest"><strong>Ver</strong></div>
        </div>
        {/* APPOINTMENT DATA */}
        {filteredAppointments.map((appointment) => (
          <div key={appointment.id}>
            <div className="tableDataRow">
              {/* <div className="tableDataCheck">{appointment.id}</div> */}
              <div className="tableDataCheck">{appointment.patient.name} {appointment.patient.lastname}</div>
              <div className="tableDataCheck">{appointment?.dentist?.name} {appointment?.dentist?.lastname}</div>
              <div className="tableDataCheck">{appointment?.Service?.name}</div>
              <div className="tableDataCheck">{appointment.date}</div>
              {/* <div className="tableDataCheck">{appointment.hour}</div>  */}
              <div className="tableDataCheck">
                <button
                  className="buttonUpdate"
                  onClick={() => navigate(`/appointmentdetail/${appointment.id}`
                  )}>Detalle
                </button>
              </div>
            </div>
          </div>
        ))}
        </div>
    </Container>
  );
};