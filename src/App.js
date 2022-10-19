import React from 'react';
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './MainRoutes';
import AuthContextProvider from './contexts/AuthContextProvider';
import ProductContextProvider from './contexts/ProductContextProvider';

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  )
}

export default App