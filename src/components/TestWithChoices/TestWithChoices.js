import React from 'react';
import './TestWithChoices.css';
import {Card} from 'react-bootstrap';
import {MULTIPLE_CHOICE, SINGLE_CHOICE} from "../Constants/Constants";
import {Row, Col} from "react-bootstrap";

class TestWithChoices extends React.Component {

    state = {
        checkedVariants: []
    };

    onOptionSelect = (variantId) => {
        if (this.props.test.type === SINGLE_CHOICE) {
            this.props.onOptionSelected(this.props.test.id, [variantId]);
        } else {
            this.setState(({checkedVariants}) => {
                const index = checkedVariants.findIndex((el) => el === variantId);
                let elem = undefined;
                if (index !== undefined) {
                    elem = checkedVariants[index];
                }
                if (elem === undefined) {
                    const newCheckedVariants = [...checkedVariants, variantId];
                    this.props.onOptionSelected(this.props.test.id, newCheckedVariants);
                    return {
                        checkedVariants: newCheckedVariants
                    }
                } else {
                    const variantsBefore = checkedVariants.slice(0, index);
                    const variantsAfter = checkedVariants.slice(index + 1, checkedVariants.length);
                    const newCheckedVariants = [...variantsBefore, ...variantsAfter];
                    this.props.onOptionSelected(this.props.test.id, newCheckedVariants);
                    return {
                        checkedVariants: newCheckedVariants
                    }
                }
            });
        }
    }

    render() {
        const {test} = this.props;
        const testType = test.type === MULTIPLE_CHOICE ? "checkbox" : "radio";

        return (
            <div>
                <Row>
                    <Col>
                        <div className="float-right pb-3">Оцінка за правильне проходження: {test.mark} </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <div>
                                <Card.Header
                                    className={this.props.viewMode ? "" : "checkbox-test-header"}> {test.question} </Card.Header>
                                <Card.Body>
                                    <div key={test.id}>
                                        <div>
                                            {test.options.map(option =>
                                                <div key={option.id} className="checkbox-test-variant">
                                                    <input type={testType} id={option.id} name={test.id}
                                                           defaultChecked={false}
                                                           disabled={this.props.viewMode}
                                                           onChange={() => this.onOptionSelect(option.id)}/>
                                                    <label htmlFor={option.id}
                                                           className="checkbox-test-label">{option.option}</label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </Card.Body>
                                {test.correctQuestion ? <Card.Footer className="light-green-background">
                    <span>
                        <span className="correct-answer">Правильна відповідь: </span>
                        {test.correctQuestion}</span>
                                </Card.Footer> : <span/>}
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default TestWithChoices;