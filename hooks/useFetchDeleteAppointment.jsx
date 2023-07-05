// import { useEffect, useState } from "react";

// export const useFetchProducts = () => {
//     const [products, setProducts] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:4000/appointment/delete')
//             .then(res => res.json())
//             .then(res => setProducts(res.data))
//             .catch(error => console.log(error))
//     }, [])
//     return products;
// }