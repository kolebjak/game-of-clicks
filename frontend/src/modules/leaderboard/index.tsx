import * as React from 'react';
import * as classNames from 'classnames';
import { connect } from 'react-redux';
import { FetchAction, fetchAction } from './actions';
import { selectLeaderboard } from './reducer';
import { State } from '../../types';

export type LeaderboardItem = {
  team: string,
  clicks: number,
  order: number,
};

type Props = {
  leaderboard: LeaderboardItem[],
  fetch: FetchAction,
  selected?: string,
};

class Leaderboard extends React.Component<Props> {

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <table className="leaderboard" cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th/>
            <th className="left">Team</th>
            <th className="right">Clicks</th>
          </tr>
        </thead>
        <tbody>
        {this.props.leaderboard.map(l => (
          <tr className={classNames({selected: this.props.selected === l.team})} key={l.order}>
            <td className="left">{l.order}</td>
            <td className="left">{l.team}</td>
            <td className="right">{l.clicks}</td>
          </tr>
        ))}
        </tbody>
      </table>
    );
  }
}

export default connect((state: State) => ({
  leaderboard: selectLeaderboard(state),
}), {
  fetch: fetchAction,
})(Leaderboard);
