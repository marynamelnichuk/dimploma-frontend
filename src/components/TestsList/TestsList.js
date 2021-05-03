import React from "react";
import './TestsList.css';
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';
import {withRouter} from "react-router-dom";
import TestCreateForm from "../TestCreateForm/TestCreateForm";
import {IoTrashSharp} from "react-icons/io5";

class TestsList extends React.Component {

    state = {
        tests: [
            {id: '1', testName: 'Тест з георграфії на 8 завдань', tasksNumber: 8,
                testBase: 'База тестових завдань з географії', totalMark: 10},
            {id: '2', testName: 'Тест з георграфії на 20 завдань', tasksNumber: 20,
                testBase: 'База тестових завдань з географії', totalMark: 40},
            {id: '3', testName: 'Тест перевірки знань Java', tasksNumber: 15,
                testBase: 'База тестових завдань для перевірки знання Java', totalMark: 100},
            {id: '4', testName: 'Тест перевірки знань Python', tasksNumber: 20,
                testBase: 'База тестових завдань для перевірки знання Python', totalMark: 200},
                    ],
        addTest: false
    }

    onClickRef = (testTaskId) => {
        const testTask = this.state.tests.find(testTask => testTask.id === testTaskId);
        console.log('clicked testTask ', testTask);
        this.props.history.push(`/main/tasks/${testTaskId}`);
    }

    onAddTest = () => {
        this.setState(({addTest}) => {
            return {
                addTest: !addTest
            }
        });
    }

    onAddedTest = (test) => {
        this.setState(({tests, addTest}) => {
            return {
                tests: [...tests, test],
                addTest: !addTest
            }
        });
        console.log('ON ADDED');
    }

    render() {
        /*href={`http://localhost:3000/main/tasklist/${testTask.id}`} o*/
        const testTasks = this.state.tests.map((test, index=1) => {
            return (
                <tr>
                    <td>{index++}</td>
                    <td><a onClick={() => this.onClickRef(test.id)}>
                        {test.testName}
                    </a></td>
                    <td>{test.tasksNumber}</td>
                    <td>{test.testBase}</td>
                    <td>{test.totalMark}</td>
                    <td>
                        <Button variant="secondary" className="ml-3">
                            <IoTrashSharp/>
                        </Button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="container-inner-padding aliceblue-back">

                {this.state.addTest ? <TestCreateForm onAddTest={this.onAddedTest}/> :
                    <span><Row className="mb-3">
                    <Col><h2>Тести</h2></Col>
                    <Col><Button variant="primary" size="md" active className="float-right"
                    onClick={this.onAddTest} >
                        <Row className="margin-auto">
                            Створити тест
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered hover size="sm" className="back-white">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Назва тесту</th>
                        <th>Кількість завдань</th>
                        <th>Тестова база</th>
                        <th>Максимальна оцінка</th>
                        <th>Видалити</th>
                    </tr>
                    </thead>
                    <tbody>
                        {testTasks}
                    </tbody>
                </Table>
                        </span>}
            </div>
        )
    }

}

export default withRouter(TestsList);