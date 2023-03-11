import React, { useContext, useState } from "react";
import productsArr from "../Products/Products";
import { productsArr2 } from "../Products/Products";
// import{productsArr, productsArr2} from "../Products/Products"
import { Col,Container, Row } from "react-bootstrap";
import CartContext from "../../Store/Cart-context";
import { Link } from "react-router-dom";
import classes from '../Cart/CartItem.module.css';
import axios from 'axios';
import AuthContext from "../../FireBaseAuthentication/auth-context";
const Store = (props) => {
  const cartcntx = useContext(CartContext);
  const authCntx = useContext(AuthContext);
  const [itemList, setItemExist] = useState(false);
  // {render an error modal using itemList}
  const addItemToCartHandler =(item)=>{
    const existingItemIndex = cartcntx.items.findIndex((itm)=>itm.id===item.id);
    if(existingItemIndex !== -1){
      setItemExist(true);
      window.alert("item already exixts in the cart");
      return;
    }
    cartcntx.addItem({
      id:item.id,
      title:item.title,
      price:item.price,
      amount:1
    });
    const totalAmount = cartcntx.totalAmount;
    const title = item.title;
    const price = item.price;
    const details = {
      title,
      price,
      totalAmount
    }
     console.log(title, price);
    // axios.post(`https://crudcrud.com/api/76dc3d78df924a208809d0a9e452f9a1/cartDetails/${authCntx.initialToken}`, details).then((res)=>{
    //   console.log(res);
    // }).catch((err)=>{
    //   console.log(err+'error in post');
    // })
  }
  return (
      <>
      
      
    <Container>
      <Row className="justify-content-center">
        {productsArr.map((item) => (
          
          <div style={{ width: "30rem" }}>
            <Container
              className="justify-content-center"
              style={{ width: "30rem" }}
            >
              <Col style={{ width: "25rem" }} className="container-sm d-flex justify-content-center" >
                <Container style={{borderRadius:"10px"}}className="mt-3  border border-3 shadow-sm ">
               <Link to={`/store/${item.id}`}>
               <h3 className="text-center mt-2" style={{color:"Black"}}>{item.title}</h3>
               </Link >
                  <div className="d-flex justify-content-center align-items-center">
                    <img style={{width:"15rem"}}className="m-3 img-fluid"  src={item.imageUrl} alt="images"></img>
                  </div>
                <div style={{width:"20rem"}}className="row text-center mt-2">
                  <p style={{fontSize:"1.7rem", fontWeight:"bold"}}className="col text-center d-flex justify-content-center">Rs{item.price}</p>
                  <button
                    type="button"
                    style={{borderRadius:"10px"}}
                    className="col btn btn-primary mb-2"  onClick={addItemToCartHandler.bind(null,item)}
                  >
                    Add
                  </button>
                </div>
                </Container>
              </Col>
            </Container>
          </div>
        ))}
      </Row>
      <br />
    <Container style={{height:"5rem",color:"red"}}>
           <section>
                 <div style={{height:"50px", color:"Black",width:"100%",fontSize:"40px"}} className="d-flex justify-content-center align-items-center">MERCH</div>
           </section>
    </Container>
    </Container>
    <Container>
      <Row className="justify-content-center">
        {productsArr2.map((item) => (
          
          <div style={{ width: "30rem" }}>
            <Container
              className="justify-content-center"
              style={{ width: "30rem" }}
            >
              <Col style={{ width: "25rem" }} className="container-sm d-flex justify-content-center" >
                <Container style={{borderRadius:"10px"}}className="mt-3  border border-3 shadow-sm ">
               <Link to={`/store/${item.id}`}>
               <h3 className="text-center mt-2" style={{color:"Black"}}>{item.title}</h3>
               </Link >
                  <div className="d-flex justify-content-center align-items-center">
                    <img style={{width:"15rem"}}className="m-3 img-fluid"  src={item.imageUrl} alt="images"></img>
                  </div>
                <div style={{width:"20rem"}}className="row text-center mt-2">
                  <p style={{fontSize:"1.7rem", fontWeight:"bold"}}className="col text-center d-flex justify-content-center">Rs{item.price}</p>
                  <button
                    type="button"
                    style={{borderRadius:"10px"}}
                    className="col btn btn-primary mb-2"  onClick={addItemToCartHandler.bind(null,item)}
                  >
                    Add
                  </button>
                </div>
                </Container>
              </Col>
            </Container>
          </div>
        ))}
      </Row>
      <br />
      
      
    </Container>
    
      </>
  );
};

export default Store;
