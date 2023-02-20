import React,{Modal} from "react";
import productsArr from "../Products/Products";
import Header from "../Layout/Header";
const Cart = (props) => {
  return (
      <>
        {productsArr.map((item) => (
          <>
          <li>{item.title}</li>
          <li>{item.imageUrl}</li>
          <li>{item.price}</li>
          </>
        ))}
        <br />
        <span>Total Amount: Rs. 0</span>
      </>
     
  );
};

export default Cart;
