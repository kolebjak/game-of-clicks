import { createStore, applyMiddleware, compose, combineReducers, Reducer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import leaderboardReducer from './modules/leaderboard/reducer';
import appReducer from './modules/app/reducer';
import { State } from './types';

// tslint:disable-next-line
declare const window: any;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createRootReducer = (history: History): Reducer<State> => combineReducers({
  router: connectRouter(history),
  leaderboardReducer,
  appReducer,
});

export default (history: History) => {
  const sagaMiddleware = createSagaMiddleware();
  const router = routerMiddleware(history);
  return {
    ...createStore(
      createRootReducer(history),
      composeEnhancers(
        applyMiddleware(sagaMiddleware),
        applyMiddleware(router),
      )),
    runSaga: sagaMiddleware.run,
  };
};
