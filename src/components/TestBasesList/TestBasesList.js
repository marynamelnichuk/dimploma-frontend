import React from "react";
import './TestBasesList.css'
import {Button, Row, Col} from 'react-bootstrap';
import {IoAdd} from "react-icons/io5";
import TestBaseCard from "../TestBaseCard/TestBaseCard";
import '../Global styles.css';
import TestBaseCreateForm from "../TestBaseCreateForm/TestBaseCreateForm";

export default class TestBasesList extends React.Component {

    componentDidMount() {
        fetch('http://localhost:8080/1/testbases')
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
                        testBases: testBasesToSet
                    }
                });
            });
    }

    state = {
        testBases: [
            /*{id: '1', title: 'Geography Test', description: 'Some description', createdDate: '2020-12-28'},
            {id: '2', title: 'Geography Test2', description: 'Some description2', createdDate: '2021-12-28'},
            {id: '3', title: 'Geography Test3', description: 'Some description3', createdDate: '2021-12-28'},
            {id: '4', title: 'Geography Test4', description: 'Some description4', createdDate: '2021-12-28'}*/
        ],
        addTestBase: false
    }

    onDeleteTestBase = (testBaseIdToDelete) => {
        this.setState(({testBases}) => {
            const index = testBases.findIndex((el) => el.id === testBaseIdToDelete);
            const testBasesBefore = testBases.slice(0, index);
            const testBasesAfter = testBases.slice(index + 1, testBases.length);
            return {
                testBases: [...testBasesBefore, ...testBasesAfter]
            }
        });
    }

    onAddTestBase = (testBase) => {
        /*const testBaseToAdd = {
            id: this.state.testBases.length + 1,
            title: testBase.title,
            description: testBase.description,
            createdDate: testBase.createdDate
        };   */
        const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({name: testBase.title,
                    category: testBase.category,
                    description: testBase.description,
                })
            };
            fetch('http://localhost:8080/1/testbases', requestOptions)
                .then(response => response.json())
                .then(data => this.setState(({testBases, addTestBase}) => {
                                  return {
                                      testBases: [...testBases, {
                                          ...data,
                                          title: data.name
                                      }],
                                      addTestBase: !addTestBase
                                  }
                              }));
        /*this.setState(({testBases, addTestBase}) => {
            return {
                testBases: [...testBases, testBaseToAdd],
                addTestBase: !addTestBase
            }
        });   */
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
                            <h2>Tests Bases</h2>
                            <p>Welcome to the tests manager. Create new tests.
                                Manage existing ones. Edit, delete, copy, filter and group them into categories.
                            </p>
                            <div className="panel-creating-tes-base">
                                <Button variant="primary" size="lg" active onClick={this.onAddTestBaseClicked}>
                                    <Row className="margin-auto">
                                        <Col xs="10" className="margin-auto">New test base</Col>
                                        <Col xs="2"><IoAdd size={28}/></Col>
                                    </Row>
                                </Button>
                            </div>
                            <hr/>
                            <div className="display-flex">
                                {testBases}
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }
}