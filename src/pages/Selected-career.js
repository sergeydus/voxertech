import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Careers.css'
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import jobs from '../config';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams
} from 'react-router-dom'
function SelectedCareers() {
    let { careerId } = useParams();
    careerId = Number.parseInt(careerId);
    let job = (jobs.find((job) => {
        return job.careerId === careerId;
    }));
    // console.log(job);
    let description = job.description.map(des => <p style={{color:'rgb(94, 94, 94)'}}>{des}</p>);
    let requirements= job.requirements.map(req => <li>{req}</li>);
    return <Container>
        <Row>
            <Col xs={12}>
                <h1 style={{ fontWeight: 400, fontSize: '22px' }}>
                    {job.title}
                </h1>
                <h2 style={{ fontWeight: 'bold' }}>
                    Description
                </h2>
                {description}
                <h2 style={{ fontWeight: 'bold' }}>
                    Requirements
                </h2>
                <ul style={{textAlign:'left',color:'rgb(94, 94, 94)'}}>
                    {requirements}
                </ul>

            </Col>
        </Row>
    </Container>
}
export default SelectedCareers;