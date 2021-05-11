import SignInPage from "../SignInPage/SignInPage";
import React from 'react';
import {Route, Switch} from 'react-router-dom';
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

const App = () => {
    return (
        <Switch>
            <Route path="/signUp">
                <SignUpPage/>
            </Route>
            <Route path={`/main/tasks/:catId`}
                   component={(props) => <MainContainer componentToDisplay={<TestTaskToComplete {...props}/>}/>}/>
            <Route path={`/main/testbases/:testCardId`}
                   component={(props) => <MainContainer componentToDisplay={<TestBaseViewTasks {...props}/>}/>}/>
            <Route path="/main/testbases">
                <MainContainer componentToDisplay={<TestBasesList/>}/>
            </Route>
            <Route path="/main/tests/:testId"
                   component={(props) => <MainContainer componentToDisplay={<TestViewTasks {...props}/>}/>}>
            </Route>
            <Route path="/main/tests">
                <MainContainer componentToDisplay={<TestTaskList/>}/>
            </Route>
            <Route path="/main/respondents">
                <MainContainer componentToDisplay={<RespondentsList/>}/>
            </Route>
            <Route path="/main/testresults">
                <MainContainer componentToDisplay={<TestResultList/>}/>
            </Route>
            <Route path="/main/myresults">
                <MainContainer componentToDisplay={<MyResultsList/>}/>
            </Route>
            <Route path={["/signIn", "/"]}>
                <SignInPage/>
            </Route>
        </Switch>
    );
}

export default App;
