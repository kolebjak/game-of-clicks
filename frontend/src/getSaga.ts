import { fork } from 'redux-saga/effects';
import leaderboardSaga from './modules/leaderboard/saga';
import appSaga from './modules/app/saga';

export default () => function* rootSaga() {
  const sagas = [
    yield fork(leaderboardSaga),
    yield fork(appSaga),
  ];
  yield sagas;
};
