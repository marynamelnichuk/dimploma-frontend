import React from "react";
import '../Global styles.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import './TestViewTasks.css';

export default class TestViewTasks extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/1${this.props.userId}/tests/${this.props.match.params.testId}`)
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
    }

    state = {
        testInfo: undefined,
        testTasks: [],
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