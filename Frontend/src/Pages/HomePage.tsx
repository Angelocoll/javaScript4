import { useState } from 'react';
import { ProductList } from '../Components/ProductList';
import { Fetcher } from '../Components/Fetcher';
import { IProduct } from '../Models/IProduct';

export const HomePage = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);

  return (
    <>
      <Fetcher endpoint='' onSuccess={setProducts} />
      {products ? <ProductList products={products} /> : <div>No Data yet</div>}
    </>
  );
};



