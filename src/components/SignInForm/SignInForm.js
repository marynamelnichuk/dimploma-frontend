import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInForm.css';

class SignInForm extends React.Component {

    render() {
        return (
            <Container className="container-center z-depth-5">
                <p className="login-title">Sign in</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="login-button">
                        Sign in
                    </Button>
                </Form>
                <div>
                    <hr className="divider"/>
                </div>
                <p className="or-divider">OR</p>
                <div>
                    <Button variant="success" type="submit" className="login-button">
                        Sign up
                    </Button>
                </div>
            </Container>
        );
    };
}

export default SignInForm;