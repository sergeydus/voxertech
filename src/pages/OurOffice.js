import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image'
function OurOffice() {

    return <Container>
        <Row>
            <Col xs={12}>
                <Image fluid src='https://img1.wsimg.com/isteam/stock/lVVqKVB/:/cr=t:0%25,l:0%25,w:100%25,h:47.63%25/rs=h:650,cg:true'></Image >
            </Col>
            <Col xs={12} style={{ marginTop: '2em' }}>
                <h4 style={{ textAlign: 'left' }}>OUR OFFICE</h4>
                <hr style={{ background: 'black' }}></hr>
                <p style={{textAlign:'left',marginLeft:'10%',maxWidth:'80%'}}>
                    Located in the Rothschild area, our office has everything a professional would need. Our team members not only change the world of mobile applications but also love every minute of it.
                </p>
                <p style={{textAlign:'left',marginLeft:'10%',maxWidth:'80%'}}>
                    We believe that surrounding yourself with the best, is key in reaching your maximum potential.
                </p>
                {/* <p style={{ marginLeft: "10%", maxWidth: '80%', textAlign: 'center' }}>
                    Located in the Rothschild area, our office has everything a professional would need. Our team members not only change the world of mobile applications but also love every minute of it.We believe that surrounding yourself with the best, is key in reaching your maximum potential.
                </p> */}
            </Col>
        </Row>
    </Container>
}
export default OurOffice;