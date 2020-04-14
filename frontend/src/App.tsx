import React, {Suspense, lazy} from 'react';
import {Route, Switch} from 'react-router-dom';
import styled from 'styled-components';
import Header from "./components/Header";
import {useHistory} from 'react-router-dom';

const Wrapper = styled.div`
  background: #efefef;
  height: 100%;
  width: 100%;
  min-height: 500px;
`

export const SessionContext = React.createContext<string>('');

const App: React.FC = () => {
    const history = useHistory();
    const session = Math.random().toString(36).substr(2, 10);
    return (
        <SessionContext.Provider value={session}>
            <Wrapper>
                <Header onClick={() => history.push('/')}>STFUANDCLICK</Header>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route path="/:teamName" component={lazy(() => import('./TeamPage'))}/>
                        <Route path={'/'} component={lazy(() => import('./HomePage'))}/>
                    </Switch>
                </Suspense>
            </Wrapper>
        </SessionContext.Provider>
    );
}

export default App;
