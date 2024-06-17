
import React, { useEffect, useState } from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Button, Container } from "react-bootstrap";
import "../../App.css";
import { InputSearch } from "../../common/InputSearch/InputSearch";
import { usePagination } from "../../../hooks/usePagination";

export const UserCard = () => {
  const perPage = 6;
  const { currentPage, nextPage, prevPage, goToPage } = usePagination();

  const [searchQuery, setSearchQuery] = useState("");
  const { users, pagination } = useFetchUsers(currentPage, perPage, searchQuery);

  //SEARCH
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  //EACH TIME USER SEARCH, GO TO PAGE 1
  useEffect(() => {
    goToPage(1);
  }, [searchQuery]);

  if (!users) {
    return <div>Cargando...</div>;
  }

  return (
    <Container className="mt-5" style={{ width: '100%', height: '100%' }}>

      <InputSearch onSearch={handleSearch} />

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