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
            {productDetail ? (
                <>
                    <h2 style={{
                        textShadow: '0.05em 0.05em 0.06em rgba(0, 0, 0, 0.5)'
                    }}>
                        {productDetail.name}
                    </h2>
                    <img src={productDetail.image} alt="" className="img-fluid imageDetail" />
                    {/* <h5>Duración: {productDetail.duration}</h5> */}
                    <h5 className="mt-3">Precio: {productDetail.price}</h5>
                    <p>{productDetail.description}</p>
                    {/* <button>Pedir cita</button> */}
                </>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};