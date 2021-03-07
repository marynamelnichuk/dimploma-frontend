import React from "react";
import {Card, Form} from 'react-bootstrap';

const TestWithShortAnswer = ({question, id, onAnswerChanged}) => {

    const onAnswerChange = (event) => {
        const answer = event.target.value
        onAnswerChanged(id, answer);
    }

    return (
        <Card>
            <div>
                <Card.Header className="checkbox-test-header"> {question} </Card.Header>
                <Card.Body>
                    <div key={id}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your answer:</Form.Label>
                            <Form.Control placeholder="Your answer" onChange={onAnswerChange}/>
                        </Form.Group>
                    </div>
                </Card.Body>
            </div>
        </Card>
    );
}

export default TestWithShortAnswer;