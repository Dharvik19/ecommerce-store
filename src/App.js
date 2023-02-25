import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Pages/Store';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import CartProvider from './Store/CartProvider';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import {  Route, Routes} from 'react-router-dom';
function App() {

    const[cartIsShown, setCartIsShow] = useState(false);
    const showCartHandler =()=>{
      setCartIsShow(true);
    }
    const hideCartHandler =()=>{
      setCartIsShow(false);
    } 
  return (
      <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
       
       {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
       
       <Routes>
       <Route exact path='/' element={<Store />}></Route>
       <Route path='/home' element={<Home />}></Route>
       <Route path='/store' element={<Store />}></Route>
       <Route path='/about' element={<About />}></Route>
       </Routes>
       
       </CartProvider>
     
   
  );
}

export default App;