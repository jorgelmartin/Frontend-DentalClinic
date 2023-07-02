import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchProducts } from "../../../hooks/useFetchProdutcs";


    export const ServiceDetail = () => {
        let { id } = useParams();
        const parsedId = parseInt(id); 
    
        // Aquí asumimos que el hook useFetchProducts está correctamente importado y funcionando.
        const products = useFetchProducts();
    
        // Utilizamos el hook useState para crear el estado products y la función setProducts.
        const [productDetail, setProductDetail] = useState(null);
    
        useEffect(() => {
            // Encuentra el producto correspondiente al id en el array de productos obtenido del hook.
            const foundProduct = products.find((item) => item.id === parsedId);
    
            // Si se encuentra el producto, actualiza el estado productDetail con el producto correspondiente.
            // Si no se encuentra, el estado productDetail se establece en null.
            if (foundProduct) {
                setProductDetail(foundProduct);
            } else {
                setProductDetail(null);
            }
        }, [parsedId, products]);

    console.log("productDetail:", productDetail); // <-- También lo imprimimos aquí para comprobar su valor actual antes del retorno.

    return (
        <div className="DetailService">
            <div className="DetailService1">
                {/* Si productDetail no es null, muestra la información */}
                {productDetail ? (
                    <>
                        <h2>{productDetail.name}</h2>
                        <img src={productDetail.image} alt="" />
                        <h4>{productDetail.duration}</h4>
                        <h5>{productDetail.price}</h5>
                    </>
                ) : (
                    <p>Producto no encontrado</p>
                )}
            </div>
        </div>
    );
};