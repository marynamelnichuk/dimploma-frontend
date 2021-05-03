import React from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';

class RespondentsList extends React.Component {

    state = {
      respondents: [
          {id: 1, testLabel: 'My test', respondent: 'Sophia', dueDate: '07/04/2000', status: 'assigned', mark: 'none'},
          {id: 2, testLabel: 'My test', respondent: 'Sasha', dueDate: '07/04/2030', status: 'completed', mark: '10/15'}
      ]
    };


    render() {

        const respondents = this.state.respondents.map((respondent, index=1) => {
            return (
                <tr>
                    <td>{index++}</td>
                    <td>{respondent.testLabel}</td>
                    <td>{respondent.respondent}</td>
                    <td>{respondent.dueDate}</td>
                    <td>{respondent.status}</td>
                    <td>{respondent.mark}</td>
                </tr>
            )
        })

        return (
            <div className="container-inner-padding aliceblue-back">
                <Row className="mb-3">
                    <Col><h2>Призначені тести</h2></Col>
                    <Col><Button variant="primary" size="md" active className="float-right">
                        <Row className="margin-auto">
                            Assign respondent
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered hover size="sm" className="back-white">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Test</th>
                        <th>Respondent</th>
                        <th>Due date</th>
                        <th>Status</th>
                        <th>Mark</th>
                    </tr>
                    </thead>
                    <tbody>
                        {respondents}
                    </tbody>
                </Table>
            </div>
        )
    }

}

export default RespondentsList;