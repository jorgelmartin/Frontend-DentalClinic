import { useEffect, useState } from "react";

//GETTING SERVICES/PRODUCTS FROM THE API
export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/service/getAll')
            .then(res => res.json())
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }, [])
    return products;
}
