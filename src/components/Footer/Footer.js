import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

//component for footer
const Footer = () => {
    return (
        <footer className="bg-dark text-white p-3">
            <div className="container">
                <Row>
                    <Col xs={12} sm={12} md={4} lg={6}>
                        <p> <img style={{ width: '100px' }} src={logo} alt="logoImage" className='ms-3' /></p>
                        <p className="text-justify ms-3">We care every child as like the angel care for the god's creation. Care is a great virtue for men, it is god given. Caring other made the God pleased with his creation. We are always ready for you.</p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={3} className="text-center">
                        <h3 className="text-primary fw-bold">Find us:</h3>
                        <p>
                            <span>Dhaka</span>
                            <br />
                            <span>Sylhet</span>
                            <br />
                            <span>Chittagong</span>
                            <br />
                            <span>Rajshahi</span>
                            <br />
                            <span>Khulna</span>
                            <br />
                            <span>Rangpur</span>
                        </p>
                    </Col>

                    <Col xs={12} sm={12} md={4} lg={3} className="text-center">
                        <h3 className="text-primary fw-bold">Our Services</h3>
                        <p>
                            <span>Azoospermia</span>
                            <br />
                            <span>IVF - In Vitro Fertilization</span>
                            <br />
                            <span>IUI</span>
                            <br />
                            <span>ICSI</span>
                            <br />
                            <span>IMSI</span>
                            <br />
                            <span>Surrogacy</span>
                        </p>
                    </Col>
                </Row>
            </div>
            <p className="mt-5 text-center">
                <Link to={{ pathname: "https://www.facebook.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook text-danger me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                <Link to={{ pathname: "https://www.twitter.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter text-danger me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                <Link to={{ pathname: "https://www.linkedin.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin text-danger me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                <Link to={{ pathname: "https://www.instagram.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
                <Link to={{ pathname: "https://www.youtube.com/" }} target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube text-danger me-3" data-toggle="tooltip" title="Github"></i></Link>
            </p>
            <p className="text-secondary text-center fs-6"><small>&copy;Angel's care child home</small></p>
        </footer>
    );
};

export default Footer;