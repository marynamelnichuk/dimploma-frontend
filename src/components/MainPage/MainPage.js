import React from "react";
import MainSideBar from "../MainSideBar/MainSideBar";
import TestBasesList from "../TestBasesList/TestBasesList";
import './MainPage.css';
import TestTaskToComplete from "../TestTaskToComplete/TestTaskToComplete";


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
            this.updateState(<TestTaskToComplete />);
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