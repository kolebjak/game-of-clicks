import { FETCH, SET } from '../../constants';
import { LeaderboardItem } from './index';

export type FetchAction = () => FetchActionResponse;
export type FetchActionResponse = { type: FETCH };

export type SetAction = (leaderboard: LeaderboardItem[]) => SetActionResponse;
export type SetActionResponse = { type: SET, leaderboard: LeaderboardItem[] };

export const fetchAction: FetchAction = () => ({
  type: FETCH,
});

export const setAction: SetAction = (leaderboard: LeaderboardItem[]) => ({
  type: SET,
  leaderboard,
});

export type Action = FetchActionResponse | SetActionResponse;
