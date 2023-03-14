import React,{useState, useContext} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Pages/Store';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
import CartProvider from './Store/CartProvider';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import { Redirect, Switch, Route} from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import ProductDetails from './Components/Pages/ProductDetails';
import Login from './Components/Pages/Login';
import AuthContext from './FireBaseAuthentication/auth-context';
import AuthProvider from './FireBaseAuthentication/AuthProvider';
const API_URl = 'https://ecommercewebsite-9adbf-default-rtdb.firebaseio.com/contactus.json';
function App() {
  const authCtx = useContext(AuthContext); 
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
    <AuthProvider>
      <CartProvider>
      <Header onShowCart={showCartHandler}></Header>
       
       {  authCtx.isLoggedIn && cartIsShown  && <Cart onClose={hideCartHandler}></Cart>}
       <Switch>
        <Route exact path='/'>
          <Redirect to='/login' />
        </Route>
        
        {authCtx.isLoggedIn && <Route path='/home'><Home /></Route>}
        {authCtx.isLoggedIn && <Route exact path='/store'><Store /></Route>}
        <Route path='/about'><About /></Route>
        <Route path='/contact-Us'><ContactUs onPost={onPostDataHandler} /></Route>
        <Route path='/login'><Login/></Route>
        <Route path='/store/:productId'><ProductDetails /></Route>
        <Route path='*'> <Redirect to='/'/></Route>
      </Switch>
      <Footer />
       </CartProvider>
       </AuthProvider>
   
  );
}

export default App;