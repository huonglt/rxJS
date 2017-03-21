import { gitHubRepoEpic } from './gitHubRepoEpic.js';
import { pingPongEpic } from './pingPongEpic.js';
import { combineEpics } from 'redux-observable';

/*
 * export the root Epic containing all epics of the app
 */
export const rootEpic = () => combineEpics(pingPongEpic, gitHubRepoEpic)
