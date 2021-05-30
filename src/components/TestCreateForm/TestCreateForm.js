import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import '../Global styles.css';

class TestCreateForm extends React.Component {

    state = {
        name: null,
        tasksNumber: null,
        testBaseName: null,
        totalMark: null
    };

    onTestNameChange = (event) => {
        this.setState(() => {
            return {
                name: event.target.value
            }
        })
    }

    onTasksNumberChange = (event) => {
        this.setState(() => {
            return {
                tasksNumber: event.target.value
            }
        })
    }

    onTestBaseChange = (event) => {
        this.setState(() => {
            return {
                testBaseName: event.target.value
            }
        })
    }

    onTotalMarkChange = (event) => {
        this.setState(() => {
            return {
                totalMark: event.target.value
            }
        })
    }

    onSubmit = (event) => {
        this.props.onAddTest({
            name: this.state.name,
            tasksNumber: this.state.tasksNumber,
            testBaseName: this.state.testBaseName,
            totalMark: this.state.totalMark
        });
    }

    render() {
        return (
            <div className="blue-back">
                <div className="test-base-create-form">
                    <h2>Створення нового тесту</h2>
                    <Card className="mt-3">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Назва тесту</Form.Label>
                                    <Form.Control type="text" placeholder="Назва тесту"
                                                  onChange={this.onTestNameChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Кількість завдань</Form.Label>
                                    <Form.Control type="number" placeholder="Кількість завдань"
                                                  onChange={this.onTasksNumberChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Тестова база</Form.Label>
                                    <Form.Control type="text" placeholder="Тестова база"
                                                  onChange={this.onTestBaseChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Максимальна оцінка</Form.Label>
                                    <Form.Control type="number" placeholder="Максимальна оцінка"
                                                  onChange={this.onTotalMarkChange}/>
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

export default TestCreateForm;