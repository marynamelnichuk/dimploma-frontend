import React from "react";
import {Card, Col, Form, Row} from 'react-bootstrap';
import '../Global styles.css';

const TestWithShortAnswer = ({question, id, correctOption, mark, onAnswerChanged, viewMode}) => {

    const onAnswerChange = (event) => {
        const answer = event.target.value
        onAnswerChanged(id, answer);
    }

    return (
        <div>
            <Row>
                <Col>
                    <div className="float-right pb-3">Оцінка за правильне проходження: {mark} </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Card>
                        <div>
                            <Card.Header className={viewMode ? "" : "checkbox-test-header"}> {question} </Card.Header>
                            <Card.Body>
                                <div key={id}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Ваша відповідь:</Form.Label>
                                        <Form.Control placeholder="Введіть відповідь" onChange={onAnswerChange}
                                                      disabled={viewMode}/>
                                    </Form.Group>
                                </div>
                            </Card.Body>
                            {correctOption ? <Card.Footer className="light-green-background">
                    <span>
                        <span className="correct-answer">Правильна відповідь: </span>
                        {correctOption}</span>
                            </Card.Footer> : <span/>}
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default TestWithShortAnswer;