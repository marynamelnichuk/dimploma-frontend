import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import '../Global styles.css';

class TestCreateForm extends React.Component {

    state = {
        testName: null,
        tasksNumber: null,
        testBase: null,
        totalMark: null
    };

    onTestNameChange = (event) => {
        this.setState(() => {
            return {
                testName: event.target.value
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
                testBase: event.target.value
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
            testName: this.state.testName,
            tasksNumber: this.state.tasksNumber,
            testBase: this.state.testBase,
            totalMark: this.state.totalMark
        });
    }

    /*formatDate = ()  => {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return "2021-09-10";
        //[year, month, day].join('-');
    }

    onSubmit = (event) => {
        this.props.onAddTestBase({
            title: this.state.title,
            category: this.state.category,
            description: this.state.description
        });
    }

    onTitleCahnge = (event) => {
        this.setState(({title}) => {
            return {
                title: event.target.value
            }
        })
    }

    onCategoryChange = (event) => {
        this.setState(({category}) => {
            return {
                category: event.target.value
            }
        })
    }

    onDescriptionChange = (event) => {
        this.setState(({title}) => {
            return {
                description: event.target.value
            }
        })
    }
*/
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
                                    <Form.Control type="text" placeholder="Назва тесту" onChange={this.onTestNameChange} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Кількість завдань</Form.Label>
                                    <Form.Control type="number" placeholder="Кількість завдань" onChange={this.onTasksNumberChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Тестова база</Form.Label>
                                    <Form.Control type="text" placeholder="Тестова база" onChange={this.onTestBaseChange}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Максимальна оцінка</Form.Label>
                                    <Form.Control type="number" placeholder="Максимальна оцінка" onChange={this.onTotalMarkChange}/>
                                </Form.Group>
                                <Button variant="primary" size="lg" active className="next-button" onClick={this.onSubmit}>
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