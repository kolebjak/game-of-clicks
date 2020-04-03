import {
  APP_MOUNTED, CLICK, FETCH_TEAM_CLICKS, SET_SESSION, SET_TEAM_CLICKS, SET_TEAM_NAME,
  SET_YOUR_CLICKS
} from '../../constants';

export type AppMountedActionResponse = { type: APP_MOUNTED };
type AppMountedAction = () => AppMountedActionResponse;

export const appMountedAction: AppMountedAction = () => ({
  type: APP_MOUNTED
});

export type SetSessionActionResponse = { type: SET_SESSION, session: string };
type SetSessionAction = (session: string) => SetSessionActionResponse;

export const setSessionAction: SetSessionAction = (session: string) => ({
  type: SET_SESSION,
  session,
});

export type ClickActionResponse = { type: CLICK };
type ClickAction = () => ClickActionResponse;

export const clickAction: ClickAction = () => ({
  type: CLICK,
});

export type SetYourClicksActionResponse = { type: SET_YOUR_CLICKS, yourClicks: number };
type SetYourClicksAction = (yourClicks: number) => SetYourClicksActionResponse;

export const setYourClicksAction: SetYourClicksAction = (yourClicks: number) => ({
  type: SET_YOUR_CLICKS,
  yourClicks,
});

export type SetTeamClicksActionResponse = { type: SET_TEAM_CLICKS, teamClicks: number };
type SetTeamClicksAction = (teamClicks: number) => SetTeamClicksActionResponse;

export const setTeamClicksAction: SetTeamClicksAction = (teamClicks: number) => ({
  type: SET_TEAM_CLICKS,
  teamClicks,
});

export type SetTeamNameActionResponse = { type: SET_TEAM_NAME, teamName: string };
type SetTeamNameAction = (teamName: string) => SetTeamNameActionResponse;

export const setTeamNameAction: SetTeamNameAction = (teamName: string) => ({
  type: SET_TEAM_NAME,
  teamName,
});

export type FetchTeamClicksActionResponse = { type: FETCH_TEAM_CLICKS, teamName: string };
type FetchTeamClicksAction = (teamName: string) => FetchTeamClicksActionResponse;

export const fetchTeamClicksAction: FetchTeamClicksAction = (teamName: string) => ({
  type: FETCH_TEAM_CLICKS,
  teamName,
});

export type Action =
  AppMountedActionResponse |
  SetSessionActionResponse |
  ClickActionResponse |
  SetTeamClicksActionResponse |
  SetYourClicksActionResponse |
  SetTeamNameActionResponse;
