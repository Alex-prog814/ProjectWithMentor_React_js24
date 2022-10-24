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
    setPage(1);
  }, [searchParams, ]);

  // pagination
  const [page, setPage] = useState(1);

  const itemsOnPage = 6;

  const count = Math.ceil(products.length / itemsOnPage);

  const handlePage = (e, p) => {
    setPage(p);
  };

  function currentData(){
    const begin = (page - 1) * itemsOnPage;
    const end = begin + itemsOnPage;
    return products.slice(begin, end);
  };

  return (
    <div>
      <input type="text" value={search} onChange={e => setSearch(e.target.value)} placeholder="Search..."  /><br />
      <FilterProduct />
      {products ? (
        currentData().map(item => (
          <ProductCard key={item.id} item={item} />
        ))
      ) : (
        <h3>Loading...</h3>
      )}
      <Pagination count={count} page={page} onChange={handlePage} />
    </div>
  )
}

export default ProductsList
