import React from "react";
import { Link, NavLink } from "react-router-dom";
import './Footer.css'
import {BiLogoFacebook,BiLogoTwitter,BiLogoInstagram,BiLogoLinkedin} from 'react-icons/bi';
const Footer = (props) => {
  return (
    <>
  <div className="footer">
            <div className="container">     
                <div className="row">                       
                    <div className="col-lg-4 col-sm-4 col-xs-12">
                        <div className="single_footer">
                            <h4>Services</h4>
                            <ul>
                            <li><NavLink to="/store" className="a">Lorem Ipsum</NavLink></li>
                                <li><NavLink to="/store" className="a">Lorem Ipsum</NavLink></li>
                                <li><NavLink to="/store" className="a">Lorem Ipsum</NavLink></li>
                                <li><NavLink to="/store" className="a">Lorem Ipsum</NavLink></li>
                                <li><NavLink to="/store" className="a">Lorem Ipsum</NavLink></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Page Link</h4>
                            <ul>
                                <li><NavLink to="/store" className="a">Store</NavLink></li>
                                <li><NavLink to="/about" className="a">About</NavLink></li>
                                <li><NavLink to="/home" className="a">Home</NavLink></li>
                                <li><NavLink to="/store" className="a">Merch</NavLink></li>
                                <li><NavLink to="/store" className="a">Albums</NavLink></li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <div className="single_footer single_footer_address">
                            <h4>Subscribe today</h4>
                            <div className="signup_form">                           
                                <form action="#" className="subscribe">
                                    <input type="text" className="subscribe__input" placeholder="Enter Email Address"/>
                                    <button type="button" className="subscribe__btn"><i className="fas fa-paper-plane">send</i></button>
                                </form>
                            </div>
                        </div>
                        <div className="social_profile">
                            <ul>
                                <li><a href="https://www.facebook.com/" target='_blank'><BiLogoFacebook className="icons"/></a></li>
                                <li><a href="https://www.twitter.com/"><BiLogoTwitter className="icons"/></a></li>
                                <li><a href="https://www.instagram.com/" target='_blank'><BiLogoInstagram className="icons"/></a></li>
                                <li><a href="https://www.linkedin.com/"><BiLogoLinkedin className="icons"/></a></li>
                            </ul>   
                        </div>                          
                    </div>        
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12">
                        <p className="copyright">Copyright © 2019 <a className="a" href="https://github.com/Dharvik19">Dharvik</a>.</p>
                    </div>               
                </div>             
            </div>
        </div>
    </>
  );
};
export default Footer;
