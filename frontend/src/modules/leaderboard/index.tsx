import React from 'react';
import { connect } from 'react-redux';
import { FetchAction, fetchAction } from './actions';
import { selectLeaderboard } from './reducer';
import { State } from '../../types';
import styled from "styled-components";

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

const Table = styled.table`
  margin-top: 20px;
  width: 100%;
  font-size: 12px;
  font-weight: bold;
  
  & td:last-of-type, & th:last-of-type {
    text-align: right;
  }
  
  & thead th {
    text-transform: uppercase;
    color: #999999;
    font-size: 10px;
    padding: 5px 5px;
  }
  
  & tbody td {
    padding: 5px 5px;
  }
`

const Row = styled.tr<{ selected: boolean }>`
  ${props => props.selected && `
    background: #3878de;
    color: #fff;
    font-size: 140%;
  `}
  
  ${props => !props.selected && `
    &:nth-child(even) {
      background: #d2e3f8;
    }
  
    &:nth-child(odd) {
      background: #e7f0fc;
    }
  `} 
`

class Leaderboard extends React.Component<Props> {

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Table cellPadding={0} cellSpacing={0}>
        <thead>
          <tr>
            <th/>
            <th>Team</th>
            <th>Clicks</th>
          </tr>
        </thead>
        <tbody>
        {this.props.leaderboard.map(l => (
          <Row key={l.order} selected={this.props.selected === l.team}>
            <td>{l.order}</td>
            <td>{l.team}</td>
            <td>{l.clicks}</td>
          </Row>
        ))}
        </tbody>
      </Table>
    );
  }
}

export default connect((state: State) => ({
  leaderboard: selectLeaderboard(state),
}), {
  fetch: fetchAction,
})(Leaderboard);
