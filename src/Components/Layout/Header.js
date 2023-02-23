import React from "react";
import { NavLink } from "react-bootstrap";
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
                                <a href="#" className="nav-link active" style={{fontSize:"1.2rem"}} aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active"  style={{fontSize:"1.2rem"}} aria-current="page">Store</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link active"  style={{fontSize:"1.2rem"}}>About</a>
                            </li>
                        </ul>
                    </div>

                    {/* Cart Button */}
                    <HeaderCartButton onClick={props.onShowCart}/>
                    
                </div>
            </nav>
        </>
    );
};

export default Header;