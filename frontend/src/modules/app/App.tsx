import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import {Routes} from '../routes';
import Header from "./components/Header";

const Wrapper = styled.div`
  background: #efefef;
  height: 100%;
  width: 100%;
  min-height: 500px;
`

const App: React.FC = () => {
    return (
        <Wrapper>
            <Header>STFUANDCLICK</Header>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route path="/:teamName" component={lazy(() => import('../pages/team'))}/>
                    <Route path={Routes.home} component={lazy(() => import('../pages/index'))}/>
                </Switch>
            </Suspense>
        </Wrapper>
    );
}

export default App;
