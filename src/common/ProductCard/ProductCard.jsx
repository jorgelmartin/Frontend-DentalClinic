import React from 'react';
import './ProductCard.css';

export const ProductCard = ({image, name, species, id}) => {

    // useEffect(()=>{
    //     console.log(image)
    // },[]);

    const notFound = `https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png`;
     return (
         <div className='productCardDesign'>
            <div className="imageDesign">
                <img className="pictureDesign" src={image !== "" ? image : notFound} alt={id} />
            </div>
            <div className="cardText">{name}</div>
            <div className="cardText">{species}</div>
         </div>
     )
}