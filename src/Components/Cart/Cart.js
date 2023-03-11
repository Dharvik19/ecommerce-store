import React,{useContext, useEffect, useState} from "react";
import classes from './CartItem.module.css'
import CartItem from "./CartItem";
import Modall from "../UI/Modal";
import CartContext from "../../Store/Cart-context";
import AuthContext from "../../FireBaseAuthentication/auth-context";
const Cart = (props) => {
  const cartcntx = useContext(CartContext);
  const [price, setPrice] = useState(0);
  const priceHandler = () => {
    let ans = 0;
    cartcntx.items.map((item) => (ans = ans + Number(item.amount * item.price)));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
  const [data, setData] = useState([]);
  const authCntx = useContext(AuthContext);
 
  const hasItems = cartcntx.items.length > 0;
  const ITemRemoveHandler = (id) => {
    const arr = cartcntx.items.filter((item) => item.title != id);
    cartcntx.removeItem(arr);
  };
  // useEffect(()=>{
  //   axios.get(`https://crudcrud.com/api/76dc3d78df924a208809d0a9e452f9a1/cartDetails/${authCntx.initialToken}`).then((res)=>{
  //     console.log(res.data);
  //     setData(res.data);
  //   })
// },[])
  const cartItems = (<ul className={classes['cart-items']}>{cartcntx.items.map((itm) =>(<CartItem key={itm.id}  title={itm.title} price={itm.price} amount={itm.totalAmount} onRemove={ITemRemoveHandler.bind(null,itm.title)}/>))}</ul>);
  // const cartItems = (<ul className={classes['cart-items']}>{data.map((itm) =>(<CartItem key={itm.id}  title={itm.title} price={itm.price} amount={itm.totalAmount} onRemove={cartItemRemoveHandler.bind(null,itm.id)}/>))}</ul>);

  return (
   
    <Modall>
      <div className={classes['cart-items']}>
        <span style={{fontSize:"2.4rem"}} className=" d-flex justify-content-center">Cart</span>
        {!hasItems && <h2>Cart is Empty, please Add Something</h2>}
        {/* <div className="d-flex justify-content-center">
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-left ">Item</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Price</div>
            <div style={{fontSize:"1.8rem"}} className="col d-flex justify-content-center">Quantity</div>
        </div> */}
      </div>
      {cartItems}
      <div className="px-2 d-flex justify-content-center">
                <span style={{fontSize:"1.5rem",fontWeight:"bold"}}>Total Amount: </span>
                <span style={{fontSize:"1.5rem"}} > Rs. {price}</span>
            </div>
      <button
        onClick={props.onClose}  
        type="button"
        className=" btn btn-danger  btn m-3"
      >
        Close
      </button>
    </Modall>

  );
};

export default Cart;
