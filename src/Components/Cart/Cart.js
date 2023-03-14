import React,{useContext, useEffect, useState} from "react";
import Classes from './Cart.module.css'
import {Card, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import CartHeader from "./CartHeader";
import axios from 'axios';
const Cart = (props) => {
  let email = localStorage.getItem('email').replace(".","").replace("@","")
  const cartctx = useContext(CartContext);
  const [price, setPrice] = useState(0);
    
  

  const priceHandler = () => {
    let ans = 0;
    cartctx.items.map((item) => (ans = ans + item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
  const ITemRemoveHandler = (item) => {
    // const arr = cartctx.items.filter((item) => item.title != item.title);
    cartctx.removeItem(item);
     const cartid = item._id 
     console.log(cartid)
    axios
    .delete(  `https://crudcrud.com/api/85a4feba074f4160b3eed37cc1c985a5/cart${email}/${cartid}`)
  };
  const IncreaseAndDecrease = cartctx.incAndDecFun;
  return (
    <Modal>
      <div>
        {/* <CloseButton onClose={props.onclosebutton}></CloseButton> */}
        <Card>
          <Card.Title style={{ textAlign: "center" }}>
            <h1>CART</h1>
          </Card.Title>
          <CartHeader />

          {cartctx.items.map((item) => (
            <div className="row"key={item.title}>
              <div>
                <div style={{ display: "inline-block" }}>
                  <Card style={{width:"9rem", margin:"2rem", justifyContent:"center"}}>
                    <img style={{width:"7rem"}} src={item.imageUrl} alt="img" ></img>

                    <b>
                      <span className={Classes.title}>{item.title}</span>
                    </b>
                  </Card>
                </div>

                <b>
                  <span className={Classes.price}>Price {item.price}</span>

                  <span className={Classes.quantity}>{item.amount} </span>
                  <button
                    className={Classes.button}
                    onClick={() => IncreaseAndDecrease(item, -1)}
                  >
                    -
                  </button>
                  <button
                    className={Classes.button}
                    onClick={() => IncreaseAndDecrease(item, +1)}
                  >
                    +
                  </button>
                </b>
                <Button
                  className=""
                  onClick={() => ITemRemoveHandler(item)}
                  variant="danger"
                >
                  REMOVE
                </Button>
              </div>

              <hr></hr>
            </div>
          ))}
        </Card>
        <div style={{ margin: " 1rem  " ,float:"right" }}>
          <span>
            <h5>TOTAL </h5>
            <span>{price}Rs.</span>
          </span>
        </div>
        <Button
        onClick={props.onClose}  
        type="button"
        className=" btn btn-danger  btn"
        style={{ margin: "auto " }}
      >Close</Button>
        <Button variant="info" style={{ margin: " 2rem  " }}>
          PURCHASE
        </Button>
      </div>
    </Modal>
  );
};
export default Cart;

