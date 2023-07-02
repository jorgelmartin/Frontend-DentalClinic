import { useFetchProducts } from '../../../hooks/useFetchProdutcs';
import './ProductCard.css'

export const ProductCard = () => {
    const products = useFetchProducts();

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