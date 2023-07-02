import React from "react";
// import { InputText } from "../../common/InputText/InputText";
// import { bringProducts } from "../../services/ApiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./Home.css";

export const Home = () => {
    return (
        <div className="homeDesign">
            <ProductCard></ProductCard>
        </div>
    );
};   




// const [products, setProducts] = useState([]);
// // const [criteria, setCriteria] = useState("");

// useEffect(() => {
//     bringProducts()
//         .then(resultados => {
//             setProducts(resultados.data.results);
//         })
//         .catch(error => {
//             console.log(error);
//         });
// }, []);

