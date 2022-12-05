import React, { useRef } from 'react';
import './Header.css';
import { Container } from 'reactstrap';

const navLinks = [
    {
        display: 'Home',
        url: '#'
    },
    {
        display: 'About',
        url: '#'
    },
    {
        display: 'Menu',
        url: '#'
    },
    {
        display: 'Recipes',
        url: '#'
    },
    {
        display: 'Contact',
        url: '#'
    }

]

const Header = () => {
    const menuRef = useRef()
    const menuToggle = () => menuRef.current.classList.toggle('active-menu')
    return (
        <header className="header">


            <Container>
                <div className="navigation">

                    <div className="logo">
                        <h2 className='align-items-center d-flex gap-1'>
                            <span> <i class="ri-restaurant-2-line"></i> </span> Chef Food
                        </h2>
                    </div>


                    <div className="nav-menu" onClick={menuToggle} ref={menuRef}>
                        <div className="nav-list-wrapper  d-flex align-items-center justify-content-between gap-5">
                            <ul className="nav-list">
                                {navLinks.map((item, index) => (
                                    <li className="nav-item" key={index}>
                                        <a href={item.url}>{item.display}</a>
                                    </li>
                                ))}
                            </ul>
                            <div className="menu-right">
                                <div className="custom-search">
                                    <input type="text" placeholder="Search item...." />
                                    <span> <i class="ri-search-line"></i> </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <span className="cart-icon">
                            <i class="ri-shopping-basket-line"></i>

                            <span className="badge">2</span>
                        </span>
                    </div>



                    <div className="mobile-menu">
                        <span> <i class="ri-menu-line" onClick={menuToggle}></i> </span>
                    </div>


                </div>
            </Container>


        </header>
    );
};

export default Header;