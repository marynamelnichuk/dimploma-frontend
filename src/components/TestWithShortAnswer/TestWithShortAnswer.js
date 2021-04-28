import React from "react";
import {Card, Form} from 'react-bootstrap';
import '../Global styles.css';

const TestWithShortAnswer = ({question, id, correctAnswer, onAnswerChanged, viewMode}) => {

    const onAnswerChange = (event) => {
        const answer = event.target.value
        onAnswerChanged(id, answer);
    }

    return (
        <Card>
            <div>
                <Card.Header className={viewMode ? "" : "checkbox-test-header"}> {question} </Card.Header>
                <Card.Body>
                    <div key={id}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your answer:</Form.Label>
                            <Form.Control placeholder="Your answer" onChange={onAnswerChange} disabled={viewMode}/>
                        </Form.Group>
                    </div>
                </Card.Body>
                {correctAnswer ? <Card.Footer className="light-green-background">
                    <span>
                        <span className="correct-answer">Correct answer: </span>
                        {correctAnswer}</span>
                </Card.Footer> : <span/>}
            </div>
        </Card>
    );
}

export default TestWithShortAnswer;