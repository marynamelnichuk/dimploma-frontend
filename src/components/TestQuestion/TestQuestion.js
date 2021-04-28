import React from "react";
import TestWithChoices from "../TestWithChoices/TestWithChoices";
import TestWithShortAnswer from "../TestWithShortAnswer/TestWithShortAnswer";
import {SHORT_ANSWER, MULTIPLE_CHOICE, SINGLE_CHOICE} from "../Constants/Constants";
import './TestQuestion.css';

const TestQuestion = (props) => {

    const initTest = (test) => {
        if(test.type === MULTIPLE_CHOICE){
            return <TestWithChoices viewMode={props.viewMode} test={test} onOptionSelected={props.onTestTaskFilled}/>
        }
        if(test.type === SINGLE_CHOICE){
            return <TestWithChoices viewMode={props.viewMode} test={test} onOptionSelected={props.onTestTaskFilled}/>
        }
        if(test.type === SHORT_ANSWER){
            return <TestWithShortAnswer {...test} viewMode={props.viewMode}  onAnswerChanged={props.onTestTaskFilled}/>
        }
    }

    return (
        <div className="test-question">
            {initTest(props)}
        </div>
    )
}

export default TestQuestion;