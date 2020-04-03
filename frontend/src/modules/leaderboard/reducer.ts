import { SET } from '../../constants';
import { State } from '../../types';
import { Action } from './actions';
import { LeaderboardItem } from './index';

export type LeaderboardReducer = { leaderboard: LeaderboardItem[] };

const initialState: LeaderboardReducer = {
  leaderboard: [],
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET: {
      const { leaderboard } = action;
      return {...state, leaderboard };
    }
    default:
      return state;
  }
};

export const selectLeaderboard = (state: State) => {
  return state.leaderboardReducer.leaderboard;
};
