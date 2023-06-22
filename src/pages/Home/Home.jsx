
import React from 'react';
import "./Home.css";
// import { ProductCard } from '../../common/ProductCard/ProductCard';
// import { bringProducts } from '../../services/apiCalls';

 
export const Home = () => {


    // const [products, setProducts] = useState([]);

    // useEffect(()=>{

    //     if(products.length === 0){

            //Me traes los productos porque ahora mismo no tengo N A D A 

    //         bringProducts()
    //             .then(
    //                 resultados => {
    //                     setProducts(resultados.data.results)
    //                 }
    //             )
    //             .catch(error => console.log(error));
    //     } 

    // },[products]);

     return (
         <div className='homeDesign'>
            {
                products.length > 0 
                    ? (
                        <div className="services">
                            {
                                products.slice(0,20).map(
                                    product => {
                                        return (
                                            <div key={product.id}>
                                                <ProductCard
                                                    id={product.id}
                                                    name={product.name}
                                                    image={product.image}
                                                    brand={product.species}
                                                />

                                            </div>
                                        )
                                    }
                                )
                            }
                        </div>
                    )

                    : (
                        <div>CARGANDO...</div>
                    )
            }

         </div>
     )
}


// import React from 'react';
// import './Home.css';
// import { ChangeView } from '../../common/ChangeView/ChangeView';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


// export const Home = () => {
//     return (
//         <div className='homeDesign'>
//             {/* <ChangeView
//                 path={"/login"}
//                 name={"Login"}
//             />
//             <ChangeView
//                 path={"/register"}
//                 name={"Register"}
//             /> */}
//         </div>
//     )
// }