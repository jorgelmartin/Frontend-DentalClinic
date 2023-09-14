import React from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import { useFetchProducts } from '../../../hooks/useFetchProdutcs';
import { useNavigate } from "react-router-dom";

//SHOW SERVICES AT HOME PAGE
export const Home = () => {

    const products = useFetchProducts();
    const navigate = useNavigate();
    return (
        <Container className="mt-5">
            <div className="clinicTitle mt-3"
                style={{
                    textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)'
                }}>SMILE - everyday
            </div>
            {/* MAPPING SERVICES AT HOME PAGE */}
            <div className="productCardContainer">
            {products.map((product) => (
                <div key={product.id} className="productCardDesign">
                    <img className="productImgDesign" 
                    src={product.image} 
                    alt={product.name} 
                    onClick={() => navigate(`/servicedetail/${product.id}`)}/>
                    <h1>{product.name}</h1>
                </div>
            ))}
        </div>
        </Container>
    );
};   