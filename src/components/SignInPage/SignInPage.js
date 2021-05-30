import React from "react";
import SignInForm from "../SignInForm/SignInForm";
import './SignPage.css';
import {withRouter} from "react-router-dom";

class SignInPage extends React.Component {

    onUserSignIn = (userId) => {
        this.props.onUserSignIn(userId);
    }

    render() {
        return (
            <div className="light-grey-background-color">
                <div className="sign-form"><SignInForm onUserSignIn={this.onUserSignIn}/></div>
            </div>
        )
    }
}

export default withRouter(SignInPage);