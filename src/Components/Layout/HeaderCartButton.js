import React,{useContext} from "react";
import Button from "react-bootstrap/esm/Button";
import CartContext from "../../Store/Cart-context";
const HeaderCartButton=(props)=>{
   const cartcntx =  useContext(CartContext);
   const count = cartcntx.items.length;

    return(
        <>
            <Button onClick={props.onClick} style={{width:"5rem"}}className="btn btn-primary">
                Cart
                <div className="d-flex float-end"style={{color: 'white'}}>{count}</div>
            </Button>
            
        </>
    )
}
export default HeaderCartButton