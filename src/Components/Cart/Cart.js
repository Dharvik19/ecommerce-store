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
              <div className="row">
                <p className="col">Rs{item.price}</p>
                <button type="button" class="btn btn-primary btn-sm col">
                  remove
                </button>
              </div>
            </div>
          </>
        ))}
      </div>
      <button onClick={props.onClose} type="button" class="btn btn-danger btn-sm col">
        remove
      </button>
    </div>
  );
};

export default Cart;
