import React from "react";
import '../Global styles.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button, Col, Row} from "react-bootstrap";
import {IoAdd} from "react-icons/io5";
import TestTaskCreate from "../TestTaskCreate/TestTaskCreate";

export default class TestBaseViewTasks extends React.Component {

    componentDidMount() {
        console.log("3333333333333333");
        console.log(this.props.match.params.testCardId);

        fetch(`http://localhost:8080/1/testbases/${this.props.match.params.testCardId}`)
            .then(response => response.json())
            .then(data => {
                this.setState(({testBaseInfo}) => {
                    return {
                        testBaseInfo: {
                            title: data.name,
                            category: data.category,
                            description: data.description,
                            createdDate: data.createdDate
                        }
                    }
                });
            });
    }

    state = {
        testBaseInfo: undefined,
        testBaseTasks: [
                {
                    id: 1, question: 'What time ?', type: 'SINGLE_CHOICE',
                    variants: [{id: 11, response: '1'}, {id: 12, response: '2'}, {id: 13, response: '3'}],
                    correctAnswer: 'Correct answer222!'
                },
                {
                    id: 2, question: 'Checnk!', type: 'MULTIPLE_CHOICE',
                    variants: [
                        {id: 1, response: '4'}, {id: 2, response: '2'}, {id: 3, response: '3'}
                    ], correctAnswer: 'Correct answer222!'
                },
                {id: 3, question: 'What is the capital of Great Britain?', type: 'SHORT_ANSWER',
                    correctAnswer: 'Correct answer222!'}
        ],
        addNewTestTask: false
    }

    onAddNewTask = () => {
        this.setState(({addNewTestTask}) => {
            return {
                addNewTestTask: !addNewTestTask
            }
        });
        //alert('onAddNewTask')
    }

    render() {
        const {testBaseInfo, addNewTestTask} = this.state;
        const testBaseTasks = this.state.testBaseTasks.map(test => {
            return <div>
                <TestQuestion key={test.id} viewMode={true} {...test} onTestTaskFilled={this.onTestTaskFilled}/>
            </div>
        });
        return (
            <div className="container-inner-padding">
                {!this.state.testBaseInfo ? <div>Loading...</div> :
                    <div>
                        <h2>{testBaseInfo.title}</h2>
                        <p>Category: {testBaseInfo.category}</p>
                        <p>Created date: {testBaseInfo.createdDate}</p>
                        <p>{testBaseInfo.description}</p>
                        <div className="panel-creating-tes-base">
                            <Button variant="primary" size="lg" active onClick={this.onAddNewTask}>
                                <Row className="margin-auto">
                                    <Col xs="10" className="margin-auto">Add new test task</Col>
                                    <Col xs="2"><IoAdd size={28}/></Col>
                                </Row>
                            </Button>
                        </div>
                        <hr/>
                        {addNewTestTask ? <TestTaskCreate/> : <span/>}
                        {testBaseTasks}
                    </div>}
            </div>
        )
    }
}
