import React from "react";
import '../Global styles.css';
import './TestTaskToComplete.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button} from "react-bootstrap";
import {FINISH_TEST_BUTTON_LABEL, SHORT_ANSWER} from "../Constants/Constants";

class TestTaskToComplete extends React.Component {

    state = {
        testTitle: 'Test Title',
        tests: [
            {
                id: 1, question: 'What time ?', type: 'SINGLE_CHOICE',
                variants: [{id: 11, response: '1'}, {id: 12, response: '2'}, {id: 13, response: '3'}]
            },
            {
                id: 2, question: 'Checnk!', type: 'MULTIPLE_CHOICE',
                variants: [
                    {id: 1, response: '4'}, {id: 2, response: '2'}, {id: 3, response: '3'}
                ],
            },
            {id: 3, question: 'What is the capital of Great Britain?', type: 'SHORT_ANSWER'}
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
                <p>{this.props.match.params.catId}</p>
                <div className="nav-item-label">{this.state.testTitle}</div>
                {testQuestions}
                <Button as="input" type="button" value={FINISH_TEST_BUTTON_LABEL} onClick={this.onFinishTestTask}/>
            </div>
        )
    }
}

export default TestTaskToComplete;