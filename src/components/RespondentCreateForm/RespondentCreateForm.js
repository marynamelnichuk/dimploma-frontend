import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import '../Global styles.css';

class RespondentCreateForm extends React.Component {

    state = {
        userEmail: null,
        testName: null,
        dueDate: null
    };

    onUserEmailChange = (event) => {
        this.setState(() => {
            return {
                userEmail: event.target.value
            }
        })
    }

    onTestNameChange = (event) => {
        this.setState(() => {
            return {
                testName: event.target.value
            }
        })
    }

    onDueDateChange = (event) => {
        this.setState(() => {
            return {
                dueDate: event.target.value
            }
        })
    }


    onSubmit = (event) => {
        this.props.onAddRespondent({
            userEmail: this.state.userEmail,
            testName: this.state.testName,
            dueDate: this.state.dueDate
        });
    }

    render() {
        return (
            <div className="blue-back">
                <div className="test-base-create-form">
                    <h2>Призначення тесту для користувача</h2>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Назва тесту</Form.Label>
                                    <Form.Control type="text" placeholder="Назва тесту"
                                                  onChange={this.onTestNameChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Електронна пошта користувача</Form.Label>
                                    <Form.Control type="email" placeholder="Електронна пошта користувача"
                                                  onChange={this.onUserEmailChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Кінцевий термін</Form.Label>
                                    <Form.Control type="date" placeholder=">Кінцевий термін"
                                                  onChange={this.onDueDateChange}/>
                                </Form.Group>
                                <Button variant="primary" size="lg" active className="next-button"
                                        onClick={this.onSubmit}>
                                    Зберегти
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default RespondentCreateForm;