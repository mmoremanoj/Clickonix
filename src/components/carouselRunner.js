import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Carousel } from 'react-bootstrap';

function carouselRunner(){


    return (
        <Container fluid>
                  <Carousel>
                        <Carousel.Item><img className="d-block w-100" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonPay/Diwali17/GW/Friday1/ART_wave1_HDFC_750x375_3.jpg" alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201901/OnePlus_Twitter_ad.jpeg?awLM5c5QMFqD_PO.p3bNiPtQveb6fLSZ" alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item><img className="d-block w-100" src="http://commercial-song.net/wp-content/uploads/2020/08/dell_xps_13_commercial.jpg" alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </Container>
    );
}

export default carouselRunner;