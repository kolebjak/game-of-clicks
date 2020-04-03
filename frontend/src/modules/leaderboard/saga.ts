import { takeLatest, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { FETCH } from '../../constants';
import { FetchActionResponse, setAction } from './actions';
import { getLeaderboard } from '../fetcher/';

function* fetch(action: FetchActionResponse): SagaIterator {
  console.log('fetch action');
  try {
    const result = yield call(getLeaderboard);
    yield put(setAction(result.slice(0, 10)));
  } catch (e) {
    console.error(e.message);
  }
}
function* saga(): SagaIterator {
  yield takeLatest(FETCH, fetch);
}
export default saga;
