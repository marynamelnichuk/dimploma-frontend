import React from "react";
import '../Global styles.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button, Col, Row} from "react-bootstrap";
import {IoAdd} from "react-icons/io5";
import TestTaskCreate from "../TestTaskCreate/TestTaskCreate";
import './TestBaseViewTasks.css';

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
                    id: 1, question: 'Що описує набір комп\'ютерних програм та структур даних, що використовують модель віртуальної машини для виконання інших комп\'ютерних програм у Java?',
                    type: 'SINGLE_CHOICE',
                    variants: [{id: 11, response: 'JDK'}, {id: 12, response: 'JVM'}, {id: 13, response: 'JRE'}],
                    correctAnswer: 'JVM'
                },
                {
                    id: 2, question: 'До принципів ООП відносять:', type: 'MULTIPLE_CHOICE',
                    variants: [
                        {id: 1, response: 'Абстракція'}, {id: 2, response: 'Орієнтованість'}, {id: 3, response: 'Оверайдінг'},
                        {id: 4, response: 'Поліморфізм'}
                    ], correctAnswer: 'Абстракція, Поліморфізм'
                },
                {id: 3, question: 'Концепція в програмуванні та теорії типів, в основі якої лежить використання єдиного інтерфейсу для різнотипних сутностей, це - ', type: 'SHORT_ANSWER',
                    correctAnswer: 'Поліморфізм'}
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

    onAddedTestTask = (newTestTask) => {
        this.setState(({testBaseTasks}) => {
            return {
                testBaseTasks: [{id: testBaseTasks.length+1,
                    ...newTestTask}, ...testBaseTasks],
                addNewTestTask: false
            }
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
                        {testBaseTasks}
                    </div>}
            </div>
        )
    }
}
