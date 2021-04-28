import React from "react";
import './TestTaskList.css';
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';
import {withRouter} from "react-router-dom";

class TestTaskList extends React.Component {

    state = {
        testTasks: [
            {id: '1', testTaskName: 'Geography test', assignee: 'Maryna', dueDate: '07/04/2009'},
            {id: '2', testTaskName: 'Geography test2', assignee: 'Maryna', dueDate: '07/04/2011'},
            {id: '3', testTaskName: 'Geography test3', assignee: 'Maryna', dueDate: '07/04/2020'}
        ]
    }

    onClickRef = (testTaskId) => {
        const testTask = this.state.testTasks.find(testTask => testTask.id === testTaskId);
        console.log('clicked testTask ', testTask);
        this.props.history.push(`/main/tasks/${testTaskId}`);
    }

    render() {
        /*href={`http://localhost:3000/main/tasklist/${testTask.id}`} o*/
        const testTasks = this.state.testTasks.map((testTask, index=1) => {
            return (
                <tr>
                    <td>{index++}</td>
                    <td><a onClick={() => this.onClickRef(testTask.id)}>
                        {testTask.testTaskName}
                    </a></td>

                    <td>{testTask.assignee}</td>
                    <td>{testTask.dueDate}</td>
                </tr>
            )
        })

        return (
            <div className="container-inner-padding">
                <Row className="mb-3">
                    <Col><h2>Test Tasks List</h2></Col>
                    <Col><Button variant="primary" size="md" active className="float-right">
                        <Row className="margin-auto">
                            Create test task
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered hover size="sm">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Test</th>
                        <th>Assignee</th>
                        <th>Due date</th>
                    </tr>
                    </thead>
                    <tbody>
                        {testTasks}
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default withRouter(TestTaskList);