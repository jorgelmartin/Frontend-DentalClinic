import React from "react";
import { useFetchProducts } from '../../../hooks/useFetchProdutcs';
import { useNavigate } from "react-router-dom";
import './ProductCard.css'

export const ProductCard = () => {
    const products = useFetchProducts();
    const navigate = useNavigate();
    return (
        <>
            <div className="productCardContainer">
            {products.map((product) => (
                <div key={product.id} className="productCardDesign">
                    <img className="productImgDesign" src={product.image} alt={product.name} onClick={() => navigate(`/servicedetail/${product.id}`)} />
                    <h1>{product.name}</h1>
                </div>
            ))}
        </div>
        </>
    );
};