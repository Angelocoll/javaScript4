import { IProduct } from '../Models/IProduct';
import { CartItem } from './CartItems';

interface CartListProps {
  cart: IProduct[];
  removeFromCart: (productId: string) => void;
}

export const CartList: React.FC<CartListProps> = ({ cart, removeFromCart }) => {

 //den vägrar känna igen att pris är ett number
  const calculateTotal = (): number => {
    return cart.reduce((total, product) => {
      const price = typeof product.pris === 'number' ? product.pris : Number(product.pris);
      return total + price;
    }, 0);
  };
  const Buy = () =>{
    alert("Demo versionen stödjer inte slutköp av produkter")
  }
  
  const totalAmount = calculateTotal();

  return (
    <div>
      <ul>
        {cart.map((product) => (
          <CartItem key={product.id} product={product} removeFromCart={removeFromCart} />
        ))}
      </ul>
      
      <div className="shop">
        <h3>Payment</h3>
        {cart.map((product) => (
          <p>{product.name} - {product.pris} kr</p>
        ))}
        <p className='endprice'>Slutsumma: {totalAmount} kr</p>
        <button onClick={Buy} className='köp-knapp'>Genomför köp</button>
      </div>
    </div>
  );
};


