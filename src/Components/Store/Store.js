import React from "react";
import productsArr from "../Products/Products";
import { Col, Container, Row } from "react-bootstrap";
const Store = (props) => {
  
  return (
    <Container>
      <div >
      <Row>
      {productsArr.map((item) => (
        <Container style={{width:"30rem"}}>
          <Col style={{width:"20rem"}} className="container-sm">
                <h3 className="">{item.title}</h3>
              <img style={{alignItems:"centre"}}src={item.imageUrl}></img>
              <div className="row mt-2">
                <p className="col">Rs{item.price}</p>
                <button type="button" class="btn btn-primary btn-sm col float-right">Add</button>
              </div>
          </Col>
      
        </Container>
      ))}
      </Row>
      <br />
      <span>Total Amount: Rs. 0</span>
    </div>
    </Container>
  );
};

export default Store;

