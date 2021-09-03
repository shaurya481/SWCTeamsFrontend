import React from 'react';
import {BrowserRouter, Route, Switch, Redirect, useRouteMatch} from 'react-router-dom';
import FrontPage from './components/FrontPage';
import { NavBar } from './components/Navbar';
import { ProjectInfo } from './components/ProjectInfo';
import TearSheet from './components/TearSheet';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const ProjectRouter = () => {
    const {path} = useRouteMatch();
    console.log(path);
    return (
        <>
        <NavBar>
            <Switch>
            <div style={{marginLeft: "3rem", marginTop: "3rem"}}>
                <Route exact path= {path + "/tearsheet"} component={TearSheet} />
                <Route exact path={path + "/projectinfo"} component={ProjectInfo}/>
                <Route exact path={path+"/frontpage"} component={FrontPage} />
            </div>
            </Switch>
            </NavBar>
        </>
    );
};

console.log(BASE_URL);

const Router = () => {
    console.log('Starting app');
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect path="/" to={BASE_URL} />
                    </Route>
                    <Route path={`/${BASE_URL}`} component={ProjectRouter} />
                </Switch>
            </BrowserRouter>
        </>
    );
};
export default Router;
