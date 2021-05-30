import React from 'react';
import Form from 'react-bootstrap/Form';
import {Container, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignInForm.css';
import {withRouter} from "react-router-dom";

class SignInForm extends React.Component {

    state = {
        failedToLogin: false
    };

    onSignUpButtonClick = () => {
        this.props.history.push(`/signUp`);
    }

    onSignInButtonClick = () => {
        if (this.state.email && this.state.password) {
            const requestOptions = {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            };
            fetch('http://localhost:8080/signIn', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.props.onUserSignIn(data.id);
                });
        }
        this.props.history.push('/main/testBases');
    }

    onEmailChange = (event) => {
        this.setState(() => {
            return {
                email: event.target.value
            }
        })
    }

    onPasswordChange = (event) => {
        this.setState(() => {
            return {
                password: event.target.value
            }
        })
    }

    render() {
        return (
            <Container className="container-center z-depth-5">
                <p className="login-title">Вхід у Test Builder</p>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Електронна пошта</Form.Label>
                        <Form.Control required type="email" placeholder="Введіть електронну пошту"
                                      onChange={this.onEmailChange}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Пароль</Form.Label>
                        <Form.Control required type="password" placeholder="Введіть пароль"
                                      onChange={this.onPasswordChange}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" className="login-button" onClick={this.onSignInButtonClick}>
                        Увійти
                    </Button>
                </Form>
                <div>
                    {this.state.failedLogin ? <p className="mt-3">Електронна пошта або пароль невірні.</p> :
                        <span></span>}
                </div>
                <div>
                    <hr className="divider"/>
                </div>
                <p className="or-divider">АБО</p>
                <div>
                    <Button variant="success" type="submit" className="login-button" onClick={this.onSignUpButtonClick}>
                        Зареєструватись
                    </Button>
                </div>
            </Container>
        );
    };
}

export default withRouter(SignInForm);