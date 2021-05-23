import React from "react";
import '../Global styles.css';
import './TestTaskToComplete.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button} from "react-bootstrap";
import {FINISH_TEST_BUTTON_LABEL, SHORT_ANSWER} from "../Constants/Constants";

class TestTaskToComplete extends React.Component {

    componentDidMount() {
        /*fetch(`http://localhost:8080/1/tests/${this.props.match.params.testId}`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        testInfo: data
                    }
                });
            });*/
        fetch(`http://localhost:8080/testsToComplete/${this.props.match.params.assignmentId}`)
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
        testName: 'Тест перевірки знань ООП',
        testDescription: 'Опис тест перевірки знань ООП....',
        testTasks: [
            /*{
                id: 1, question: 'Що описує набір комп\'ютерних програм та структур даних, що використовують модель віртуальної машини для виконання інших комп\'ютерних програм у Java?',
                type: 'SINGLE_CHOICE', mark: 20,
                options: [{id: 11, option: 'JDK'}, {id: 12, option: 'JVM'}, {id: 13, option: 'JRE'}]
            },
            {
                id: 2, question: 'До принципів ООП відносять:', type: 'MULTIPLE_CHOICE', mark: 25,
                options: [
                    {id: 1, option: 'Абстракція'}, {id: 2, option: 'Орієнтованість'}, {id: 3, option: 'Оверайдінг'},
                    {id: 4, option: 'Поліморфізм'}
                ]
            },
            {id: 3, mark: 15, question: 'Концепція в програмуванні та теорії типів, в основі якої лежить використання єдиного інтерфейсу для різнотипних сутностей, це - ', type: 'SHORT_ANSWER',}
            *//*{
                id: 1, question: 'What time ?', type: 'SINGLE_CHOICE',
                variants: [{id: 11, response: '1'}, {id: 12, response: '2'}, {id: 13, response: '3'}]
            },
            {
                id: 2, question: 'Checnk!', type: 'MULTIPLE_CHOICE',
                variants: [
                    {id: 1, response: '4'}, {id: 2, response: '2'}, {id: 3, response: '3'}
                ],
            },
            {id: 3, question: 'What is the capital of Great Britain?', type: 'SHORT_ANSWER'}*/
        ],
        testAnswers: []
    }

    onFinishTestTask = () => {
        //console.log('onOptionSelected testAnswers : ', this.state.testAnswers);
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.testAnswers)
        };
        fetch(`http://localhost:8080/testsToComplete/${this.props.match.params.assignmentId}`,
            requestOptions)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {}
                });
            });
    }

    onTestTaskFilled = (testId, answer) => {
        this.setState(({testAnswers}) => {
            const indexTestAnswer = testAnswers.findIndex((el) => el.testTaskId === testId);
            let elem = undefined;
            if (indexTestAnswer !== undefined) {
                elem = testAnswers[indexTestAnswer];
            }
            const newTestAnswer = {
                testTaskId: testId,
                answers: answer
            }
            if (elem === undefined) {
                return {
                    testAnswers: [...testAnswers, newTestAnswer]
                }
            } else {
                const testAnswersBefore = testAnswers.slice(0, indexTestAnswer );
                const testAnswersAfter = testAnswers.slice(indexTestAnswer  + 1, testAnswers.length);
                const newCheckedVariants = [...testAnswersBefore, newTestAnswer, ...testAnswersAfter];
                return {
                    testAnswers: newCheckedVariants
                }
            }
        })
    }

    render() {

        const testTasks = this.state.testTasks;
        const testQuestions = testTasks.map(test => {
            return <TestQuestion key={test.id} viewMode={false} {...test} onTestTaskFilled={this.onTestTaskFilled}/>
        });

        return (
            <div className="container-inner">
                <h1>{this.state.testName}</h1>
                <div className="nav-item-label">{this.state.testDescription}</div>
                {testQuestions}
                <Button as="input" type="button" className="float-right" value={FINISH_TEST_BUTTON_LABEL} onClick={this.onFinishTestTask}/>
            </div>
        )
    }
}

export default TestTaskToComplete;