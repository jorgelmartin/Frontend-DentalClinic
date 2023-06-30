import React from "react";
// import { InputText } from "../../common/InputText/InputText";
// import { bringProducts } from "../../services/ApiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import "./Home.css";




export const Home = () => {
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



    return (
        <div className="homeDesign">


            {/* {products.map(products)}
            {products.length > 0 ? (
                <div className="services">
                    {products.slice(0, 7).map((product) => {
                        return (
                            <div> */}
                                <ProductCard
                                    // id={product.id}
                                    // name={product.name}
                                    // image={product.image}
                                    // brand={product.species}
                                />
                            {/* </div> */}
                    {/* //     );
                    // })} */}
                </div>
            // ) : (
            //     <div>CARGANDO...</div>
        //     // )}
        // </div>
    );
};