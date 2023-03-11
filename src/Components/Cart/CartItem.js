import React,{useContext}from "react";
import { Button } from "react-bootstrap";
import classes from './CartItem.module.css';
import CartContext from "../../Store/Cart-context";
const CartItem=(props)=>{
 const cartctx = useContext(CartContext);
 const IncreaseAndDecrease = cartctx.incAndDecFun ;    
 return( 
        <li  className="cart-item m-2" >
          <div className="row">
            
          <h3 className="col">{props.title}</h3>
            <h4 className={classes.price}>Rs{props.price}</h4>
            <span>{props.amount}</span>
            {/* <div className="col d-grid gap-2 d-md-block" style={{width:"10px"}}>
                  <button  className='btn btn-outline-dark btn-sm m-2' onClick={() => IncreaseAndDecrease(props.item, -1)}>
                    -
                  </button>
                  <button  className='btn btn-outline-dark btn-sm m-2' onClick={() => IncreaseAndDecrease(props.item, +1)}>
                    +
                  </button>
            </div> */}
                 
            <Button
            style={{width:"7rem"}}
              onClick={props.onRemove}
              type="button"
              className=" btn btn-danger col-2 btn-sm m-3"
            >
              remove item
            </Button>
            <Button>place Order</Button>
            <span >{props.amount} </span>
          </div>
        </li>
      )
}

export default CartItem;