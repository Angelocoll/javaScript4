import { IProduct } from '../Models/IProduct';

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <div key={product.id}>
        <li>
          <img 
            src={product.image} 
            alt={product.name} 
            onClick={() => window.location.href = `/product/${product.id}`} 
          />
          <h3>{product.name}</h3>
          <p>{product.pris} kr</p>
        </li>
        </div>
      ))}
    </ul>
  );
};
