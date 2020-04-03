import * as React from 'react';
import Leaderboard from '../leaderboard';
import { connect } from 'react-redux';
import {
  clickAction, ClickActionResponse, fetchTeamClicksAction, FetchTeamClicksActionResponse, setTeamNameAction,
  SetTeamNameActionResponse
} from '../app/actions';
import { selectTeamClicks, selectTeamName, selectYourClicks } from '../app/reducer';
import { State } from '../../types';

type Props = {
  match: {
    params: {
      teamName: string,
    }
  },
  click: () => ClickActionResponse,
  teamClicks: number,
  yourClicks: number,
  teamName: string,
  setTeamName: (teamName: string) => SetTeamNameActionResponse,
  fetchTeamClicks: (teamName: string) => FetchTeamClicksActionResponse,
};

class TeamPage extends React.Component<Props> {

  componentDidMount() {
    const teamName = this.props.match.params.teamName;
    this.props.setTeamName(teamName);
    this.props.fetchTeamClicks(teamName);
  }

  render() {
    const {click, yourClicks, teamClicks, teamName} = this.props;
    return (
      <div className="page-container">
        <h1>Clicking for team <strong>{teamName}</strong></h1>
        <p>Too lazy to click? Share this link <input value={window.location.href} readOnly={true} /></p>
        <div className="page">
          <button onClick={click} className="btn btn--large">click!</button>
          <div className="clicks">
            <div>
              <span className="clicks__label">Your clicks:</span>
              <div className="clicks__clickCount">{yourClicks}</div>
            </div>
            <div>
              <span className="clicks__label">Team clicks:</span>
              <div className="clicks__clickCount">{teamClicks}</div>
            </div>
          </div>
          <Leaderboard selected={teamName}/>
        </div>
      </div>
    );
  }
}
export default connect((state: State) => ({
  teamClicks: selectTeamClicks(state),
  yourClicks: selectYourClicks(state),
  teamName: selectTeamName(state),
}), {
  click: clickAction,
  setTeamName: setTeamNameAction,
  fetchTeamClicks: fetchTeamClicksAction,
})(TeamPage);
