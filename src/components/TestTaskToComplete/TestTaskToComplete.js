import React from "react";
import '../Global styles.css';
import './TestTaskToComplete.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button} from "react-bootstrap";
import {FINISH_TEST_BUTTON_LABEL, SHORT_ANSWER} from "../Constants/Constants";

class TestTaskToComplete extends React.Component {

    state = {
        testTitle: 'Тест перевірки знань ООП',
        tests: [
            {
                id: 1, question: 'Що описує набір комп\'ютерних програм та структур даних, що використовують модель віртуальної машини для виконання інших комп\'ютерних програм у Java?',
                type: 'SINGLE_CHOICE',
                variants: [{id: 11, response: 'JDK'}, {id: 12, response: 'JVM'}, {id: 13, response: 'JRE'}]
            },
            {
                id: 2, question: 'До принципів ООП відносять:', type: 'MULTIPLE_CHOICE',
                variants: [
                    {id: 1, response: 'Абстракція'}, {id: 2, response: 'Орієнтованість'}, {id: 3, response: 'Оверайдінг'},
                    {id: 4, response: 'Поліморфізм'}
                ]
            },
            {id: 3, question: 'Концепція в програмуванні та теорії типів, в основі якої лежить використання єдиного інтерфейсу для різнотипних сутностей, це - ', type: 'SHORT_ANSWER',}
            /*{
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
        console.log('onOptionSelected testAnswers : ', this.state.testAnswers);
    }

    onTestTaskFilled = (testId, answer) => {
        this.setState(({testAnswers}) => {
            const indexTestAnswer = testAnswers.findIndex((el) => el.testId === testId);
            let elem = undefined;
            if (indexTestAnswer !== undefined) {
                elem = testAnswers[indexTestAnswer];
            }
            const newTestAnswer = {
                testId: testId,
                answer: answer
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


        const tests = this.state.tests;
        const testQuestions = tests.map(test => {
            return <TestQuestion key={test.id} viewMode={false} {...test} onTestTaskFilled={this.onTestTaskFilled}/>
        });

        return (
            <div className="container-inner">
                <div className="nav-item-label">{this.state.testTitle}</div>
                {testQuestions}
                <Button as="input" type="button" className="float-right" value={FINISH_TEST_BUTTON_LABEL} onClick={this.onFinishTestTask}/>
            </div>
        )
    }
}

export default TestTaskToComplete;