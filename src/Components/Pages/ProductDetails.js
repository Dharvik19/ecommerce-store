import React from "react";
import{useParams} from 'react-router-dom';
import productsArr from "../Products/Products";

const ProductDetails =(props)=>{

    const params = useParams();
    const product = productsArr.find((itm)=>itm.id === params.productId);

    if(!product){
        return(
            <>
                <h1>No products found</h1>
            </>
        );
    }

    return(
        <>
             <section style={{backgroundColor:"red", height:"80vh"}} className="mx-5 my-2 container">
            <div key={productsArr.id}>
                <div className="card my-3 border-0" style={{ width: '20rem' }}>
                    
                    <img src={productsArr.imageUrl} alt="itemImage.jpeg" />
                    <div className="card-body">
                       
                    </div>
                </div>
            </div>
            <div >
                <h2>{productsArr.title}</h2>
                <span>Price: Rs. {productsArr.price}</span>
                <p>Some demo details of the product: {productsArr.title}.</p>
            </div>
        </section>
        </>
    )
}

export default ProductDetails;