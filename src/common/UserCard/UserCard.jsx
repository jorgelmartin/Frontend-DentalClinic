
import React from "react";
import { useFetchUsers } from "../../../hooks/useFetchUsers";
import { Col, Row, Container, Form, Card } from "react-bootstrap";
import "./UserCard.css"
// import { getAllUsers } from "../../services/ApiCalls";

export const UserCard = () => {

    const users = useFetchUsers();
    if (!users) {
        return <div>Loading...</div>;
    }

    return (


      
            <Container className="mt-2">
              <div className="userCardsRow mt-3">
                {users.map((user) => (
                  <Card key={user.id} className="ucard mt-5" style={{ backgroundColor: '#3c709a61' }}>
                    <Card.Body>
                      <Form className="d-flex">
                        <Form.Label className="flex-grow-1">
                          Nombre: <div className="ml-auto">{user.name}</div>
                        </Form.Label>
                        <Form.Label className="flex-grow-1">
                          Apellidos: <div className="ml-auto">{user.lastname}</div>
                        </Form.Label>
                        <Form.Label className="flex-grow-1">
                          Email: <div className="ml-auto">{user.email}</div>
                        </Form.Label>
                        <Form.Label className="flex-grow-1">
                          DNI/NIE: <div className="ml-auto">{user.dni}</div>
                        </Form.Label>
                        <Form.Label className="flex-grow-1">
                          Dirección: <div className="ml-auto">{user.address}</div>
                        </Form.Label>
                        <Form.Label className="flex-grow-1">
                          Teléfono: <div className="ml-auto">{user.phone}</div>
                        </Form.Label>
                        <div className="d-flex justify-content-center buttonsAppointments"> {/* Use d-flex and justify-content-between to display buttons side by side */}
                  
                          <button className="buttonDelete">borrar</button>
                        </div>
                      </Form>
                    </Card.Body>
                  </Card>
                ))}
              </div>
            </Container>
    );
}