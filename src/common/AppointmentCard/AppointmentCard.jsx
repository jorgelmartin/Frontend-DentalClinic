import React, { useState, useEffect } from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { InputSearch } from "../InputSearch/InputSearch";

export const AppointmentCard = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  const { appointments, pagination } = useFetchAppointments(currentPage, perPage);
  const [filteredAppointments, setFilteredAppointments] = useState([]);

  //GO TO FIRST PAGE WHEN SEARCH START
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  const handleSearch = (text) => {
    if (text) {
      setSearchText(text.toLowerCase());
      const filtered = appointments.filter(
        (appointment) =>
          appointment.dentist.name.toLowerCase().includes(text.toLowerCase()) ||
          appointment.patient.name.toLowerCase().includes(text.toLowerCase()) ||
          appointment.date.toLowerCase().includes(text.toLowerCase()) ||
          appointment.Service.name.toLowerCase().includes(text.toLowerCase()) ||
          appointment.id.toString().includes(text.toLowerCase())
      );
      setFilteredAppointments(filtered);
    } else {
      setFilteredAppointments(appointments);
    };
  };

  const handleNextPage = () => {
    if (pagination.currentPage < pagination.totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  if (!filteredAppointments) {
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
        {filteredAppointments.map((appointment) => (
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
          style={{ background: "#5a1a6fde" }}
          onClick={handlePrevPage}
          disabled={pagination.currentPage === 1}
        >
          Anterior
        </Button>

        <div>
          {pagination.currentPage} de {pagination.totalPages}
        </div>

        <Button
          style={{ background: "#5a1a6fde" }}
          onClick={handleNextPage}
          disabled={pagination.currentPage === pagination.totalPages}
        >
          Siguiente
        </Button>
      </div>
    </Container>
  );
};