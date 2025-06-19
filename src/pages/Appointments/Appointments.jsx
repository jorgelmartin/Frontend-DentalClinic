import React, { useEffect, useState } from "react";
import { useFetchAppointments } from "../../../hooks/useFetchAppointments";
import "../../App.css";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { InputSearch } from "../../common/InputSearch/InputSearch";
import { usePagination } from "../../../hooks/usePagination";

export const Appointments = () => {
  const navigate = useNavigate();
  const perPage = 6;
  const { currentPage, nextPage, prevPage, goToPage } = usePagination();
  const [searchQuery, setSearchQuery] = useState('');
  const { appointments, pagination } = useFetchAppointments(currentPage, perPage, searchQuery);

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
    <Container className="containerData">
      <div className="containerDataScroll">

        {/* TITLE */}
      <div className="dataTitle">Citas</div>

      {/* INPUT SEARCH */}
      <InputSearch onSearch={handleSearch} />

      {/* TABLE APPOINTMENTS */}
      <div className="tableContainerData mt-4">
        <div className="tableDataRow">
          <div className="tableDataHeader">Paciente</div>
          <div className="tableDataHeader">Dentista</div>
          <div className="tableDataHeader">Servicio</div>
          <div className="tableDataHeader">Día</div>
          <div className="tableDataHeader">Ver</div>
        </div>

        {/* APPOINTMENT DATA */}
        {appointments.map((appointment) => (
          <div key={appointment.id}>
            <div className="tableDataRow">
              <div className="tableDataData">
                {appointment.patient.name} {appointment.patient.lastname}
              </div>
              <div className="tableDataData">
                {appointment.dentist.name} {appointment.dentist.lastname}
              </div>
              <div className="tableDataData">{appointment?.Service?.name}</div>
              <div className="tableDataData">{appointment.date}</div>
              <div className="tableDataData d-flex justify-content-center align-items-center">
                <div
                  className="buttonDataDetail"
                  onClick={() => navigate(`/appointmentdetail/${appointment.id}`)}
                >
                  Detalle
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      {pagination.totalPages > 1 ? (
        <div
          style={{
            marginTop: '2em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <Button
            style={{ background: '#5a1a6fde' }}
            onClick={prevPage}
            disabled={currentPage === 1}
          >
            Anterior
          </Button>

          {`${currentPage} de ${pagination.totalPages}`}

          <Button
            style={{ background: '#5a1a6fde' }}
            onClick={nextPage}
            disabled={currentPage === (pagination.totalPages)}
          >
            Siguiente
          </Button>
        </div>
      ) : ''}
      </div>
    </Container>
  );
};