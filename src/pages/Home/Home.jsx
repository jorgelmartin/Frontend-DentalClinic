import React, { useEffect, useState } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { useFetchServices } from '../../../hooks/useFetchServices';
import { useNavigate } from "react-router-dom";

//SHOW SERVICES AT HOME PAGE
export const Home = () => {
    const services = useFetchServices();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // SHOW LOADER 1 TIME & SAVE IN SESSIONSTORAGE
    useEffect(() => {
        const hasShownLoader = sessionStorage.getItem('hasShownLoader');
        if (!hasShownLoader) {
            const timer = setTimeout(() => {
                setLoading(false);
                sessionStorage.setItem('hasShownLoader', 'true');
            }, 3000);

            return () => clearTimeout(timer);
        } else {
            setLoading(false);
        }
    }, []);

    if (!services) {
        return <div>Cargando...</div>;
    };

    return (
        <Container>

            {/* LOADER */}
            {loading ? (
                <div>
                    <div className="loader">
                        <div className="intern"></div>
                        <div className="externalShadow">
                            <div className="central"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    {/* TITLE */}
                    <div className="clinicTitle">SMILE - everyday</div>
                    {/* MAPPING SERVICES AT HOME PAGE */}
                    <div className="productCardContainer mt-2">
                        {services.map((service) => (
                            <div key={service.id} className="productCardDesign">
                                <img
                                    className="productImgDesign"
                                    src={`https://backend-dental-clinic.vercel.app/${service.image}`}
                                    alt={service.name}
                                    onClick={() => navigate(`/servicedetail/${service.id}`)}
                                />
                                <h1>{service.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    );
};   