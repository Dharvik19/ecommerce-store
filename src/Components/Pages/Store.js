import React, { useContext, useState } from "react";
import productsArr from "../Products/Products";
import { Col, Container, Row } from "react-bootstrap";
import CartContext from "../../Store/Cart-context";
const Store = (props) => {
  const cartcntx = useContext(CartContext);
  const [itemList, setItemExist] = useState(false);

  const addItemToCartHandler =(item)=>{
    const existingItemIndex = cartcntx.items.findIndex((itm)=>itm.id===item.id);
    // if(existingItemIndex !== -1){
    //   setItemExist(true);
    //   return;

    // }
    cartcntx.addItem({
      id:item.id,
      title:item.title,
      price:item.price
    });
    
  }
  return (
      <>
      <section>
        <div style={{height:"50px", color:"white",width:"100%",fontSize:"40px"}} className="d-flex justify-content-center align-items-center bg-dark">THE GENERICS</div>
      </section>
    <Container>
      <Row className="justify-content-center">
        {productsArr.map((item) => (
          <div style={{ width: "30rem" }}>
            <Container
              className="justify-content-center"
              style={{ width: "30rem" }}
            >
              <Col style={{ width: "20rem" }} className="container-sm">
                <Container >
                <h3 className="">{item.title}</h3>
                <img  src={item.imageUrl} alt="images"></img>
                <div className="row mt-2">
                  <p className="col">Rs{item.price}</p>
                  <button
                    type="button"
                    class="btn btn-primary btn mb-2 float-end col" onClick={addItemToCartHandler.bind(null,item)}
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
      <span className=" d-flex  justify-content-center">
        Total Amount: Rs. 0
      </span>
    </Container>
      </>
  );
};

export default Store;
