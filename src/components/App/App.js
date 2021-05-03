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

const App = () => {
    return (
        <Switch>
            <Route path="/signin">
                <SignInPage/>
            </Route>
            <Route path="/signup">
                <SignUpPage/>
            </Route>
            <Route path={`/main/tasks/:catId`}
                   component={(props) => <MainContainer componentToDisplay={<TestTaskToComplete {...props}/>}/>}/>
            <Route path={`/main/testbases/:testCardId`}
                   component={(props) => <MainContainer componentToDisplay={<TestBaseViewTasks {...props}/>}/>}/>
            <Route path="/main/testbases">
                <MainContainer componentToDisplay={<TestBasesList/>}/>
            </Route>
            <Route path="/main/testtasks">
                <MainContainer componentToDisplay={<TestTaskList/>}/>
            </Route>
            <Route path="/main/respondents">
                <MainContainer componentToDisplay={<RespondentsList/>}/>
            </Route>
        </Switch>
    );
}
/*<Route path="/main" component={MainPage} />*/
export default App;
