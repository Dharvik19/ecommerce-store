import React, { useState } from "react";
import productsArr from "../Products/Products";
import { productsArr2 } from "../Products/Products";
import { Col, Container, Row, Button } from "react-bootstrap";
import { cartActions } from "../../Store/CartSlice";
import { useDispatch,useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from './Store.module.css'

const Store = (props) => {
  
  const cart = useSelector((state)=>state.cart.items);
  const dispatch = useDispatch();
  // {render an error modal using itemList}
  const [clicked, setIsClicked] = useState(false);
  const heartHandler =()=>{
    setIsClicked((prevState)=>prevState = !prevState);
  }
  return (
    <Container style={{marginTop:"4rem"}}>
      <Container className="mt-2" style={{ height: "5rem" }}>
        <section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "7rem" }}
        >
          <div>
            <h1 style={{borderBottom:"2px solid #ff4c76",letterSpacing:"5px"}}>ALBUMS</h1>
          </div>
        </section>  
      </Container>
      <section className={classes["articles"]}>{
        productsArr.map((item)=>{
          return(
            
            <div className={classes["article"]}>
              <div className={classes["article-wrapper"]}>
                <figure>
                  <img src={item.imageUrl} alt="" />
                </figure>
                <div class={classes["article-body"]}>
                  <Link to={`/store/${item.title}`}><h2>{item.title}</h2> </Link>
                  <p>$ {item.price}</p>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  </p>
                
                    <button className={classes["actions"]} onClick={()=> 
                            dispatch(cartActions.addToCart({
                              id:item.id,
                              title: item.title,
                              price:item.price
                            }))
                          }>Add</button>
                </div>
              </div>
            </div>
          
          )
        })
      }</section>
    
      <Container className="mt-2" style={{ height: "5rem" }}>
        <section
          className="d-flex justify-content-center align-items-center"
          style={{ height: "7rem" }}
        >
          <div>
          <h1 style={{borderBottom:"2px solid #ff4c76",letterSpacing:"5px"}}>MERCH</h1>
          </div>
        </section>
      </Container>
      <section class={classes["articles"]}>{
        productsArr2.map((item)=>{
          return(
            
            <div className={classes["article"]}>
              <div className={classes["article-wrapper"]}>
                <figure>
                  <img src={item.imageUrl} alt="" />
                </figure>
                <div class={classes["article-body"]}>
                <Link to={`/store/merch/${item.title}`}><h2>{item.title}</h2> </Link>
                <p>$ {item.price}</p>
                  <p>
                    Curabitur convallis ac quam vitae laoreet. Nulla mauris ante, euismod sed lacus sit amet, congue bibendum eros. Etiam mattis lobortis porta. Vestibulum ultrices iaculis enim imperdiet egestas.
                  </p>
                  
                    <button className={classes["actions"]} onClick={()=> 
                            dispatch(cartActions.addToCart({
                              id:item.id,
                              title: item.title,
                              price:item.price
                            }))
                          }>Add</button>
                          
                </div>
              </div>
            </div>
          
          )
        })
      }</section>
      
    </Container>
  );
};

export default Store;
