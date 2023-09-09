import React from "react";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./Home.css";
import { Container } from "react-bootstrap";

//SHOW SERVICES AT HOME PAGE
export const Home = () => {
    return (
        <Container className="mt-5">
            <div className="clinicTitle mt-3"
                style={{
                    textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)'
                }}>SMILE - everyday
            </div>
            <ProductCard />
        </Container>
    );
};   