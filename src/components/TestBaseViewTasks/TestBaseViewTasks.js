import React from "react";
import '../Global styles.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button, Col, Row} from "react-bootstrap";
import {IoAdd} from "react-icons/io5";
import TestTaskCreate from "../TestTaskCreate/TestTaskCreate";
import './TestBaseViewTasks.css';

export default class TestBaseViewTasks extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/${this.props.userId}/testbases/${this.props.match.params.testCardId}`)
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

        fetch(`http://localhost:8080/${this.props.match.params.testCardId}/testBaseTasks`)
            .then(response => response.json())
            .then(data => {
                this.setState(({testBaseTasks}) => {
                    return {
                        testBaseTasks: data
                    }
                });
            });
    }

    state = {
        testBaseInfo: undefined,
        testBaseTasks: [],
        addNewTestTask: false
    }

    onAddNewTask = () => {
        this.setState(({addNewTestTask}) => {
            return {
                addNewTestTask: !addNewTestTask
            }
        });
    }

    onAddedTestTask = (newTestTask) => {
        const {options, ...infoTestTask} = newTestTask;
        let optionsToSend = [];
        options.forEach(elem => {
            if (newTestTask.correctOption !== elem.option) {
                optionsToSend.push(elem.option)
            }
        });
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                ...infoTestTask,
                options: optionsToSend,
            })
        };
        fetch(`http://localhost:8080/${this.props.match.params.testCardId}/testBaseTasks`, requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState(({testBaseTasks}) => {
                    return {
                        testBaseTasks: [{
                            id: data.id,
                            ...newTestTask
                        }, ...testBaseTasks],
                        addNewTestTask: false
                    }
                });
            });
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
                        <h2 className='pb-2'>{testBaseInfo.title}</h2>
                        <p className="category-font">Категорія: {testBaseInfo.category}</p>
                        <p className="category-font">Дата створення: {testBaseInfo.createdDate}</p>
                        <p>{testBaseInfo.description}</p>
                        <div className="panel-creating-tes-base">
                            <Button variant="primary" size="lg" active onClick={this.onAddNewTask}>
                                <Row className="margin-auto">
                                    <Col xs="10" className="margin-auto">Нове тестове завдання</Col>
                                    <Col xs="2"><IoAdd size={28}/></Col>
                                </Row>
                            </Button>
                        </div>
                        <hr/>
                        {addNewTestTask ? <TestTaskCreate onAddedTestTask={this.onAddedTestTask}/> : <span/>}
                        {testBaseTasks.length !== 0 ? testBaseTasks : <p>Не створено баз тетсових завдань</p>}
                    </div>}
            </div>
        )
    }
}
