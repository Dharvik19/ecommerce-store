import React, { useContext, useState } from "react";
import productsArr from "../Products/Products";
import { Col, Card,Container, Row } from "react-bootstrap";
import CartContext from "../../Store/Cart-context";
import classes from '../Cart/CartItem.module.css';
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
const Store = (props) => {
  const cartcntx = useContext(CartContext);
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
      price:item.price
    });
    
  }
  return (
      <>
      
      <section>
        <Header></Header>
        </section>
    <Container>
      <Row className="justify-content-center">
        {productsArr.map((item) => (
          <div style={{ width: "30rem" }}>
            <Container
              className="justify-content-center"
              style={{ width: "30rem" }}
            >
              <Col style={{ width: "25rem" }} className="container-sm d-flex justify-content-center" >
                <Container className="mt-3 rounded border border-3 border-dark ">
                <h3 className="text-center mt-2" style={{color:"Black"}}>{item.title}</h3>
                  <div className="d-flex justify-content-center align-items-center">
                    <img style={{width:"15rem"}}className="m-3 img-fluid"  src={item.imageUrl} alt="images"></img>
                  </div>
                <div style={{width:"20rem"}}className="row text-center mt-2">
                  <p style={{fontSize:"1.7rem", fontWeight:"bold"}}className="col text-center d-flex justify-content-center">Rs{item.price}</p>
                  <button
                    type="button"
                    
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
      <div className="d-flex justify-content-center">
        <span style={{fontSize:"1.5rem"}} className={classes.summary}>Total Amount: </span>
        <span className={classes.amount}>Rs. {cartcntx.totalAmount}</span>
      </div>
      
    </Container>
    <Footer></Footer>
      </>
  );
};

export default Store;
