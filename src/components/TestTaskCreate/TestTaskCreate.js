import React from "react";
import {Form, Card, Button, Row, Col} from "react-bootstrap";
import {MULTIPLE_CHOICE, SHORT_ANSWER, SINGLE_CHOICE} from "../Constants/Constants";

class TestTaskCreate extends React.Component {

    state = {
        question: null,
        type: SHORT_ANSWER,
        variants: [],
        correctAnswer: null,
        displayOptions: false,
        optionsArr: [],
    }

    onchangePicklist = (event) => {
        let picklistValue;
        let displayOptions;
        if (event.target.value === 'Коротка відповідь') {
            picklistValue = SHORT_ANSWER;
            displayOptions = false;
        }
        if (event.target.value === 'З вибором одного правильного варіанту') {
            picklistValue = SINGLE_CHOICE;
            displayOptions = true;
        }
        if (event.target.value === 'З вибором декількох правильних варіантів') {
            picklistValue = MULTIPLE_CHOICE;
            displayOptions = true;
        }
        this.setState(() => {
            let optionsArr = [];
            if (displayOptions) {
                optionsArr = [<span key="0">
                <Form.Group>
                    <Form.Control type="text" placeholder="Введіть варіант" onFocus={this.onVariantAdded}/>
                    </Form.Group>
                </span>]
            }
            return {
                type: picklistValue,
                displayOptions: displayOptions,
                optionsArr: optionsArr
            }
        })
    }

    onSaveTask = () => {
       // alert("ON SAVE TASK");
        this.props.onAddedTestTask({
            question: this.state.question,
            type: this.state.type,
            variants: [
                {id: 1, response: '4'},
                {id: 2, response: '2'},
                {id: 3, response: '3'}
            ],
            correctAnswer: this.state.correctAnswer
            }
        );
        this.setState(() => {
            return {
                question: null,
                type: SHORT_ANSWER,
                variants: [],
                correctAnswer: null,
                displayOptions: false,
                optionsArr: []
            }
        })
    }

    onQuestionChange = (event) => {
        this.setState(() => {
            return {
                question: event.target.value
            }
        })
    }

    onCorrectAnswerChange = (event) => {
        this.setState(() => {
            return {
                correctAnswer: event.target.value
            }
        })
    }

    onVariantAdded = (event) => {
        console.log("onVariantAdded");
        console.log('event. name : ', event.target.value);
        console.log('event. key : ' + event.target.key);
            this.setState(({optionsArr}) => {
                return {
                    optionsArr: [...optionsArr, <span key={optionsArr.length + 1}>
                <Form.Group>
                    <Form.Control type="text" placeholder="Введіть варіант" onFocus={this.onVariantAdded}/>
                    </Form.Group>
                </span>]
                }
            })
    }

    render() {
        return (
            <div>
                <Card text='dark' className="margin-2">
                    <Card.Header>
                        <Form.Group>
                            <Form.Control type="text" placeholder="Введіть запитання" onChange={this.onQuestionChange}/>
                        </Form.Group>
                    </Card.Header>
                    <Card.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Оберіть тип тестового завдання</Form.Label>
                                <Form.Control as="select" onChange={this.onchangePicklist}>
                                    <option>Коротка відповідь</option>
                                    <option>З вибором одного правильного варіанту</option>
                                    <option>З вибором декількох правильних варіантів</option>
                                </Form.Control>
                            </Form.Group>
                            {this.state.displayOptions ? <span>{this.state.optionsArr}</span> : <span></span>}
                        </Form>
                    </Card.Body>
                    <Card.Footer className="light-green-background">
                        <Form.Group>
                            <Form.Control type="text" placeholder="Ведіть правильну відповідь"
                                          onChange={this.onCorrectAnswerChange}/>
                        </Form.Group>
                    </Card.Footer>
                </Card>
                <div className="margin-2"><Button variant="success" onClick={this.onSaveTask}>Додати</Button></div>
            </div>
        )
    }
}

export default TestTaskCreate;