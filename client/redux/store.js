import { createStore, applyMiddleware } from 'redux';
import { reducers } from './reducers.js';
import { createEpicMiddleware} from 'redux-observable';
import { rootEpic } from '../epics/index.js';
import axios from 'axios';
/*
 * config the redux store with the redux-observable middleware
 */
export const configStore = () => {
  const epicDependencies = { dependencies: { httpGet: axios.get } };
  const epicMiddleware = createEpicMiddleware(rootEpic(), epicDependencies);
  const store = createStore(reducers, applyMiddleware(epicMiddleware));
  return store;
}
