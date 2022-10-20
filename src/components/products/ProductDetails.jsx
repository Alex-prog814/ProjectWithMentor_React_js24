import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../contexts/ProductContextProvider';

const ProductDetails = () => {
  const { id } = useParams();
  const { getProductDetails, productDetails } = useProducts();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  return (
    <>
      {productDetails ? (
        <>
          <img src={productDetails.picture} alt="" width="200" height="200" />
          <h3>{productDetails.name}</h3>
          <h3>{productDetails.description}</h3>
          <h3>{productDetails.price}</h3>
          <h3>{productDetails.type}</h3>
        </>
      ) : (
        <h3>Loading...</h3>
      )}
    </>
  )
}

export default ProductDetails