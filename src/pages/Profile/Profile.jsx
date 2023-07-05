import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Profile.css";
import { ProfileCard } from "../../common/ProfileCard/ProfileCard";


export const Profile = () => {

    return (
        <div className="userContainer">
            <Container fluid>
                <Row className="userCard gap-3">
                    <Col xs={7} md={6} lg={3}>
                        <div className="profileHeader">
                            <h1>PERFIL</h1>
                        </div>
                        <div className="userCard">
                            <ProfileCard></ProfileCard>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}