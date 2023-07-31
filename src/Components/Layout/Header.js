import { Button,Container,Navbar,Nav } from "react-bootstrap";
import React, { useContext,useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import HeaderCartButton from "./HeaderCartButton";
import AuthContext from "../../FireBaseAuthentication/auth-context";
import { useSelector,useDispatch } from "react-redux";
import { AuthActions } from "../../Store/AuthSlice";
import classes from './Header.module.css';
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import {BsBag,BsInfoCircle} from 'react-icons/bs';
const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state)=>state.auth.isLoggedIn);
  const logoutHandler = ()=>{
    dispatch(AuthActions.logout());
    navigate('/');
  }
  return (
    <>
      {/* <nav style={{padding:"0"}} className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div style={{margin:"10px 0"}} className="container">
         
          <NavLink
            to="/store"
            className="navbar-brand"
            style={{ fontSize: "1.2rem" }}
          >
            E-Commerce
          </NavLink>
          <button
            className="navbar-toggler"
            aria-expanded="false"
            data-bs-toggle="collapse"
            data-bs-target="#navBar1"
            aria-controls="navBar1"
            aria-label="Expand Navigation"
          >
            <div className="navbar-toggler-icon"></div>
          </button>

          
          <div className="collapse navbar-collapse" id="navBar1">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn && <li className="nav-item">
                <NavLink
                  to="/store"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                  aria-current="page"
                >
                  Store
                </NavLink>
              </li>}
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-Us"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                >
                  Contact Us
                </NavLink>
              </li>
              { !isLoggedIn && 
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Login
                  </NavLink>
                </li>
              }
              {isLoggedIn && <li className="nav-item">
                <button
                  onClick={logOutHandler}
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  Logout
                </button>
              </li>}
            </ul>
          </div>

          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </nav> */}
      {/* <nav className={classes.navBar}>
        <h3 className={classes.logo}>Ecommerce</h3>
        <ul className={`${isMobile} ?${classes.navLinkMobile}  : ${classes.navLinks} `}
        onClick={()=>setIsMobile(false)}>
        <li className="nav-item">
                <NavLink
                  to="/home"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              {isLoggedIn && <li className="nav-item">
                <NavLink
                  to="/store"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                  aria-current="page"
                >
                  Store
                </NavLink>
              </li>}
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact-Us"
                  className="nav-link"
                  style={{ fontSize: "1.2rem" }}
                >
                  Contact Us
                </NavLink>
              </li>
              { !isLoggedIn && 
                <li className="nav-item">
                  <NavLink
                    to="/login"
                    className="nav-link"
                    style={{ fontSize: "1.2rem" }}
                  >
                    Login
                  </NavLink>
                </li>
              }
              {isLoggedIn && <li className="nav-item">
                <button
                  onClick={logOutHandler}
                  className="nav-link"
                  style={{
                    fontSize: "1.2rem",
                    background: "transparent",
                    border: "none",
                  }}
                >
                  Logout
                </button>
              </li>}
              <button onClick={()=>setIsMobile(!isMobile)} className={classes.mobileMenuIcon}>
                  {isMobile ? (<i><GiHamburgerMenu/></i>) : (<i><RxCross2/></i>)}
              </button>
        </ul>
        <GiHamburgerMenu/>
        <RxCross2/>
      </nav> */}
       <>
      <Navbar className={classes.mainNav}expand="lg" variant="dark">
        <Container fluid style={{padding:"10px 20px"}}>
          <Navbar.Brand href="/store" style={{borderBottom:"2px solid #ff4c76"}}>
           E-Commerce <span style={{color:"#ff4c76"}}>WEB</span>
          </Navbar.Brand>
          
          
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <ul className="navbar-nav mr-auto ms-sm-3">
                {isLoggedIn && (
                  <li className="nav-item" style={{fontWeight:"" }}>
                    <NavLink to="/home" className="nav-link fs-5">
                      <AiIcons.AiOutlineHome
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Home
                    </NavLink>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item">
                    <NavLink to="/store" className="nav-link fs-5">
                      <BsBag
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Store
                    </NavLink>
                  </li>
                )}
                {!isLoggedIn && (
                  <li className="nav-item ">
                    <NavLink to="/login" className="nav-link fs-5">
                      <AiIcons.AiOutlineLogin
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      Login
                    </NavLink>
                  </li>
                )}
                {!isLoggedIn && (
                  <li className="nav-item ">
                    <NavLink to="/" className="nav-link fs-5">
                      <BsIcons.BsFillClipboard2PlusFill
                        style={{ position: "relative", bottom: "3px" }}
                      />{" "}
                      SignUp Up
                    </NavLink>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item ">
                    <NavLink to="/home/profile" className="nav-link fs-5 me-2">
                      <CgIcons.CgProfile
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      My Profile
                    </NavLink>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item ">
                    <NavLink to="/about" className="nav-link fs-5 me-2">
                      <BsInfoCircle
                        style={{ position: "relative", bottom: "2px" }}
                      />{" "}
                      About
                    </NavLink>
                  </li>
                )}
                {isLoggedIn && (
                  <li className="nav-item ">
                    <Button
                    onClick={logoutHandler}
                    style={{ background:"none", border:"none" }}
                    className="nav-link fs-5 me-2">
                      <AiIcons.AiOutlineLogout
                        style={{ position: "relative", bottom: "2px", background:"none", border:"none" }}
                      />{" "}
                      Logout
                    </Button>
                  </li>
                )}
                
                
                {isLoggedIn && (
                  
                  <HeaderCartButton onClick={props.onShowCart}  >
                  </HeaderCartButton>
                
              )}
              </ul>

            </Nav>
          </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </>
      
    </>
  );
};

export default Header;
