import React from "react";
import { NavLink } from "react-bootstrap";
import {Link} from 'react-router-dom'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">

                    {/* Logo and Side button  */}
                    <NavLink href="#" className="navbar-brand"  style={{fontSize:"1.2rem"}}>E-Commerce</NavLink>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navBar1" aria-controls="navBar1" aria-label="Expand Navigation">
                        <div className="navbar-toggler-icon" />
                    </button>

                    {/* NavBar Menus */}
                    <div className="collapse navbar-collapse" id="navBar1">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to={"/home"} className="nav-link active" style={{fontSize:"1.2rem"}} aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/store"} className="nav-link active"  style={{fontSize:"1.2rem"}} aria-current="page">Store</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/about"} className="nav-link active"  style={{fontSize:"1.2rem"}}>About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Cart Button */}
                    <HeaderCartButton onClick={props.onShowCart}/>
                    
                </div>
            </nav>
            
            <div style={{marginTop:"3rem"}}>
                <section>
                    <div style={{height:"50px", color:"white",width:"100%",fontSize:"40px"}} className="d-flex justify-content-center align-items-center bg-dark">THE GENERICS</div>
                </section>
            </div>
        </>
    );
};

export default Header;