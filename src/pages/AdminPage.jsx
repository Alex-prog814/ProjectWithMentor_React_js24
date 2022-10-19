import React from 'react';
import AddProduct from '../components/products/AddProduct';

const AdminPage = () => {
  return (
    <>
      <h2>Admin Page</h2>
      <h3>If you are not admin, please leave!</h3>
      <AddProduct />
    </>
  )
}

export default AdminPage