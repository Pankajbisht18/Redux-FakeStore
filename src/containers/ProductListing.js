import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import { setProducts } from '../redux/actions/productActions';

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchProducts = async () => {
        const respone = await axios.get("https://fakestoreapi.com/products").catch((err)=>{
            console.log(err);
        })
        dispatch(setProducts(respone.data))
    }
    useEffect(()=>{
        fetchProducts();
    },[])
    console.log(products)
    return (
        <div className='ui grid container mt-5'>
            <ProductComponent />
        </div>
    );
};

export default ProductListing;