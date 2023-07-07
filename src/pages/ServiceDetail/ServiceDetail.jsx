import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../../hooks/useFetchProdutcs";
import "./ServiceDetail.css";

    export const ServiceDetail = () => {
        //GET THE ID VALUE FROM THE URL
        let { id } = useParams();
        const parsedId = parseInt(id); 
        //ASSIGN PRODUCTS
        const products = useFetchProducts();
        const [productDetail, setProductDetail] = useState(null);
    
        useEffect(() => {
            // FOUND THE PRODUCT WITH THE ID GET IT FROM THE ARRAY
            const foundProduct = products.find((item) => item.id === parsedId);
            if (foundProduct) {
                setProductDetail(foundProduct);
            } else {
                setProductDetail(null);
            }
        }, [parsedId, products]);

        //SHOW THE DETAIL SERVICE
    return (
        <div className="DetailService">
            <div className="DetailService1">
                {productDetail ? (
                    <>
                        <h2>Servicio: {productDetail.name}</h2>
                        <img src={productDetail.image} alt="" />
                        <h4>Duración: {productDetail.duration}</h4>
                        <h5>Precio€: {productDetail.price}</h5>
                    </>
                ) : (
                    <p>Producto no encontrado</p>
                )}
            </div>
        </div>
    );
};