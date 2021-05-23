import React from "react";
import './MainContainer.css';
import MainSideBar from "../MainSideBar/MainSideBar";
import {withRouter} from "react-router-dom";


const MainContainer = (props) => {

    const onNavClick = (label) => {
        if(label === 'Test bases') {
            props.history.push(`/main/testbases`);
            //this.updateState(<TestBasesList />);
        }
        if(label === 'Test tasks') {
            props.history.push(`/main/tests`);
            //this.updateState(<TestTaskList />);
        }
        if(label === 'Respondents') {
            props.history.push(`/main/respondents`);
            //this.updateState(<RespondentsList />);
        }
        if(label === 'Test results') {
            props.history.push(`/main/testresults`);
            //this.updateState(<RespondentsList />);
        }
        if(label === 'My results') {
            props.history.push(`/main/myresults`);
            //this.updateState(<RespondentsList />);
        }

    }

    return (
        <div className="main-page">
            <div className="side-bar">
                <MainSideBar onNavClick = {(label) => onNavClick(label)}/>
            </div>
            <div className="main-body">
                {props.componentToDisplay}
            </div>
        </div>
    );
}

export default withRouter(MainContainer);