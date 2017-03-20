import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers.js';
import { createEpicMiddleware, combineEpics} from 'redux-observable';
import { gitHubRepoEpic } from '../epics/gitHubRepoEpic.js';
import { pingPongEpic } from '../epics/pingPongEpic.js';

/*
 * config the redux store with cycles redux-cycles for handling HTTP request side-effects
 */
export const configStore = () => {
  const rootEpic = combineEpics(pingPongEpic, gitHubRepoEpic);
  const epicMiddleware = createEpicMiddleware(rootEpic);
  const store = createStore(reducers, applyMiddleware(epicMiddleware));
  return store;
}
