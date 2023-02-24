import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Pages/Store';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import CartProvider from './Store/CartProvider';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
function App() {

  const router = createBrowserRouter([
    {path: '/' , element: <Store/>},
    {path: '/home' , element: <Home/>},
    {path: '/about' , element: <About/>},
    {path: '/store', element:<Store/>}
  ])
    const[cartIsShown, setCartIsShow] = useState(false);
    const showCartHandler =()=>{
      setCartIsShow(true);
    }
    const hideCartHandler =()=>{
      setCartIsShow(false);
    } 
  return (
    <RouterProvider router={router}>
      <h1>Lets get started </h1>
      <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
       
       <Store></Store>
       {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
       </CartProvider>
      <Footer></Footer>
    </RouterProvider>
  );
}

export default App;
