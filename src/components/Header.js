import React from 'react';
import Navigationbar from './Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {

    return (
        <header style={{marginBottom:'3em'}}>
            <Navigationbar></Navigationbar>
            <Container style={{marginTop:'2em'}}>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>VOXER TECH</h1>
                    </Col>
                </Row>
                <Row>
                    <Col style={{ color: 'rgb(119, 119, 119)', letterSpacing: '2px', textTransform: 'uppercase' }}>Voxer is a fast growing and established start-up</Col>
                </Row>
            </Container>
        </header>
    )
}
export default Header;