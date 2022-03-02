import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    return (
        <>
            <div className='row'>
                {
                    products.map((product)=>{
                        return(
                            <div className='col-4 mt-4' key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <div className='card' style={{"widht":"18rem","height":"600px","cursor":"pointer"}}>
                                        <img src={product.image} alt={product.title} className="card-img-top" style={{"height":"400px"}} />
                                        <div className='card-body'>
                                            <p className='card-title'>
                                                {product.title}
                                            </p>
                                            <p className='card-text fw-bold'>
                                                $ {product.price}
                                            </p>
                                            <p className='card-text text-secondary'>
                                                {product.category}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                } 
            </div>
        </>
    );
};

export default ProductComponent;