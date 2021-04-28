import React from "react";
import {Form, Card, Button, Row, Col} from "react-bootstrap";
import {IoTrashSharp} from "react-icons/io5";

const TestTaskCreate = () => {
    return (
        <div>
            <Card text='dark' className="margin-2">
                <Card.Header>
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter quetion" />
                    </Form.Group>
                </Card.Header>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Example select</Form.Label>
                            <Form.Control as="select">
                                <option>Short answer</option>
                                <option>Single choice</option>
                                <option>Multiple choice</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="light-green-background">
                    <Form.Group>
                        <Form.Control type="text" placeholder="Enter correct answer" />
                    </Form.Group>
                </Card.Footer>
            </Card>
            <div className="margin-2"> <Button variant="success">Save</Button></div>
        </div>
    )

}

export default TestTaskCreate;