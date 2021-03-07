import React from 'react';
import './TestWithChoices.css';
import {Card} from 'react-bootstrap';
import {MULTIPLE_CHOICE, SINGLE_CHOICE} from "../Constants/Constants";

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
            <Card>
                <div>
                    <Card.Header className="checkbox-test-header"> {test.question} </Card.Header>
                    <Card.Body>
                        <div key={test.id}>
                            <div>
                                {test.variants.map(variant =>
                                    <div key={variant.id} className="checkbox-test-variant">
                                        <input type={testType} id={variant.id} name={test.id}
                                               defaultChecked={false}
                                               onChange={() => this.onOptionSelect(variant.id)}/>
                                        <label htmlFor={variant.id}
                                               className="checkbox-test-label">{variant.response}</label>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        );
    }
}

export default TestWithChoices;