import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/index';
import TeamPage from '../pages/team';
import '../../index.css';
import { Routes } from '../routes';

type State = {
  open: boolean;
};

type Props = {};

class App extends React.Component<Props, State> {
  render() {
    return (
      <div className="app">
        <div className="header">STFUANDCLICK</div>
        <Switch>
          <Route path="/:teamName" component={TeamPage}/>
          <Route path={Routes.home} component={IndexPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
