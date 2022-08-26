import React, { useState } from 'react';
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebookF,
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
function Footer() {
    const [text,setText]=useState("")
    function handleChange(value)
    {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

         if(value.match(mailformat))
       {
        setText("")      
       }
       else
       {
        setText("Please fill correct format email")
       }
       if (value==="")
       {
        setText("Please fill email")
       }
    
    }
    return (
        <div>
            <section className='footer'>
                <div className='footer-text'>
                    <div className='logo-footer'>
                        <img src="https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/logo-img-2.png" alt=""></img>
                        <h4>Showcase all your properties in a truly modern manner. Welcome to Fokkner.</h4>
                    </div>
                    <div className='contact-footer'>
                        <h3>Contact</h3>
                        <h4>124-442-2887</h4>
                        <h4>124-442-2886</h4>
                        <h4>fokkner@qode.com</h4>
                        <h4>Elizabeth St, London SW1W 9BE, UK</h4>
                    </div>
                    <div className='link-footer'>
                        <h3>Usefull links</h3>
                        <h4>About us</h4>
                        <h4>Our history</h4>
                        <h4>Our goal</h4>
                        <h4>Contact us</h4>
                    </div>
                    <div className='social-footer'>
                        <h3>Subscribe to newsletter</h3>
                        <div className='check-input'>
                                <input type="text" placeholder='Email adress' onBlur={(e)=>handleChange(e.target.value)}/>
                                <p className='text-input'>{text}</p>
                        </div>
                        <div className='icon-social-footer'>
                            <FontAwesomeIcon icon={faFacebookF} className="iconFooterFb" />
                            <FontAwesomeIcon icon={faInstagram} className="iconFooterInsta" />
                            <FontAwesomeIcon icon={faTwitter} className="iconFooterTwit" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Footer;