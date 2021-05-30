import SignInPage from "../SignInPage/SignInPage";
import React from 'react';
import {Route, Redirect, Switch, withRouter} from 'react-router-dom';
import SignUpPage from "../SignUpPage/SignUpPage";
import MainContainer from "../MainContainer/MainContainer";
import TestTaskToComplete from "../TestTaskToComplete/TestTaskToComplete";
import TestBasesList from "../TestBasesList/TestBasesList";
import RespondentsList from "../RespondentsList/RespondentsList";
import TestTaskList from "../TestsList/TestsList";
import TestBaseViewTasks from "../TestBaseViewTasks/TestBaseViewTasks";
import TestResultList from "../TestResultList/TestResultList";
import MyResultsList from "../MyResultsList/MyResultsList";
import TestViewTasks from "../TestViewTasks/TestViewTasks";


class App extends React.Component {

    state = {
        userId: 1
    };

    onUserSignIn = (userId) => {
        this.setState(() => {return {
            userId: userId
        }})
        this.props.history.push('/main/testBases');
    }

    render() {
        return (
            <Switch>
                <Route exact path="/">
                    <Redirect to="/signIn"/>
                </Route>
                <Route path="/signUp">
                    <SignUpPage/>
                </Route>
                <Route path="/signIn">
                    <SignInPage onUserSignIn={this.onUserSignIn}/>
                </Route>
                <Route path={`/main/myResults/completeTest/:assignmentId`}
                       component={(props) => <MainContainer componentToDisplay={<TestTaskToComplete userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/testBases/:testCardId`}
                       component={(props) => <MainContainer componentToDisplay={<TestBaseViewTasks userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/testBases`}
                       component={(props) => <MainContainer componentToDisplay={<TestBasesList userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/tests/:testId"`}
                       component={(props) => <MainContainer componentToDisplay={<TestViewTasks userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/tests`}
                       component={(props) => <MainContainer componentToDisplay={<TestTaskList userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/respondents`}
                       component={(props) => <MainContainer componentToDisplay={<RespondentsList userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/testResults`}
                       component={(props) => <MainContainer componentToDisplay={<TestResultList userId={this.state.userId} {...props}/>}/>}/>
                <Route path={`/main/myResults`}
                       component={(props) => <MainContainer componentToDisplay={<MyResultsList userId={this.state.userId} {...props}/>}/>}/>
            </Switch>
        );
    }

}

export default withRouter(App);
