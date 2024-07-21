import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { useFetchServices } from '../../../hooks/useFetchServices';
import { useNavigate } from "react-router-dom";

//SHOW SERVICES AT HOME PAGE
export const Home = () => {
    const services = useFetchServices();
    const navigate = useNavigate();

    if (!services) {
        return <div>Cargando...</div>;
    };

    return (
        <Container className="mt-5">
            <div className="clinicTitle">SMILE - everyday
            </div>
            {/* MAPPING SERVICES AT HOME PAGE */}
            <div className="productCardContainer mt-2">
                {services.map((service) => (

                    <div key={service.id} className="productCardDesign">
                        <img className="productImgDesign"
                            src={`https://backend-dental-clinic.vercel.app/${service.image}`}
                            alt={service.name}
                            onClick={() => navigate(`/servicedetail/${service.id}`)} />
                        <h1>{service.name}</h1>
                    </div>
                ))}
            </div>
        </Container>
    );
};   