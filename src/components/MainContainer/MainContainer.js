import React from "react";
import './MainContainer.css';
import MainSideBar from "../MainSideBar/MainSideBar";
import {withRouter} from "react-router-dom";

const MainContainer = (props) => {

    const onNavClick = (label) => {
        if(label === 'Test bases') {
            props.history.push(`/main/testBases`);
        }
        if(label === 'Test tasks') {
            props.history.push(`/main/tests`);
        }
        if(label === 'Respondents') {
            props.history.push(`/main/respondents`);
        }
        if(label === 'Test results') {
            props.history.push(`/main/testResults`);
        }
        if(label === 'My results') {
            props.history.push(`/main/myResults`);
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