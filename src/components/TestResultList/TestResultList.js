import React from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';
import {withRouter} from "react-router-dom";
import TestCreateForm from "../TestCreateForm/TestCreateForm";

class TestResultsList extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/${this.props.userId}/testResults`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    this.setState(() => {
                        return {
                            testResults: data
                        }
                    });
                }
            });
    }

    state = {
        testResults: [],
        addTest: false
    }

    onClickRef = (testTaskId) => {
        this.props.history.push(`/main/tasks/${testTaskId}`);
    }

    onAddedTest = (test) => {
        this.setState(({testResults, addTest}) => {
            return {
                testResults: [...testResults, test],
                addTest: !addTest
            }
        });
    }

    render() {
        const testTasks = this.state.testResults.map((test, index = 1) => {
            return (
                <tr>
                    <td>{++index}</td>
                    <td><a onClick={() => this.onClickRef(test.id)}>
                        {test.testName}
                    </a></td>
                    <td>{test.userEmail}</td>
                    <td>{test.mark}</td>
                    <td>{test.maxMark}</td>
                    <td>{test.completedDate}</td>
                    <td>
                        <Button variant="primary" size="md" active className="ml-3">
                            <Row className="margin-auto">
                                Переглянути
                            </Row>
                        </Button>
                    </td>
                </tr>
            )
        })

        return (
            <div className="container-inner-padding aliceblue-back">

                {this.state.addTest ? <TestCreateForm onAddTest={this.onAddedTest}/> :
                    <span><Row className="mb-3">
                    <Col><h2>Результати проходження тестів</h2></Col>
                </Row>
                <Table striped bordered hover size="sm" className="back-white">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Назва тесту</th>
                        <th>Користувач</th>
                        <th>Оцінка</th>
                        <th>Максимальна оцінка</th>
                        <th>Дата проходження</th>
                        <th>Переглянути</th>
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

export default withRouter(TestResultsList);