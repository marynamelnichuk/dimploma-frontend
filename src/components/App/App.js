import SignInPage from "../SignInPage/SignInPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignUpPage from "../SignUpPage/SignUpPage";
import MainPage from "../MainPage/MainPage";

const App = () => {
    return (
            <Switch>
                <Route path="/signin">
                    <SignInPage />
                </Route>
                <Route path="/signup">
                    <SignUpPage />
                </Route>
                <Route path="/main">
                    <MainPage/>
                </Route>
            </Switch>
    );
}

export default App;
