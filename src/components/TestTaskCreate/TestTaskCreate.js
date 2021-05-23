import React from "react";
import {Form, Card, Button, Row, Col} from "react-bootstrap";
import {MULTIPLE_CHOICE, SHORT_ANSWER, SINGLE_CHOICE} from "../Constants/Constants";

class TestTaskCreate extends React.Component {

    state = {
        question: null,
        type: SHORT_ANSWER,
        variants: [],
        correctQuestion: null,
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
                optionsArr = [
                    {id: 0, option: ''}]
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
        /*
        * "question": "Hello?555",
        "type": "SHORT_ANSWER",
        "mark": 5,
        "options": null,
        "correctQuestion": "CORR"*/
        this.props.onAddedTestTask({
                question: this.state.question,
                type: this.state.type,
                mark: this.state.mark,
                options: this.state.optionsArr,
                correctQuestion: this.state.correctQuestion
            }
        );
        this.setState(() => {
            return {
                question: null,
                type: SHORT_ANSWER,
                variants: [],
                correctQuestion: null,
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

    onMarkChange = (event) => {
        this.setState(() => {
            return {
                mark: event.target.value
            }
        })
    }

    onCorrectAnswerChange = (event) => {
        this.setState(() => {
            return {
                correctQuestion: event.target.value
            }
        })
    }

    onVariantAdded = (event) => {
        this.setState(({optionsArr}) => {
            return {
                optionsArr: [...optionsArr,
                    {id: optionsArr.length+1, option: ''}]
            }
        })
    }

    handleChangeVariant = (event, id) => {
        this.setState(({optionsArr}) => {
            const index = optionsArr.findIndex((el) => el.id === id);
            const optionsArrBefore = optionsArr.slice(0, index);
            const optionsArrAfter = optionsArr.slice(index + 1, optionsArr.length);
            return {
                optionsArr : [...optionsArrBefore, {id: id, option: event.target.value}, ...optionsArrAfter]
            }
        })
    }

    onRemoveVariant = (event, id) => {
        this.setState(({optionsArr}) => {
            const index = optionsArr.findIndex((el) => el.id === id);
            const optionsArrBefore = optionsArr.slice(0, index);
            const optionsArrAfter = optionsArr.slice(index + 1, optionsArr.length);
            return {
                optionsArr : [...optionsArrBefore, ...optionsArrAfter]
            }
        })
    }

    render() {
        return (
            <div>
                <Card text='dark' className="margin-2">
                    <Card.Header>
                        <Form.Group>
                            <Form.Control required type="text"
                                          as="textarea" rows={1}
                                          placeholder="Введіть запитання" onChange={this.onQuestionChange}/>
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
                            {this.state.displayOptions ? <div className="mr-3 ml-3">
                                <div>{this.state.optionsArr.map(
                                    (elem) => {
                                        return (
                                        <span key={elem.id}>
                                            <Row>
                                            <Col xs="10"><Form.Group>
                                                <Form.Control required type="text"
                                                              as="textarea" rows={1} placeholder="Введіть варіант"
                                                onChange={(event) => this.handleChangeVariant(event, elem.id)}/>
                                                </Form.Group></Col>
                                            <Col xs="2"><Button variant="light" onClick={(event) => this.onRemoveVariant(event, elem.id)}>Видалити</Button>
                                            </Col>
                                            </Row>
                                        </span>
                                    )}
                                )}</div>
                                <div><Button variant="light" onClick={this.onVariantAdded}>Додати варіант</Button></div>
                            </div> : <span></span>}
                        </Form>
                    </Card.Body>
                    <Card.Footer className="light-green-background">
                        <Form.Group>
                            <Form.Label>Правильна відповідь:</Form.Label>
                            <Form.Control required type="text"
                                          as="textarea" rows={1} placeholder="Ведіть правильну відповідь"
                                          onChange={this.onCorrectAnswerChange}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Оцінка:</Form.Label>
                            <Form.Control required type="number"
                                          style={{width: "25%"}}
                                          placeholder="Ведіть оцінку"
                                          onChange={this.onMarkChange}/>
                        </Form.Group>
                    </Card.Footer>
                </Card>
                <div className="margin-2"><Button variant="success" onClick={this.onSaveTask}>Додати</Button></div>
            </div>
        )
    }
}

export default TestTaskCreate;