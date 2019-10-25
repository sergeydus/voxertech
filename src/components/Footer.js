import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {

    return <Container style={{ marginTop: '6em' }}>
        <Row>
            <Col xs={12}><hr style={{background:'rgb(153, 153, 153)'}}/></Col>
        </Row>
        <Row>
            <Col xs={12}>
                <p>
                    Copyright © 2018 Voxer Tech - All Rights Reserved.
                </p>
            </Col>
        </Row>
        <Row>
            <hr style={{ width: '50px' }} />
        </Row>
        <Row>
            <Col xs={12}>
                <p style={{color:'rgb(119, 119, 119)'}}>
                    HR: +972 (3)-9108980
                </p>
            </Col>
        </Row>
    </Container>
}
export default Footer;