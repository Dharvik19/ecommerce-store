// import { useDispatch } from "react-redux";
import { cartActions } from "./CartSlice";

let email = '';
if(!localStorage.getItem('email')){
    localStorage.setItem('email', '');
}else{
   email = localStorage.getItem('email');
}
const regex = /[@.]/g;
const emailId = email.replace(regex,'');

console.log(emailId);
export const sendCartData=(cart)=>{
    return async ()=>{
        const sendData = async()=>{
           const response = await fetch(`https://ecommerce-web-49fb5-default-rtdb.firebaseio.com/cart/${emailId}.json`,{
            method : 'PUT',
            body : JSON.stringify(cart)
           });
           if(!response.ok){
            throw new Error("Sending Data Failed");
           }

        }
        try{
            await sendData();
        }catch(error){
            console.log(error);
        console.log(cart, "from cartActions")
        }
    }

}

export const getCartData =()=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch(`https://ecommerce-web-49fb5-default-rtdb.firebaseio.com/cart/${emailId}.json`);

            const data = await response.json();

            console.log(data, "From cart action fetch ");
        }

        try{
            const cartData = await fetchData();
            console.log(cartData,"try block");
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQantity: cartData.totalQantity
            }))
        }catch(error){
            console.log(error);
        }
    }
}

export const fetchCartData = ()=>{
    return async(dispatch)=>{
        const fetchData = async()=>{
            const response = await fetch(`https://ecommerce-web-49fb5-default-rtdb.firebaseio.com/cart/${emailId}.json`);
            if(!response.ok){
                throw new Error("fetching failed ");
            }
            const data = await response.json();
            console.log(data);
            return data;
        }
        try{
          const cartData = await  fetchData();
          dispatch(cartActions.replaceCart({
            items:cartData.items|| [],
            totalQuantity: cartData.totalQuantity || 0,

          }))
   }catch(error){
    console.log(error);
   }
    }

}