import React from "react";
import {Card, Form} from 'react-bootstrap';
import '../Global styles.css';

const TestWithShortAnswer = ({question, id, correctQuestion, onAnswerChanged, viewMode}) => {

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
                            <Form.Label>Ваша відповідь:</Form.Label>
                            <Form.Control placeholder="Введіть відповідь" onChange={onAnswerChange} disabled={viewMode}/>
                        </Form.Group>
                    </div>
                </Card.Body>
                {correctQuestion ? <Card.Footer className="light-green-background">
                    <span>
                        <span className="correct-answer">Правильна відповідь: </span>
                        {correctQuestion}</span>
                </Card.Footer> : <span/>}
            </div>
        </Card>
    );
}

export default TestWithShortAnswer;