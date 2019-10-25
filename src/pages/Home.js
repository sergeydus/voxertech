import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Jumbotron from 'react-bootstrap/Jumbotron'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import './Home.css'
import {
    Link 
  } from "react-router-dom";
function Home() {

    return (
        <Container>
            <Row className='justify-content-md-center' style={{marginTop:'5em'}}>
                <Col xs={12} md={6} xl={4}  >
                    <div className="Home-item">
                        <p className='Home-item-text'>
                            You became an iOS developer to change the mobile world around you. - With Voxer, you can.
                        </p>
                        <Button as={Link} to='/our-office'>GET CURRENT POSITIONS</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4} >
                <div className="Home-item">
                        <img src='https://img1.wsimg.com/isteam/stock/11252/:/rs=w:223,h:223,cg:true,m/cr=w:223,h:223'></img>
                        <p className='Home-item-text' style={{marginTop:'2em'}}>
                            Reach out to us today and see just why the grass is greener on our side, send us your Curriculum Vitae.
                        </p>
                        <Button as={Link} to='/our-office'>CONTACT US</Button>
                    </div>
                </Col>
                <Col xs={12} md={6} xl={4} >
                <div className="Home-item">
                        <p className='Home-item-text'>
                            Enjoy a refined, flexible, and elegant work environment in an atmosphere only Voxer can offer.
                        </p>
                        <Button as={Link} to='/our-office'>OUR OFFICE</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Home;