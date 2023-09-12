
import React from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Container } from "react-bootstrap";
import "../../App.css";

export const UserCard = () => {

  const users = useFetchUsers();
  if (!users) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5" style={{width:'100%', height:'100%'}} >
      <div className="requestUser">Usuarios</div>
      <div className="tableContainerCheck">
        <div className="tableHeaderUsers">
          <div className="tableHeaderRequest"><strong>Nombre</strong></div>
          <div className="tableHeaderRequest"><strong>Apellidos</strong></div>
          <div className="tableHeaderRequest"><strong>Email</strong></div>
          <div className="tableHeaderRequest"><strong>DNI/NIE</strong></div>
          <div className="tableHeaderRequest"><strong>Dirección</strong></div>
          <div className="tableHeaderRequest"><strong>Teléfono</strong></div>
        </div>
        {users.map((user) => (
          <div className="tableDataRow" key={user.id}>
            <div className="tableDataCheck">{user.name}</div>
            <div className="tableDataCheck">{user.lastname}</div>
            <div className="tableDataCheck">{user.email}</div>
            <div className="tableDataCheck">{user.dni}</div>
            <div className="tableDataCheck">{user.address}</div>
            <div className="tableDataCheck">{user.phone}</div>
          </div>
        ))}</div>
    </Container>
  );
}