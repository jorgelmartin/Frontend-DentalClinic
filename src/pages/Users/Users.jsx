
import React, { useEffect, useState } from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Button, Container } from "react-bootstrap";
import "../../App.css";
import { InputSearch } from "../../common/InputSearch/InputSearch";
import { usePagination } from "../../../hooks/usePagination";
import { useNavigate } from "react-router-dom";

export const Users = () => {
  const navigate = useNavigate();
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
    <Container>

      <div className="dataTitle ">Usuarios</div>

      <InputSearch onSearch={handleSearch} />

      <div className="tableContainerData mt-4">
        <div className="dataDetailHeaderUsers">
          <div className="tableDataHeader">Nombre</div>
          <div className="tableDataHeader">Email</div>
          <div className="tableDataHeader">Teléfono</div>
          <div className="tableDataHeader">Ver</div>
        </div>
        {users.map((user) => (
          <div className="tableDataRow" key={user.id}>
            <div className="tableDataData">{user.name} {user.lastname}</div>
            <div className="tableDataData">{user.email}</div>
            <div className="tableDataData">{user.phone}</div>
            <div className="tableDataData d-flex justify-content-center align-items-center">
              <div
                className="buttonDataDetail"
                onClick={() => navigate(`/userdetail/${user.id}`)}
              >
                Detalle
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
            disabled={currentPage === (pagination?.totalPages)}
          >
            Siguiente
          </Button>
        </div>
      ) : ''}

    </Container>
  );
};