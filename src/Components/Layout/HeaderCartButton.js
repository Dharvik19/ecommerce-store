import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import { useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import classes from './headerCartButtn.module.css';

const HeaderCartButton = (props) => {
  let totalQuantity;
  totalQuantity = useSelector((state) => state.cart.items.length);

  return (
    <>
      {/* { <Button onClick={props.onClick} style={{width:"7rem",padding:"0 1px"}}className="d-flex  justify-content-around btn btn-light">
                <div style={{width:"1.8rem"}} className="d-flex justify-content-center">
                  <img style={{width:"24px",height:"34px",margin:"0 0.3rem",stroke:"#FFFFFF"}} className="col" src="./images/shopping-cart.svg"></img>  
                </div>
                <div style={{fontSize:"1.2rem"}}>
                  cart
                </div>
                
                <div style={{color: 'Black',fontSize:"1.2rem"}}>{totalQuantity}</div>
            </Button>} */}
      <Button
        style={{
          width: "9rem",
          display: "flex",
          alignItems: "center",
         
          background:"none",
          border:"none",
          marginRight:"10",
          padding:"0"
         
        }}
        onClick={props.onClick}
        className="fs-5 me-2"
      >
        <AiOutlineShoppingCart
          style={{ marginRight:"10px" }}
        />{" "}
        <span style={{fontSize:"1.4rem",marginRight:"15px"}}>Cart</span>
        <div className={classes.bump} style={{position:"relative", color: "white", fontSize: "1.2rem", marginRight:"10px",fontWeight:"bold",background:"#13192b",height:"45px", width:"45px",borderRadius:"50%"}}>
          <span style={{position:"absolute", left:"50%",right:"0",transform:"translate(-50%,20%)"}}>{totalQuantity}</span>
        </div>
        {/* box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px; */}
      </Button>
      
    </>
  );
};
export default HeaderCartButton;
