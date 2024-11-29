import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import { MainLayout } from './Layouts/MainLayout';
import { HomePage } from './Pages/HomePage';
import { Product } from './Pages/ProductPage';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';
import { CartPage } from './Pages/CartPage';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/product/:id' element={<Product/>} />
      <Route path='/Cart' element={<CartPage/>} />
    </Route>
  )
);

const App = () => {
  return (
    <>
    <Header />
    <RouterProvider router={router} />
    <Footer/>
    </>
  )
};

export default App;