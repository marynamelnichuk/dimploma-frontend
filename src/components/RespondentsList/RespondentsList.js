import React from "react";
import {Button, Col, Row, Table} from "react-bootstrap";
import '../Global styles.css';
import RespondentCreateForm from "../RespondentCreateForm/RespondentCreateForm";

class RespondentsList extends React.Component {


    componentDidMount() {
        fetch('http://localhost:8080/1/testsAssignments')
            .then(response => response.json())
            .then(data => {
                this.setState(() => {
                    return {
                        respondents: data
                    }
                });
            });
    }

    state = {
      respondents: [
         /* {id: 1, userEmail: 'sofiia.predko.kn.2017@lpnu.ua', testName: 'Тест перевірки знань Java', dueDate: '2021-06-04', status: 'Призначено'},
          {id: 2, userEmail: 'mariia.petliakivska.kn.2017@lpnu.ua', testName: 'Тест перевірки знань Python', dueDate: '2021-10-04', status: 'Виконано'}
      */
      ],
        addRespondent: false,
    };


    onAddRespondent = () => {
        this.setState(() => {
            return {
                addRespondent: true
            }
        });
    }

    onAddedRespondent = (respondent) => {
        //alert(respondent.dueDate)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(respondent)
        };
        fetch('http://localhost:8080/1/testsAssignments', requestOptions)
            .then(response => response.json())
            .then(data => this.setState(({respondents, addRespondent}) => {
                return {
                    respondents: [...respondents, data],
                    addRespondent: !addRespondent
                }
            }));
    }


    render() {

        const respondents = this.state.respondents.map((respondent, index=1) => {
            return (
                <tr>
                    <td>{++index}</td>
                    <td>{respondent.userEmail}</td>
                    <td>{respondent.testName}</td>
                    <td>{respondent.status}</td>
                    <td>{respondent.dueDate}</td>
                </tr>
            )
        })

        return (
            <div className="container-inner-padding aliceblue-back">
                {this.state.addRespondent ? <RespondentCreateForm onAddRespondent={this.onAddedRespondent}/> :
                    <span><Row className="mb-3">
                    <Col><h2>Призначені тести</h2></Col>
                    <Col><Button variant="primary" size="md" active className="float-right" onClick={this.onAddRespondent}>
                        <Row className="margin-auto">
                            Призначити тест
                        </Row>
                    </Button></Col>
                </Row>
                <Table striped bordered hover size="sm" className="back-white">
                    <thead>
                    <tr>
                        <th>Номер</th>
                        <th>Користувач</th>
                        <th>Тест</th>
                        <th>Статус</th>
                        <th>Кінцевий термін</th>
                    </tr>
                    </thead>
                    <tbody>
                        {respondents}
                    </tbody>
                </Table></span> }
            </div>
        )
    }

}

export default RespondentsList;