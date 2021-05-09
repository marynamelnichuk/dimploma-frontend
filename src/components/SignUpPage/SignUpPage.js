import React from "react";
import './SignUpPage.css';
import SignUpForm from "../SignUpForm/SignUpForm";
import {withRouter} from "react-router-dom";

class SignUpPage extends React.Component {

    render() {
        return (
            <div className="light-grey-background-color">
                <div className="sign-form"><SignUpForm /></div>
            </div>
        )
    }
}

export default withRouter(SignUpPage);