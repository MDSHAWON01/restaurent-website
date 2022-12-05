import React from 'react';
import './Footer.css';
import { Container, Row, Col, ListGroupItem, ListGroup } from 'reactstrap';

const footerQuickLink = [

    {
        display: 'Terms & Conditions',
        url: '#',
    },
    {
        display: 'Privacy Policy',
        url: '#',
    },
    {
        display: 'Return & Refund',
        url: '#'
    },
    {
        display: 'Payment Method',
        url: '#'
    }
]

const footerLink = [
    {
        display: 'About Us',
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

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className='d-flex align-items-center gap-1 mb-4'>
                                    <span>
                                        <i className='ri-restaurant-2-line'></i>
                                    </span>
                                    Chef Food
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ducimus officiis sint cumque! Atque quisquam delectus voluptatem quasi ea beatae?</p>
                            </div>

                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <div className="footer-link-title">
                                <h5>Quick Links</h5>

                                <ListGroup>
                                    {
                                        footerQuickLink.map((item, index) => (
                                            <ListGroupItem key={index} className='link-item'>
                                                <a href={item.url}>{item.display}</a>
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg='2' md='4' sm='6'>
                            <div className="footer-link-title">
                                <h5>Info Links</h5>

                                <ListGroup>
                                    {
                                        footerLink.map((item, index) => (
                                            <ListGroupItem key={index} className='link-item'>
                                                <a href={item.url}>{item.display}</a>
                                            </ListGroupItem>
                                        ))
                                    }
                                </ListGroup>
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <div className="footer-link-title">
                                <h5>Quick Links</h5>

                                <ListGroup>
                                    <ListGroupItem className='link-item d-flex align-items-center gap-3'>
                                        <i className="ri-map-pin-line"></i> Dhaka,Bangladesh.
                                    </ListGroupItem>
                                    <ListGroupItem className='link-item d-flex align-items-center gap-3'>
                                        <i className="ri-mail-line"></i> example@gmail.com.
                                    </ListGroupItem>
                                    <ListGroupItem className='link-item d-flex align-items-center gap-3'>
                                        <i className="ri-phone-line"></i> +880 123 456 789
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col className='lg-12'>
                            <p>Copyright 2022, develop by M.SHAWON | All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;