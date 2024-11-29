import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { IProduct } from '../Models/IProduct';
import { Fetcher } from '../Components/Fetcher';
import { ProductDetail } from '../Components/ProductDetailList';

export const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  return (
    <>
      <Fetcher endpoint={`/${id}`} onSuccess={setProduct}/>
      {product ? <ProductDetail product={product} /> : <div>No Data yet</div>}
    </>
  );
};


