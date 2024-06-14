
import React, { useState } from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Button, Container } from "react-bootstrap";
import "../../App.css";

export const UserCard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  const { users, pagination } = useFetchUsers(currentPage, perPage);

  if (!users) {
    return <div>Loading...</div>;
  }

  const handleNextPage = () => {
    if (pagination.page < pagination.totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (pagination.page > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <Container className="mt-5" style={{ width: '100%', height: '100%' }}>
      <div className="requestUser">Usuarios</div>
      <div className="tableContainerCheck">
        <div className="tableHeaderUsers">
          <div className="tableHeaderRequest"><strong>Nombre</strong></div>
          <div className="tableHeaderRequest"><strong>Email</strong></div>
          <div className="tableHeaderRequest"><strong>DNI/NIE</strong></div>
          <div className="tableHeaderRequest"><strong>Dirección</strong></div>
          <div className="tableHeaderRequest"><strong>Teléfono</strong></div>
        </div>
        {users.map((user) => (
          <div className="tableDataRow" key={user.id}>
            <div className="tableDataCheck">{user.name} {user.lastname}</div>
            <div className="tableDataCheck">{user.email}</div>
            <div className="tableDataCheck">{user.dni}</div>
            <div className="tableDataCheck">{user.address}</div>
            <div className="tableDataCheck">{user.phone}</div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div
        style={{
          marginTop: '2em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Button
          style={{ background: '#5a1a6fde' }}
          onClick={handlePrevPage}
          disabled={pagination.page === 1}
        >Anterior
        </Button>

        <div>{pagination.page} de {pagination.totalPages}</div>

        <Button
          style={{ background: '#5a1a6fde' }}
          onClick={handleNextPage}
          disabled={pagination.page === pagination.totalPages}
        >Siguiente
        </Button>
      </div>
    </Container>
  );
};