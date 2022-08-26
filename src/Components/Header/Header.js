import React from 'react';
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faThLarge } from '@fortawesome/free-solid-svg-icons'

function Header() {
    return (
        <div>
            <header>
                <section>
                    <nav>
                        <div className="nav-header">
                            <div className='left-header'>
                                <div className="nav-logo">
                                    <img src="https://fokkner.qodeinteractive.com/wp-content/uploads/2021/05/logo-img-2.png" alt="" />
                                </div>
                                <div className="nav-link">
                                    <a href="">home</a>
                                    <a href="">property</a>
                                    <a href="">pages</a>
                                    <a href="">blog</a>
                                    <a href="">shop</a>
                                    <div className='nav-home'>
                                        <a href="">home</a>
                                        <a href="">property</a>
                                        <a href="">pages</a>
                                        <a href="">blog</a>
                                        <a href="">shop</a>
                                    </div>
                                </div>
                            </div>
                          <div className='right-header'>
                            <div className="nav-contact" >
                                    <a href='' className='phone-contact'>444 000 999</a>
                                    <a href='' className='email-contact'>fokkner@qode.com</a>
                                </div>
                                <div className="nav-icon">
                                    <div className='iconSearch'>
                                        <FontAwesomeIcon icon={faSearch} className='icon-search' />
                                    </div>
                                    <div className='iconToggle'>
                                        <FontAwesomeIcon icon={faThLarge} className='icon-toggle' />
                                    </div>
                                </div>
                          </div>
                           
                        </div>
                    </nav>
                </section>
            </header>
        </div>
    );
}

export default Header;