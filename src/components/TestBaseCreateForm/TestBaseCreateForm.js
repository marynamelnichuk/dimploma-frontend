import React from "react";
import {Form, Card, Button} from "react-bootstrap";
import '../Global styles.css';
import './TestBaseCreateForm.css';

class TestBaseCreateForm extends React.Component {

    state = {
        title: '',
        description: '',
        category: ''
    };

    /*formatDate = ()  => {
        let d = new Date(),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }*/

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

    render() {
        return (
            <div className="blue-back">
                <div className="test-base-create-form">
                    <h2>Creating a new test base</h2>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label column sm="2">Created </Form.Label>
                                    <Form.Control type="text" readOnly disabled defaultValue={new Date().toString()}/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Name" onChange={this.onTitleCahnge} />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control type="text" placeholder="Category" onChange={this.onCategoryChange}/>
                                </Form.Group>
                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={5} onChange={this.onDescriptionChange}/>
                                </Form.Group>
                                <Button variant="primary" size="lg" active className="next-button" onClick={this.onSubmit}>
                                    NEXT
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        );
    }
}

export default TestBaseCreateForm;