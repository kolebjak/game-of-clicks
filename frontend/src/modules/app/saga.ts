import { put, takeEvery, takeLatest, select, call } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { APP_MOUNTED, CLICK, FETCH_TEAM_CLICKS } from '../../constants';
import { FetchTeamClicksActionResponse, setSessionAction, setTeamClicksAction, setYourClicksAction } from './actions';
import { selectSession, selectTeamName } from './reducer';
import { getLeaderboard, postClick } from '../fetcher';
import { fetchAction } from '../leaderboard/actions';
import { LeaderboardItem } from '../leaderboard';

function* appMounted(): SagaIterator {
  console.log('app mounted');
  try {
    const session = Math.random().toString(36).substr(2, 10);
    yield put(setSessionAction(session));
  } catch (e) {
    console.error(e.message);
  }
}

function* click(): SagaIterator {
  console.log('clicked');
  try {
    const session = yield select(selectSession);
    const teamName = yield select(selectTeamName);
    const result = yield call(postClick, session, teamName);
    if (result) {
      yield put(setYourClicksAction(result.your_clicks));
      yield put(setTeamClicksAction(result.team_clicks));
      yield put(fetchAction());
    }
  } catch (e) {
    console.error(e.message);
  }
}

function* fetchTeamClicks(action: FetchTeamClicksActionResponse): SagaIterator {
  console.log('fetching team clicks');
  try {
    const teamName = action.teamName;
    const result = yield call(getLeaderboard);
    if (result) {
      const team = result.find((r: LeaderboardItem) => r.team === teamName);
      yield put(setTeamClicksAction(team.clicks));
    }
  } catch (e) {
    console.error(e.message);
  }
}

function* saga(): SagaIterator {
  yield takeLatest(APP_MOUNTED, appMounted);
  yield takeEvery(CLICK, click);
  yield takeLatest(FETCH_TEAM_CLICKS, fetchTeamClicks);
}

export default saga;
