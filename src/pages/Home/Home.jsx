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