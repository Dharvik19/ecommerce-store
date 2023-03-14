import React, { useState } from "react";
import{useParams,Link} from 'react-router-dom';
import productsArr from "../Products/Products";
import { Button, Card, Container } from "react-bootstrap";
const ProductDetails = (props) => {
//     // const params = useParams();
//     const {productId} = useParams();
//     const product = productsArr.find((itm) => itm.id === productId);

    
// //    if (!product) {
// //         return <h1 className="text-center">Page Not found!</h1>
// //     } 
    
//     return (
// <>
//         <section className="mx-5">
//             <div key={product.id}>
//                 <div className="card my-3 border-0" style={{ width: '20rem' }}>
//                     {/* <a href={product.imageUrl} className="MagicZoom" data-options="zoomWidth:400px; zoomHeight:400px">
//                         <img src={product.imageUrl} alt="itemImage.jpeg" />
//                     </a> */}
//                     <img src={product.imageUrl} alt="itemImage.jpeg" />
//                     <div className="card-body">
//                         {/* <button className="btn btn-primary float-end" onClick={addItemToCarthandler.bind(null, itm)}>ADD TO CART</button> */}
//                     </div>
//                 </div>
//             </div>
//             <div className="">
//                 <h2>{product.title}</h2>
//                 <span>Price: Rs. {product.price}</span>
//                 <p>Some demo details of the product: {product.title}.</p>
//             </div>
//         </section>
        
//         <Container >
//         <Card>
//         <h1>{productId}</h1>
//         </Card>
//         </Container>
//         </>
//     );

const params = useParams();
const product = productsArr.find((itm) => itm.title === params.productId);
const { title, imageUrl, price, description ,rating ,comments} = product; 
// if (!product) {
//     return <h1 className="text-center">Page Not found!</h1>
// }
let len = comments.length;

return (
    <>
    
    <Container className="row  d-flex align-items-center justify-content-center " style={{width:"50rem", margin:"0 auto"}}>
    <section className="row" style={{ padding:"1rem 1rem 0 2rem",marginTop:"10px",backgroundColor:""}}>
        <h1 className="col">Product details</h1>
       <Link to="/store" className="col-2 " style={{backgroundColor:"#343a40",paddingTop:"10px",margin:"5px 25px 5px 0", color:"white",borderRadius:"10px",textDecoration:"none"}}>
            back to Store
        </Link>
       
       
    </section>
       <Container className="row m-2" > 
    
            <Card className="col " style={{height:"25rem", margin:"1rem 0 2rem 2rem", borderRadius:" 10px 0 0 10px"}}>
                <img src={imageUrl} alt="image"></img>
            </Card>
            <Card className="col" style={{height:"25rem", margin:"1rem 2rem 2rem 0",borderRadius:"0 10px 10px 0"}}>
                <div className="mt-4">
                <h3>{title}</h3>
                <h4>{price} Rs</h4>
                </div>
                <div className="mt-3">{description}</div>
                <div className="mt-3" style={{fontSize:"1.2rem", fontWeight:"500"}}>Product Rating: {rating}</div>
                <Button style={{width:"7rem", marginTop:"1rem"}}>Add to Cart</Button>
            </Card>
       </Container>
            <Card style={{width:"43rem", marginBottom:"2rem"}}>
                <Card.Title style={{fontSize:"1.5rem"}}>Comments</Card.Title>
                <Card.Body>
                {!len && <h1>No comments found</h1>} 
                {comments.map((item, index) => (
                    <div className="row" key={index} style={{marginBottom:"1rem"}}>
                        <div className="col" style={{fontSize:"1.2rem"}}>
                            <div style={{fontWeight:"700"}}> {item.name}</div>
                            <div> {item.comment}</div>
                        </div>
                        
                        <div className="col-2 " style={{ fontSize:"1.2rem",padding:"8px 0 0 45px"}}>Rating : </div>
                        <div className="col-1" style={{ fontSize:"1.2rem",padding:"8px 0 0 10px"}}>{item.rating}</div>
                       
                    <hr style={{marginTop:"1rem",height: "1rem"}}/>
                    </div> ))}
                </Card.Body>
            </Card>
            
    </Container>
    </>
);
}
    


   


export default ProductDetails;