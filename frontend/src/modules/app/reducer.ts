import { SET_SESSION, SET_TEAM_CLICKS, SET_TEAM_NAME, SET_YOUR_CLICKS } from '../../constants';
import { State } from '../../types';
import { Action } from './actions';

export type AppReducer = { session: string, yourClicks: number, teamClicks: number, teamName: string };

const initialState: AppReducer = {
  session: '',
  yourClicks: 0,
  teamClicks: 0,
  teamName: '',
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case SET_SESSION: {
      const { session } = action;
      return {...state, session };
    }
    case SET_YOUR_CLICKS: {
      const { yourClicks } = action;
      return {...state, yourClicks };
    }
    case SET_TEAM_CLICKS: {
      const { teamClicks } = action;
      return {...state, teamClicks };
    }
    case SET_TEAM_NAME: {
      const { teamName } = action;
      return {...state, teamName };
    }
    default:
      return state;
  }
};

export const selectSession = (state: State) => {
  return state.appReducer.session;
};

export const selectYourClicks = (state: State) => {
  return state.appReducer.yourClicks;
};

export const selectTeamClicks = (state: State) => {
  return state.appReducer.teamClicks;
};

export const selectTeamName = (state: State) => {
  return state.appReducer.teamName;
};
