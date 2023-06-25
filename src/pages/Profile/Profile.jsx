import React from "react";
import { Col, Collapse, Container, Row } from "react-bootstrap";
import "./Profile.css";

export const Profile = () => {


    return (

        <div className="userContainer">
            <Container>
                <Row className="row-cols-auto justify-content-center">
                    <Col className="userCardTitle">
                        <div>
                            PERFIL
                        </div>
                    </Col>
                    <Col className="userCardTitle">
                        <div>
                            PEDIR CITA
                        </div>
                    </Col>
                    <Col className="userCardTitle">
                        <div>
                            MIS CITAS
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
export default Profile;