import React from "react";
import "./AppointmentCard.css";
import { Card } from "react-bootstrap";

export const AppointmentCard = () => {
    return (
        <Card style={{ width: '18rem' }}>

            <Card.Body>
                <Card.Title>Cita:</Card.Title>
                <Card.Text>
                <div>Dentista:</div>
                <div>Servicio:</div>
                <div>Día:</div>
                <div>Hora:</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};