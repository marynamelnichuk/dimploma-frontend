import React from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';
import {withRouter} from "react-router-dom";
import TestCreateForm from "../TestCreateForm/TestCreateForm";
import MyTestResults from "../MyTestResults/MyTestResults";

class MyResultsList extends React.Component {

    componentDidMount() {
        fetch('http://localhost:8080/1/testsAssignments/toComplete')
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        testsToComplete: data
                    }
                });
            });
    }


    state = {
        testsToComplete: [
           /* {id: 1, testName: 'Тест перевірки знань ООП', userEmail: 'mariia.petliakivska.kn.2017@lpnu.ua',
                dueDate: '2021-06-04', totalMark: 120},
            {id: 2, testName: 'Тест для підготовки до ЗНО з англійської', userEmail: 'mariia.petliakivska.kn.2017@lpnu.ua',
                dueDate: '2021-06-10', totalMark: 200},*/
        ],
        addTest: false
    }

    onClickRef = (testTaskId) => {
        const testTask = this.state.testsToComplete.find(testTask => testTask.id === testTaskId);
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
        this.setState(({testsToComplete, addTest}) => {
            return {
                testsToComplete: [...testsToComplete, test],
                addTest: !addTest
            }
        });
    }

    onStartTest = (testId) => {
        this.props.history.push(`/main/myresults/completeTest/${testId}`);
    }

    render() {
        /*href={`http://localhost:3000/main/tasklist/${testTask.id}`} o*/
        const testTasks = this.state.testsToComplete.map((test, index=1) => {
            return (
                <tr>
                    <td>{++index}</td>
                    <td><a onClick={() => this.onClickRef(test.id)}>
                        {test.testName}
                    </a></td>
                    <td>{test.userEmail}</td>
                    <td>{test.maxMark}</td>
                    <td>{test.dueDate}</td>
                    <td>
                        <Button variant="primary" size="md" active className="ml-3" onClick={
                            () => this.onStartTest(test.id)}>
                            <Row className="margin-auto">
                                Скласти
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
                    <Col><h2>Тести для проходження</h2></Col>
                </Row>
                <Table striped bordered hover size="sm" className="back-white">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Назва тесту</th>
                        <th>Призначено користувачем</th>
                        <th>Максимальна оцінка</th>
                        <th>Кінцевий термін</th>
                        <th>Скласти тест</th>
                    </tr>
                    </thead>
                    <tbody>
                        {testTasks}
                    </tbody>
                </Table>
                    <MyTestResults />
                    </span>}
            </div>
        )
    }

}

export default withRouter(MyResultsList);