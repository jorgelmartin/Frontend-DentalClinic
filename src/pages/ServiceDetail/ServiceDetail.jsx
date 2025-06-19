import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchServices } from "../../../hooks/useFetchServices";
import "./ServiceDetail.css";

export const ServiceDetail = () => {
    //GET THE ID VALUE FROM THE URL
    let { id } = useParams();
    const parsedId = parseInt(id);
    //ASSIGN PRODUCTS
    const { services } = useFetchServices();
    const [serviceDetail, setServiceDetail] = useState('');

    useEffect(() => {
        // FOUND THE PRODUCT WITH THE ID GET IT FROM THE ARRAY
        const foundService = services.find((item) => item.id === parsedId);
        if (foundService) {
            setServiceDetail(foundService);
        } else {
            setServiceDetail('');
        }
    }, [parsedId, services]);

    //SHOW THE DETAIL SERVICE
    return (
        <div className="DetailService">
            {serviceDetail ? (
                <>
                    <h2 style={{
                        textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)'
                    }}>
                        {serviceDetail.name}
                    </h2>
                    <img 
                    src={`https://backend-dental-clinic.vercel.app/${serviceDetail.image}`}
                    alt={serviceDetail.name}
                    className="img-fluid imageDetail" 
                    />
                    <h5 className="mt-3">Precio: {serviceDetail.price}</h5>
                    <p>{serviceDetail.description}</p>
                    {/* <button>Pedir cita</button> */}
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};