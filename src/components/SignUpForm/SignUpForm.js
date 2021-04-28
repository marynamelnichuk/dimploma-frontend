import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Row, Col, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class SignUpForm extends React.Component {

    state = {}

    onSignUp = () => {
        console.log('sign up : ' , this.state.firstName);
    }

    onFirstNameChange = (event) => {
        this.setState(({firstName}) => {
            return {
                firstName: event.target.value
            }
        })
    }

    onLastNameChange = (event) => {
        this.setState(({lastName}) => {
            return {
                lastName: event.target.value
            }
        })
    }

    onEmailChange = (event) => {
        this.setState(({email}) => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChange = (event) => {
        this.setState(({password}) => {
            return {
                password: event.target.value
            }
        })
    }

    render() {
        return (
            <Container className="container-center z-depth-5">
                <p className="login-title">Sign up</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>First name</Form.Label>
                        <Form.Control placeholder="First name" onChange={this.onFirstNameChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Last name</Form.Label>
                        <Form.Control placeholder="Last name" onChange={this.onLastNameChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.onEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={this.onPasswordChange}/>
                    </Form.Group>
                    <div>
                        <hr className="divider"/>
                    </div>
                    <Button variant="primary" type="submit" className="login-button" onClick={this.onSignUp}>
                        Sign up
                    </Button>
                </Form>
            </Container>
        );
    }
}

export default SignUpForm;