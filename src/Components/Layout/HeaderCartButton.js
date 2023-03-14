import React,{useContext, useState, useEffect} from "react";
import Button from "react-bootstrap/esm/Button";
import CartContext from "../../Store/Cart-context";
import AuthContext from "../../FireBaseAuthentication/auth-context";
import axios from 'axios';
const HeaderCartButton=(props)=>{
   const cartcntx =  useContext(CartContext);
   const authCtx = useContext(AuthContext);
   const [quantity, setQuantity] = useState(0);
   if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
  let email =localStorage.getItem('email').replace("@", "").replace(".", "");
   
    const [data,setData] = useState(0);
    let len =0;
   useEffect(()=>{
    axios.get(`https://crudcrud.com/api/85a4feba074f4160b3eed37cc1c985a5/cart${email}`).then((res)=>{
       len = res.data.length;
      console.log(res.data.length);
      setData(len);
    })
},[])
useEffect(()=>{
  setQuantity(0 || cartcntx.items.length);
},[cartcntx.items]);

   const count = cartcntx.totalAmount;
 //get data from axios 
    return(
         <>
            {authCtx.isLoggedIn && <Button onClick={props.onClick} style={{width:"7rem",padding:"0 1px"}}className="d-flex  justify-content-around btn btn-light">
                <div style={{width:"1.8rem"}} className="d-flex justify-content-center">
                  <img style={{width:"24px",height:"34px",margin:"0 0.3rem",stroke:"#FFFFFF"}} className="col" src="./images/shopping-cart.svg"></img>  
                </div>
                <div style={{fontSize:"1.2rem"}}>
                  cart
                </div>
                
                <div style={{color: 'Black',fontSize:"1.2rem"}}>{data}</div>
            </Button>}
          </>  
        
    )
}
export default HeaderCartButton