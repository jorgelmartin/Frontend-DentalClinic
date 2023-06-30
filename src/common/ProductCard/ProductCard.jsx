import { useFetchProducts } from '../../../hooks/useFetchProdutcs';
import './ProductCard.css'

export const ProductCard = () => {
    const products = useFetchProducts();


    // Verificar si products tiene datos válidos
    if (!Array.isArray(products)) {
        return <div>Loading...</div>;
    }

    // Opcional: Si deseas también verificar si el array está vacío
    if (products.length === 0) {
        return <div>No products available.</div>;
    }



    return (
        <>
            <div className="productCardContainer">
            {products.map((product) => (
                <div key={product.id} className="productCardDesign">
                    <img src={product.image} alt={product.name} />
                    <h1>{product.name}</h1>
                </div>
            ))}
        </div>
        </>
    );
};