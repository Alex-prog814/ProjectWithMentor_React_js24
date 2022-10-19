import React, { useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const { addProduct } = useProducts();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    picture: '',
    type: ''
  });

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
      <input type="text" name="name" placeholder="Name" onChange={handleInp} value={product.name} /><br/>
      <input type="text" name="description" placeholder="Description" onChange={handleInp} value={product.description} /><br/>
      <input type="number" name="price" placeholder="Price" onChange={handleInp} value={product.price} /><br/>
      <input type="text" name="picture" placeholder="Picture" onChange={handleInp} value={product.picture} /><br/>
      <input type="text" name="type" placeholder="Type" onChange={handleInp} value={product.type} /><br/>
      <button onClick={() => {
        addProduct(product);
        navigate('/products');
      }}>Add Product</button>
    </>
  )
}

export default AddProduct