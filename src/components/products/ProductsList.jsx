import React, { useEffect, useState } from 'react';
import { useProducts } from '../../contexts/ProductContextProvider';
import ProductCard from '../products/ProductCard';
import { useSearchParams } from 'react-router-dom';

// for pagination
import Pagination from '@mui/material/Pagination';

// for filtration
import FilterProduct from './FilterProduct';

const ProductsList = () => {
  const { products, getProducts } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('q') || '');

  useEffect(() => {
    // console.log('Сработал юз эффект для местного состояния, утановка параметров запроса');
    setSearchParams({
      q: search
    });
  }, [search, ]);

  useEffect(() => {
    // console.log('Сработал юз эффект, который следит за изменением параметров запроса, вызвана функция получения всех продуктов(с параметрами запроса)');
    getProducts();
  }, [searchParams, ]);

  return (
    <div>
      <FilterProduct />
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."  />
      {products ? (
        products.map(item => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  )
}

export default ProductsList
