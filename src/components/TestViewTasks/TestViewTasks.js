import React from "react";
import '../Global styles.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import './TestViewTasks.css';

export default class TestViewTasks extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/1/tests/${this.props.match.params.testId}`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        testInfo: data
                    }
                });
            });
        fetch(`http://localhost:8080/tests/${this.props.match.params.testId}/testTasks`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    const testTasks = data.map(elem => {
                        return {
                            id: elem.id,
                            question: elem.testBaseTaskDTO.question,
                            type: elem.testBaseTaskDTO.type,
                            mark: elem.mark,
                            options: elem.testBaseTaskDTO.options
                        }
                    });
                    return {
                        testTasks: testTasks
                    }
                });
            });

        /*fetch(`http://localhost:8080/${this.props.match.params.testCardId}/testBaseTasks`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.setState(({testBaseTasks}) => {
                        return {
                            testBaseTasks: data
                        }
                    });
                });*/
    }

    state = {
        testInfo: undefined,
        testTasks: [
                /*{
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
                    correctAnswer: 'Поліморфізм'}*/
        ],
        addNewTestTask: false
    }

    onAddNewTask = () => {
        this.setState(({addNewTestTask}) => {
            return {
                addNewTestTask: !addNewTestTask
            }
        });
    }


    render() {
        const {testInfo} = this.state;
        const testTasks = this.state.testTasks.map(test => {
            return <div>
                <TestQuestion key={test.id} viewMode={true} {...test} />
            </div>
        });
        return (
            <div className="container-inner-padding">
                {!this.state.testInfo ? <div>Loading...</div> :
                    <div>
                        <h2 className='pb-2'>{testInfo.name}</h2>
                        <p className="category-font">Кількість завдань: {testInfo.tasksNumber}</p>
                        <p className="category-font">Загальна оцінка: {testInfo.totalMark}</p>
                        <p className="category-font">База тестових завдань: {testInfo.testBaseName}</p>
                        <hr/>
                        {testTasks}
                    </div>}
            </div>
        )
    }
}




/*
*
* {!this.state.testBaseInfo ? <div>Loading...</div> :
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
* */