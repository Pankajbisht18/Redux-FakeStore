import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectedProducts, removeSelectedProducts } from '../redux/actions/productActions';

const ProductDetail = () => {
    const product = useSelector((state) => state.product);
    const {image, title, price, category, description} = product
    const productId = useParams();
    const dispatch = useDispatch();


    const fetchProductsDetail = async () => {
        const respone = await axios.get(`https://fakestoreapi.com/products/${productId.id}`).catch(err => {
            console.log(err)
        });

        dispatch(selectedProducts(respone.data))
    }
    useEffect(()=>{
        if(productId.id && productId.id !== ''){
            fetchProductsDetail()
        }
        return () => {
            dispatch(removeSelectedProducts());
        }
    },[productId.id])
    return (
        <div className='container'>
            <div className='d-flex justify-content-evenly'>
                <div>
                    <img src={image} alt={title} className="fluid" style={{"width": "200px"}} />
                </div>
                <div className=''>
                    <h1>{title}</h1>
                    <h3>$ {price}</h3>
                    <p className='flex-fill'>{description}</p>
                    <small>{category}</small>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;