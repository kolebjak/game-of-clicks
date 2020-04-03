import { RouterState } from 'react-router-redux';
import { LeaderboardReducer } from './modules/leaderboard/reducer';
import { AppReducer } from './modules/app/reducer';

export type State = {
  routerReducer: RouterState,
  leaderboardReducer: LeaderboardReducer,
  appReducer: AppReducer,
};
