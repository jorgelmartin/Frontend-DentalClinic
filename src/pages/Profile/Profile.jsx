import React from "react";
import { Container } from "react-bootstrap";
import "./Profile.css";
import { ProfileCard } from "../../common/ProfileCard/ProfileCard";

export const Profile = () => {
    return (
            <Container className="containerProfile">    
                            <ProfileCard></ProfileCard>
            </Container>
    )
}