import { useEffect, useState } from 'react';
import { IProduct } from '../Models/IProduct';
import { CartEmptyMessage } from '../Components/CartItems';
import { CartList } from '../Components/CartList';

export const CartPage: React.FC = () => {
  const [cart, setCart] = useState<IProduct[]>([]);

 
  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const removeFromCart = (productId: string) => {
    const productIndex = cart.findIndex((product) => product.id === productId);
    if (productIndex !== -1) {
      const updatedCart = [
        ...cart.slice(0, productIndex),   
        ...cart.slice(productIndex + 1),  
      ];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCart(updatedCart);
    }
  };
  

  return (
    <div className='cart-page'>
      {cart.length === 0 ? (
        <CartEmptyMessage />
      ) : (
        <CartList cart={cart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

