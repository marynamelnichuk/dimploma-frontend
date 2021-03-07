import React from "react";
import SignInForm from "../SignInForm/SignInForm";
import './SignPage.css';

class SignInPage extends React.Component {

    render() {
        return (
            <div className="light-grey-background-color">
                <div className="sign-form"><SignInForm /></div>
            </div>
        )
    }
}

export default SignInPage;