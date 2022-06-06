import React, { useContext, useEffect } from 'react';
import { productContext } from '../../Context/ProductContext';
import "./ProductList.css"
import tag from "../../Media/img/tag.png"



const ProductList = () => {
    const { getProducts, products } = useContext(productContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div className='cards'>
            {products.map((item) => (

            
            <div className='card'>
                <div>
                    <img className='imgList' src={item.img} alt="card" />
                </div>
                <div className='card-text'>
                    <span className='card-title'>{item.title}</span>
                    <p className='card-desc'>{item.description}</p>
                </div>
                <div className='card-price'>
                    <img src={tag} alt="card-tag" />
                    <span className='card-price2'>{item.price}$</span>
                </div>
            </div>
            ))}
        </div>
    );
};

export default ProductList;