import React from "react";
import './TestBasesList.css'
import {Button, Row, Col} from 'react-bootstrap';
import {IoAdd} from "react-icons/io5";
import TestBaseCard from "../TestBaseCard/TestBaseCard";
import '../Global styles.css';
import TestBaseCreateForm from "../TestBaseCreateForm/TestBaseCreateForm";

export default class TestBasesList extends React.Component {

    componentDidMount() {
        fetch(`http://localhost:8080/${this.props.userId}/testbases`)
            .then(response => response.json())
            .then(data => {
                this.setState(({testBases}) => {
                    const testBasesToSet = data.map(elem => {
                        return {
                            ...elem,
                            title: elem.name
                        }
                    })
                    return {
                        testBases: testBasesToSet,
                        isEmpty: testBasesToSet.length === 0
                    }
                });
            });
    }

    state = {
        testBases: [],
        addTestBase: false,
        isEmpty: true
    }

    onDeleteTestBase = (testBaseIdToDelete) => {
        fetch(`http://localhost:8080/${this.props.userId}/testbases/${testBaseIdToDelete}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'}
        })
            .then(() =>
                this.setState(({testBases}) => {
                    const index = testBases.findIndex((el) => el.id === testBaseIdToDelete);
                    const testBasesBefore = testBases.slice(0, index);
                    const testBasesAfter = testBases.slice(index + 1, testBases.length);
                    return {
                        testBases: [...testBasesBefore, ...testBasesAfter]
                    }
                })
            );
    }

    onAddTestBase = (testBase) => {
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: testBase.title,
                category: testBase.category,
                description: testBase.description,
            })
        };
        fetch(`http://localhost:8080/${this.props.userId}/testbases`, requestOptions)
            .then(response => response.json())
            .then(data => this.setState(({testBases, addTestBase}) => {
                return {
                    testBases: [...testBases, {
                        ...data,
                        title: data.name
                    }],
                    isEmpty: false,
                    addTestBase: !addTestBase
                }
            }));
    }

    onAddTestBaseClicked = () => {
        this.setState(({addTestBase}) => {
            return {
                addTestBase: !addTestBase
            }
        });
    }

    render() {
        const testBases = this.state.testBases.map(testBase => {
            return <TestBaseCard key={testBase.id} {...testBase} onDelete={() => this.onDeleteTestBase(testBase.id)}/>
        });
        return (
            <div>
                {this.state.addTestBase ? <TestBaseCreateForm onAddTestBase={this.onAddTestBase}/> :
                    <div className="test-bases-container">
                        <div className="test-bases-container-inner">
                            <h2>Бази тестових завдань</h2>
                            <p>
                                На цій сторінці ви можете створювати та видаляти бази тестових завдань, для додавання
                                тестових завдань до конкретної бази клікніть по ній.
                            </p>
                            <div className="panel-creating-tes-base">
                                <Button variant="primary" size="lg" active onClick={this.onAddTestBaseClicked}>
                                    <Row className="margin-auto">
                                        <Col xs="10" className="margin-auto">Нова база</Col>
                                        <Col xs="2"><IoAdd size={28}/></Col>
                                    </Row>
                                </Button>
                            </div>
                            <hr/>
                            <div className="display-flex">
                                {this.state.isEmpty ? <p>У базі ще немає тестових завдань</p> : testBases}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}