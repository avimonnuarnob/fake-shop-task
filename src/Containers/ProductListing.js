import React, { useCallback, useEffect } from 'react';
import ProductComponent from './ProductComponent';
import { setProducts } from '../Redux/Action/ProductActions';
import { useDispatch } from 'react-redux';

const ProductListing = () => {
  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const mydata = await response.json();
      dispatch(setProducts(mydata));
    } catch (error) {
      console.log(`error is : ${error}`);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <div className='ui grid container'>
        <ProductComponent />
      </div>
    </>
  );
};

export default ProductListing;
