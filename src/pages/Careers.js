import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Careers.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
function Careers() {

    return <Container>
        <Row>
            <Col xs={12} md={6}>
                <p style={{ textAlign: 'left', fontWeight: 'bold', fontSize: '26px' }}>CAREERS</p>
                <hr style={{ width: '100%', background: 'black' }}></hr>
                <p style={{textAlign:'left'}}>Voxer Tech specializes in mobile applications in the communication industry. We currently have five million users and are growing very quickly! We are currently looking for highly ambitious, self-motivated, and bright developers to join our winning team!</p>
                <ul className="Careers" style={{ textAlign: 'left', marginTop:'3em' }}>
                    <li><a href='/' >X-110 Java Server</a></li>
                    <li><a href='/'>VX-115 FullStack Developer: JavaScript + Node.js</a></li>
                    <li><a href='/'>VX-150 Android</a></li>
                    <li><a href='/'>VX-160 iOS</a></li>
                    <li><a href='/'>VX-175 Angular / React FED Front-End Web Developer</a></li>

                </ul>
                <Button variant='warning'>
                    <p style={{fontWeight:"bold",fontSize:'16px',textTransform:'uppercase'}}>
                        If you would like to join our dynamic and vibrant team, please contact us.
                    </p>
                </Button>
            </Col>
            <Col xs={12} md={6}>
                <Image fluid src='//img1.wsimg.com/isteam/stock/6975/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:640,h:680,cg:true,m/cr=w:640,h:680,a:cc'>
                </Image>
            </Col>
        </Row>
    </Container>
}
export default Careers;