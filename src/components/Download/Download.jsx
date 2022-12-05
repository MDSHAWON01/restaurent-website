import React from 'react';
import './Download.css';
import appImg from '../../assets/images/app.png';
import { Container, Row, Col } from 'reactstrap';

const Download = () => {
    return (
        <section>
            <Container className='app-container'>
                <Row>
                    <Col lg='6' md='6'>
                        <div className="app-img">
                            <img src={appImg} alt="" />
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="app-content">
                            <h5>Download our app</h5>
                            <h2 className="mb-4">Never feel hungry!Download our app and order delicious food</h2>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus mollitia nisi id quos autem. Quae tempore ratione excepturi deleniti magni!</p>

                            <div className="app-btn  d-flex align-items-center gap-5 mt-3">
                                <button className="btn-apple d-flex align-items-center gap-3">
                                    <i className="ri-apple-line"></i> <a href="#">Apple Store</a>
                                </button>
                                <button className="btn-google d-flex align-items-center gap-3">
                                    <i className="ri-google-play-line"></i> <a href="#">Google play Store</a>
                                </button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Download;