import { LeaderboardReducer } from './modules/leaderboard/reducer';
import { AppReducer } from './modules/app/reducer';
import { RouterState } from 'connected-react-router';

export type State = {
  router: RouterState,
  leaderboardReducer: LeaderboardReducer,
  appReducer: AppReducer,
};
