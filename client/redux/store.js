import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers.js';
import { createEpicMiddleware} from 'redux-observable';
import { rootEpic } from '../epics/index.js'
/*
 * config the redux store with the redux-observable middleware
 */
export const configStore = () => {
  const epicMiddleware = createEpicMiddleware(rootEpic());
  const store = createStore(reducers, applyMiddleware(epicMiddleware));
  return store;
}
