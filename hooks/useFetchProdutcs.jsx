import { useEffect, useState } from "react";

//GETTING SERVICES/PRODUCTS FROM THE API
export const useFetchProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://backend-dental-clinic.vercel.app/service/getAll')
            .then(res => res.json())
            .then(res => setProducts(res.data))
            .catch(error => console.log(error))
    }, [])
    return products;
}
