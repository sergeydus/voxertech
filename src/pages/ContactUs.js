import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function ContactUs() {

    return <Container>
        <Row>
            <Col xs={12}>
                <h3>Contact Us</h3>
            </Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p style={{ color: 'rgb(94, 94, 94)' }}>Send us your CV. If you are a good fit, we will reach out to you very soon!</p>
            </Col>
        </Row>
        <Row style={{ margin: '3em 0' }}>
            <Col>
                <a href="mailto:hr@voxertech.com">
                    <Button variant='outline-warning'>Send Us Your CV</Button>
                </a>
            </Col>
        </Row>
        <Row style={{ margin: '3em 0' }}>
            <Col xs={12}>
                <a href='https://www.linkedin.com/company/voxer-tech'>
                    <svg style={{ height: '48px', width: '48px', fill: 'rgb(207, 126, 0)' }} width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                </a>
            </Col>
        </Row>
    </Container>
}
export default ContactUs;