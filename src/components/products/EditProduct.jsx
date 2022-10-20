import React, { useState, useEffect } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate, useParams } from 'react-router-dom';


const EditProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } = useProducts();

  const [product, setProduct] = useState(productDetails);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);
  }, []);

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails, ]);

  const handleInp = e => {
    if(e.target.name === 'price'){
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value)
      };
      setProduct(obj);
    }else{
      let obj = {
        ...product,
        [e.target.name]: e.target.value
      };
      setProduct(obj);
    };
  };

  return (
    <>
    {product ? (
      <>
        <input type="text" name="name" placeholder="Name" onChange={handleInp} value={product.name} /><br/>
        <input type="text" name="description" placeholder="Description" onChange={handleInp} value={product.description} /><br/>
        <input type="number" name="price" placeholder="Price" onChange={handleInp} value={product.price} /><br/>
        <input type="text" name="picture" placeholder="Picture" onChange={handleInp} value={product.picture} /><br/>
        <input type="text" name="type" placeholder="Type" onChange={handleInp} value={product.type} /><br/>
        <button onClick={() => {
          saveEditedProduct(product);
          navigate('/products');
        }}>Save Changes</button>
    </>
    ) : (
      <h3>Loading...</h3>
    )}
    </>
  )
}

export default EditProduct