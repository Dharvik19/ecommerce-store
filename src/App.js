import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Pages/Store';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import CartProvider from './Store/CartProvider';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import {  Route} from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';

const API_URl = 'https://ecommercewebsite-9adbf-default-rtdb.firebaseio.com/contactus.json';
function App() {

    const[cartIsShown, setCartIsShow] = useState(false);
    const showCartHandler =()=>{
      setCartIsShow(true);
    }
    const hideCartHandler =()=>{
      setCartIsShow(false);
    } 

    const onPostDataHandler = async (user)=>{
      await fetch(API_URl, {
        method: 'POST',
        body: JSON.stringify(user),
        headers:{
          'Content-Type': 'application/json'
        }
      });
      console.log(user);
    }
  return (
      <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
       
       {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
       
      <Route path='/home'><Home /></Route>
      <Route path='/store'><Store /></Route>
      <Route path='/about'><About /></Route>
      <Route path='/contactUs'><ContactUs onPost={onPostDataHandler}/></Route>
      <Footer />
       </CartProvider>
     
   
  );
}

export default App;