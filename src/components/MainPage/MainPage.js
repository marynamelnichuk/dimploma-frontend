import React from "react";
import MainSideBar from "../MainSideBar/MainSideBar";
import TestBasesList from "../TestBasesList/TestBasesList";
import './MainPage.css';
import TestTaskList from "../TestsList/TestsList";
import RespondentsList from "../RespondentsList/RespondentsList";

class MainPage extends React.Component {

    state = {
        componentToDisplay: <TestBasesList />
    }

    updateState = (component) => {
        this.setState(() => {
            return {
                componentToDisplay: component
            }
        })
    }

    onNavClick(label) {
        if(label === 'Test bases') {
            this.updateState(<TestBasesList />);
        }
        if(label === 'Test tasks') {
            this.updateState(<TestTaskList />);
        }
        if(label === 'Respondents') {
            this.updateState(<RespondentsList />);
        }
    }

    render() {
        return (
            <div className="main-page">
                    <div className="side-bar">
                        <MainSideBar onNavClick = {(label) => this.onNavClick(label)}/>
                    </div>
                    <div className="main-body">
                        {this.state.componentToDisplay}
                    </div>
            </div>
        );
    }
}

export default MainPage;