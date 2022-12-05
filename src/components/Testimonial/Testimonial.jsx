import React from 'react';
import './Testimonial.css';
import { Container, Row, Col } from 'reactstrap';

import testimonialImg from '../../assets/images/review1.png'
import Slider from 'react-slick';

const Testimonial = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    }
    return (
        <section>
            <Container>
                <Row >
                    <Col lg='8' sm='12' md='12' className='m-auto'>
                        <div className="slider-wrapper d-flex align-items-center gap-5">
                            <div className="slider-content w-50">
                                <h2 className="mb-4">What our customer are saying</h2>
                                <Slider {...settings}>
                                    <div>
                                        <div className="single-testimonial">
                                            <p className="review-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat nobis tenetur culpa debitis! Atque perspiciatis magnam harum in unde animi, quod, neque ipsa enim possimus soluta? Quisquam doloribus quam commodi reprehenderit, natus ab, sit debitis eius earum voluptatum odit!
                                            </p>
                                            <h6>Jhon Doe</h6>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="single-testimonial">
                                            <p className="review-content">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis repellat nobis tenetur culpa debitis! Atque perspiciatis magnam harum in unde animi, quod, neque ipsa enim possimus soluta? Quisquam doloribus quam commodi reprehenderit, natus ab, sit debitis eius earum voluptatum odit!
                                            </p>
                                            <h6>Jhon Doe</h6>
                                            <p>Web Developer</p>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                            <div className="slider-img w-50">
                                <img src={testimonialImg} alt="" className='w-100 ' />
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Testimonial;