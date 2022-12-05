import React from 'react';
import './ProductCard.css';

const ProductCart = (props) => {
    const { title, imgUrl, price } = props.item;

    return (
        <div>
            <div className="single-product">
                <div className="product-img">
                    <img src={imgUrl} alt="" className="w-100" />
                </div>


                <div className="product-content">
                    <div className="rating text-center">
                        <span> <i className="ri-star-s-fill"></i> </span>
                        <span> <i className="ri-star-s-fill"></i> </span>
                        <span> <i className="ri-star-s-fill"></i> </span>
                        <span> <i className="ri-star-s-fill"></i> </span>
                        <span> <i className="ri-star-s-fill"></i> </span>
                    </div>

                    <h6>{title}</h6>

                    <div className="d-flex align-items-center justify-content-between">
                        <span className='price d-flex align-items-center'>Price:$<span>{price}</span> </span>
                        <span className='shopping-icon'><i className="ri-shopping-cart-fill"></i></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;