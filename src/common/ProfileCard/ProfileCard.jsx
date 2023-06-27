import React from "react";
import "./ProfileCard.css";
import { Card } from "react-bootstrap";

export const ProfileCard = () => {
    return (
        <Card style={{ width: '18rem' }}>

            <Card.Body>
                <Card.Title>Cita:</Card.Title>
                <Card.Text>
                <div>Fullname:</div>
                <div>Email:</div>
                <div>Password:</div>
                <div>Dni:</div>
                <div>Dirección:</div>
                <div>Edad:</div>
                <div>Teléfono:</div>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};