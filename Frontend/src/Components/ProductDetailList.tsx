import { IProduct } from '../Models/IProduct';
import { addToCart } from './addToCart';

export const ProductDetail = ({ product }: { product: IProduct }) => {


  return (
    <div className='cont'>
      <div>
        <img src={product.image} alt={product.name} />
      </div>
      <div>
        
        <h1>{product.name}</h1>
        <p>{product.beskrivning} Storage: {product.amountInStorage} st</p>
        <p>Price: {product.pris} kr</p>
        <button onClick={() => addToCart(product)}>Köp</button>
        <button className="cart" onClick={() => window.location.href = '/Cart'}>🛒</button>
      </div>
    </div>
  );
};
