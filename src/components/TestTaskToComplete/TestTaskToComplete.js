import React from "react";
import '../Global styles.css';
import './TestTaskToComplete.css';
import TestQuestion from "../TestQuestion/TestQuestion";
import {Button} from "react-bootstrap";
import {FINISH_TEST_BUTTON_LABEL} from "../Constants/Constants";

class TestTaskToComplete extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/testsToComplete/${this.props.match.params.assignmentId}/testInfo`)
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        testName: data.testName,
                        testDescription: data.testDescription
                    }
                });
            });
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
        testTasks: [],
        testAnswers: []
    }

    onFinishTestTask = () => {
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
                this.props.history.push(`/main/myResults`);
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
                const testAnswersBefore = testAnswers.slice(0, indexTestAnswer);
                const testAnswersAfter = testAnswers.slice(indexTestAnswer + 1, testAnswers.length);
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
                <Button as="input" type="button" className="float-right" value={FINISH_TEST_BUTTON_LABEL}
                        onClick={this.onFinishTestTask}/>
            </div>
        )
    }
}

export default TestTaskToComplete;