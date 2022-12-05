import React from 'react';
import { Container, Col, Row } from 'reactstrap';
import './Choose.css';
import pastaImg from '../../assets/images/pasta.png'

const Choose = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Col lg='6' md='6'>
                        <img src={pastaImg} alt="" className='w-100' />
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="choose-content">
                            <h4>Who Are You ?</h4>
                            <h2>Take a look at the benifits we offer you</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla, tempora debitis quos eligendi dolorum ad sit ex facilis quod eum.</p>
                        </div>

                        <div className="features mt-4">
                            <div className="feature1 d-flex align-items-center gap-5">
                                <div className="single-feature">
                                    <span><i className='ri-truck-line'></i></span>
                                    <h6>Fee Home Delivery</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="single-feature">
                                    <span className="feature-icon-two"><i className='ri-money-dollar-circle-line'></i></span>
                                    <h6>Return & Refund</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>

                            <div className="feature1 mt-3 d-flex align-items-center gap-5">
                                <div className="single-feature">
                                    <span className='feature-icon-3'><i className='ri-secure-payment-line'></i></span>
                                    <h6>Secure Payment</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div className="single-feature">
                                    <span className="feature-icon-4"><i className='ri-24-hours-line'></i></span>
                                    <h6>24/7 hour Service</h6>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Choose;