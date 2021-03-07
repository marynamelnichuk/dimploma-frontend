import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const SignUpForm = () => {
    return (
        <Container className="container-center">
            <Row className="justify-content-center">
                <Col className="login-form">
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Repeat password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default SignUpForm;