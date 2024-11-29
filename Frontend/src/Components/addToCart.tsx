import { IProduct } from "../Models/IProduct";

 export const addToCart = (product: IProduct) => {
    const storedCart = localStorage.getItem('cart');
    const cart = storedCart ? JSON.parse(storedCart) : [];

     
      const updatedCart = [...cart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      alert('Produkt tillagd i kundvagnen!');
   
  };