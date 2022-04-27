import React from 'react';
import { Col, Row } from 'react-bootstrap';
import aboutImage2 from '../../images/aboutImage2.png';


//about us section of about page
const AboutUs = () => {
    return (
        <div>
            <Row className="m-5">
                <h2 className="text-center text-info fw-bold mb-5">About Us – Angel's care child home</h2>
                <Col xs={12} sm={12} md={5} lg={5}>
                    <img className="img-fluid rounded-3" src={aboutImage2} alt="bannerImage" />
                </Col>
                <Col xs={12} sm={12} md={7} lg={7}>
                    <div className="ms-5">
                        <p>
                            Angel's care child home is one of the best fertility centers in Bangladesh founded and managed by Dr. Tasnuva Kawsar the renowned Embryologist and fertility specialist. Bangladesh Fertility was founded in the year 2010 by Dr. Tasnuva Kawsar after the realization of the need for quality fertility care and specialization in solving the issues couples faced with respect to infertility.
                        </p>

                        <p>
                            Dr. Tasnuva Kawsar is one of the pioneer who brought in fertility treatments, he brought in the most high-end and cutting edge fertility treatments within a highly appealing hospital atmosphere. Angel's care child home has the best progress over the years with the number of patients flowing in and getting the kind of care & treatment they deserve.
                        </p>

                        <p>
                            Angel's care child home is known to be that one source of healthcare solution with unparalleled quality of care, highest success rate and immensely experienced physicians for the specialty. Angel's care child home over the years has achieved unshakable trust with the added strength of Dr. V M Thomas’s practice, state-of-the-art infrastructure and excellent capabilities of the team at Angel's care child home.
                        </p>
                        <p>
                            There are several high-end and rare treatments at Angel's care child home that are performed with excellent accuracy and utmost care to achieve success for the patients. The best part about Angel's care child home is that all facilities under one roof.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutUs;