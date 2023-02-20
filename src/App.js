import React,{useState} from 'react';
import Header from './Components/Layout/Header';
import Store from './Components/Store/Store';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
function App() {
    const[cartIsShown, setCartIsShow] = useState(false);
    const showCartHandler =()=>{
      setCartIsShow(true);
    }
    const hideCartHandler =()=>{
      setCartIsShow(false);
    }
  return (
    <div className="App">
      <h1>Lets get started </h1>
      <Header onShowCart={showCartHandler}></Header>
       <Store></Store>
       {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Footer></Footer>
    </div>
  );
}

export default App;
