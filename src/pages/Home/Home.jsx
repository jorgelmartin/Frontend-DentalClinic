import React, { useState, useEffect } from "react";
import { bringProducts } from "../../services/ApiCalls";
import { ProductCard } from "../../common/ProductCard/ProductCard";
import './Home.css';
// import { ChangeView } from '../../common/ChangeView/ChangeView';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';


export const Home = () => {

    const [products, setProducts] = useState([]);
    const [criteria, setCriteria] = useState("");

    useEffect(() => {

        if (products.length === 0) {

            //   Me traes los productos porque ahora mismo no tengo N A D A

            bringProducts()
                .then(
                    resultados => {
                        setProducts(resultados.data.results)
                    }
                )
                .catch(error => console.log(error));
        }

    }, [products]);




    return (
        <div className="homeDesign">
            {/* Nuestro componente input siempre se encuentra visible */}
            {/* type, design, placeholder, name, functionHandler, onBlurFunction */}
            {/* <InputText
                type={"text"}
                design={"normalInput"}
                placeholder={""}
                name={"criteria"}
                functionHandler={inputHandler}
                onBlurFunction={() => {}}
              /> */}

            {products.length > 0 ? (
                <div className="carlosManda">
                    {products.slice(0,7).map((product) => {
                        return (
                            <div key={product.id}>
                                <ProductCard
                                    id={product.id}     
                                    name={product.name}
                                    image={product.image}
                                //   brand={product.species}
                                />
                            </div>
                        );
                    })}
                </div>
            ) : (
                <div>CARGANDO...</div>
            )}
        </div>
    );
}




// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import { bringProducts, searchCharacter } from "../../services/apiCalls";
// import { ProductCard } from "../../common/ProductCard/ProductCard";
// import { InputText } from "../../common/InputText/InputText";

// export const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [criteria, setCriteria] = useState("");

//   // useEffect(()=>{

//   //     if(products.length === 0){

//   //         //Me traes los productos porque ahora mismo no tengo N A D A

//   //         bringProducts()
//   //             .then(
//   //                 resultados => {
//   //                     setProducts(resultados.data.results)
//   //                 }
//   //             )
//   //             .catch(error => console.log(error));
//   //     }

//   // },[products]);

//   useEffect(() => {
//     //Voy a aplicar mi proceso de debounce....

//     if (criteria !== "") {
//       const bring = setTimeout(() => {
//         //El siguiente bloque es la búsqueda en si
//         searchCharacter(criteria)
//           .then((resultado) => {
//             console.log("he buscado");
//             setProducts(resultado.data.results);
//           })
//           .catch((error) => console.log(error));
//         ///////////////////////////////////////////
//       }, 350);

//       return () => clearTimeout(bring);

//     } else if (criteria === "") {
//       bringProducts()
//         .then((resultados) => {
//           setProducts(resultados.data.results);
//         })
//         .catch((error) => console.log(error));
//     }
//   }, [criteria]);

//   const inputHandler = (e) => {
//     setCriteria(e.target.value);
//   };

//   return (
//     <div className="homeDesign">
//       {/* Nuestro componente input siempre se encuentra visible */}
//       {/* type, design, placeholder, name, functionHandler, onBlurFunction */}
//       <InputText
//         type={"text"}
//         design={"normalInput"}
//         placeholder={""}
//         name={"criteria"}
//         functionHandler={inputHandler}
//         onBlurFunction={() => {}}
//       />

//       {products.length > 0 ? (
//         <div className="carlosManda">
//           {products.slice(0, 20).map((product) => {
//             return (
//               <div key={product.id}>
//                 <ProductCard
//                   id={product.id}
//                   name={product.name}
//                   image={product.image}
//                   brand={product.species}
//                 />
//               </div>
//             );
//           })}
//         </div>
//       ) : (
//         <div>CARGANDO...</div>
//       )}
//     </div>
//   );
// };

