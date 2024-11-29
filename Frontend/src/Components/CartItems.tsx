import { IProduct } from '../Models/IProduct';

interface CartItemProps {
  product: IProduct;
  removeFromCart: (productId: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ product, removeFromCart }) => {
  return (
    <div className='cart-card'>
    <li key={product.id}>
      <img src={product.image} alt={product.name} />
      <div>
      <h2>{product.name}</h2>
      <p>{product.beskrivning}</p>
      <p>Price: {product.pris} kr</p>
      <button className='remove' onClick={() => removeFromCart(product.id)}>
       Ta bort
      </button>
      </div>
    </li>
    </div>
  );
};

export const CartEmptyMessage: React.FC = () => {
    return <p>Din varukorg är tom...</p>;
  };

  