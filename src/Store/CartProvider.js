import React,{useState, useEffect} from "react";
import CartContext from "./Cart-context";
import axios from 'axios';
const CartProvider = (props) => {
  if (!localStorage.getItem("email")) {
    localStorage.setItem("email", "");
  }
  let email =localStorage.getItem('email').replace("@", "").replace(".", "");

  console.log(email);
  const [cart, setCart] = useState([]);

  const addItemToCartHandler = (item) => {
    let arr = [...cart];

    let isPresent = false;
    cart.forEach((product,index) => {
      if (item.title === product.title) {
        arr[index].amount = Number(item.amount) + Number(arr[index].amount)
        isPresent = true;
        let {_id,...updateData}= arr[index];
        console.log(_id);
        axios 
        .put(
          `https://crudcrud.com/api/85a4feba074f4160b3eed37cc1c985a5/cart${email}/${arr[index]._id}` ,updateData
        ).then((res)=>{
          console.log(res.data,'Successfull')
        })
        .catch((error)=>{
          alert(error)
        })
      }
    });
    if (isPresent===false) {
      axios.post(
        `https://crudcrud.com/api/85a4feba074f4160b3eed37cc1c985a5/cart${email}`,{...item,amount:1})
    .then((res)=>{
      arr.push(res.data);
      console.log(res.data,"Successfull")
      setCart(arr)
    })
     .catch((error)=>{
      alert(error)
     })
    }
    // setCart([...cart, item]);

  };
  const removeItemHandler = (item)=>{
    let removeitem = cart.findIndex((item)=>item.id===item);
  
    const arr = [...cart];
    
    const updateItems = arr.splice(removeitem,1)
    console.log(removeitem,arr,updateItems)
    setCart(arr)
    }
        
    const IncreaseAndDecrease = (item, d) => {
      let ind = -1;
      cart.forEach((data, index) => {
        if (data.title === item.title) {
          ind = index;
        }
      });
      const tempArr = cart;
      tempArr[ind].amount = Number(tempArr[ind].amount) + d;
      if (tempArr[ind].amount === 0) {
        tempArr[ind].amount = 1;
      }
      setCart([...tempArr]);
    };
    useEffect(()=>{
      axios
      .get(
        `https://crudcrud.com/api/85a4feba074f4160b3eed37cc1c985a5/cart${email}`
      ).then((res)=>{
          setCart(res.data)
      })
    },[])
  const cartcontext = {
    items: cart,
    incAndDecFun :IncreaseAndDecrease,
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartcontext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
