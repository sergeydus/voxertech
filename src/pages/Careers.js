import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Careers.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import SelectedCareer from './Selected-career'
import { Link, Route } from "react-router-dom"
function Careers() {

    return <Container>
        <Row>
            <Col xs={{ order: 2, span: 12 }} md={{ order: 1, span: 6 }} >
                <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '26px' }}>CAREERS</p>
                <hr style={{ width: '100%', background: 'black' }}></hr>
                <p style={{ textAlign: 'left', color: 'rgb(94, 94, 94)' }}>Voxer Tech specializes in mobile applications in the communication industry. We currently have five million users and are growing very quickly! We are currently looking for highly ambitious, self-motivated, and bright developers to join our winning team!</p>

                <ul className="Careers" style={{ textAlign: 'left', marginTop: '3em' }}>
                    <li><Link to='/careers/110' >X-110 Java Server </Link></li>
                    <li><Link to='/careers/115'>VX-115 FullStack Developer: JavaScript + Node.js</Link></li>
                    <li><Link to='/careers/150'>VX-150 Android</Link></li>
                    <li><Link to='/careers/160'>VX-160 iOS</Link></li>
                    <li><Link to='/careers/175'>VX-175 Angular / React FED Front-End Web Developer</Link></li>

                </ul>
                <Link to='/contact-us'>
                    <Button variant='warning'>
                        <p style={{ fontWeight: "bold", fontSize: '16px', textTransform: 'uppercase', margin: 0, padding: '2px 4px' }}>
                            If you would like to join our dynamic and vibrant team, please contact us.
                    </p>
                    </Button>
                </Link>
            </Col>
            <Col xs={{ order: 1, span: 12 }} md={{ order: 2, span: 6 }}>
                <Image rounded fluid src='//img1.wsimg.com/isteam/stock/6975/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:640,h:680,cg:true,m/cr=w:640,h:680,a:cc'>
                </Image>
            </Col>
        </Row>
    </Container>
}
export default Careers;