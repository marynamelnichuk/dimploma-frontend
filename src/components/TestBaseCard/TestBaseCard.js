import React from 'react';
import {Button, Card, Row, Col} from "react-bootstrap";
import {IoTrashSharp} from "react-icons/io5";
import '../Global styles.css';
import './TestBaseCard.css';
import {withRouter} from "react-router-dom";

const TestBaseCard = (props) => {

    const {id, createdDate, title, description, onDelete} = props;

    const onTestCardClick = (testCardId) => {
        props.history.push(`/main/testBases/${testCardId}`);
    }

    return (
        <Card key={id} text='dark' className="mb-2 test-base-card-container">
            <Card.Header>
                <Row className="display-flex">
                    <Col xs="10" className="margin-auto">Створено: {createdDate}</Col>
                    <Col xs="2">
                        <Button variant="secondary" onClick={onDelete}>
                            <IoTrashSharp/>
                        </Button>
                    </Col>
                </Row>
            </Card.Header>
            <Card.Body onClick={() => onTestCardClick(id)}>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default withRouter(TestBaseCard);