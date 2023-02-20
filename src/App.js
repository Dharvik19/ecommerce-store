import './App.css';
import Header from './Components/Layout/Header';
import Button from 'react-bootstrap/Button';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Footer';
function App() {
 
  return (
    <div className="App">
      <h1>Lets get started </h1>
      <Header></Header>
      <Cart></Cart>
      <Footer></Footer>
    </div>
  );
}

export default App;
