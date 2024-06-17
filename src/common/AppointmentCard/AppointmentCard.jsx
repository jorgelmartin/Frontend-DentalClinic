import React, { useEffect, useState } from "react";
import { useFetchSearchAppointments } from "../../../hooks/useFetchSearchAppointments";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { InputSearch } from "../InputSearch/InputSearch";
import { usePagination } from "../../../hooks/usePagination";

export const AppointmentCard = () => {
  const navigate = useNavigate();
  const perPage = 6;
  const { currentPage, nextPage, prevPage, goToPage } = usePagination();
  const [searchQuery, setSearchQuery] = useState("");
  const { appointments, pagination } = useFetchSearchAppointments(currentPage, perPage, searchQuery);

  //SEARCH
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //EACH TIME USER SEARCH, GO TO PAGE 1
  useEffect(() => {
    goToPage(1);
  }, [searchQuery]);


  if (!appointments) {
    return <div>Cargando...</div>;
  }
  return (
    <Container className="mt-5" style={{ margin: "0", padding: "0" }}>

      {/* INPUT SEARCH */}
      <InputSearch onSearch={handleSearch} />

      {/* TABLE APPOINTMENTS */}
      <div className="tableContainerCheck mt-4">
        <div className="tableDataRow">
          <div className="tableHeaderRequest">
            <strong>Paciente</strong>
          </div>
          <div className="tableHeaderRequest">
            <strong>Dentista</strong>
          </div>
          <div className="tableHeaderRequest">
            <strong>Servicio</strong>
          </div>
          <div className="tableHeaderRequest">
            <strong>Día</strong>
          </div>
          <div className="tableHeaderRequest">
            <strong>Ver</strong>
          </div>
        </div>

        {/* APPOINTMENT DATA */}
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            <div className="tableDataRow">
              <div className="tableDataCheck">
                {appointment.patient.name} {appointment.patient.lastname}
              </div>
              <div className="tableDataCheck">
                {appointment?.dentist?.name} {appointment?.dentist?.lastname}
              </div>
              <div className="tableDataCheck">{appointment?.Service?.name}</div>
              <div className="tableDataCheck">{appointment.date}</div>
              <div className="tableDataCheck">
                <button
                  className="buttonUpdate"
                  onClick={() => navigate(`/appointmentdetail/${appointment.id}`)}
                >
                  Detalle
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          marginTop: "2em",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Button
          style={{ background: '#5a1a6fde' }}
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Anterior
        </Button>

        {`${currentPage} de ${pagination?.totalPages || 1}`}

        <Button
          style={{ background: '#5a1a6fde' }}
          onClick={nextPage}
          disabled={currentPage === (pagination?.totalPages || 1)}
        >
          Siguiente
        </Button>
      </div>
    </Container>
  );
};