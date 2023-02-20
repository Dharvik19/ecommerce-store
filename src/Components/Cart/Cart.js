import React from "react";
import productsArr from "../Products/Products";
const Cart = (props) => {
  
  return (
    <div>
      <div className="col-2">
      {productsArr.map((item) => (
        <>
          <div className="container-sm">
                <p className="">{item.title}</p>
              <img src={item.imageUrl}></img>
              <div className="row">
                <p className="col">Rs{item.price}</p>
                <button type="button" class="btn btn-primary btn-sm col">Add</button>
              </div>
          </div>
        </>
      ))}
      </div>
      <br />
      <span>Total Amount: Rs. 0</span>
    </div>
  );
};

export default Cart;
