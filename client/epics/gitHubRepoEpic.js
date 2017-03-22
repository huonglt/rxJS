import Rx from 'rxjs/Observable';
import { USER_REPOS_ACTION, CANCEL_USER_REPOS_ACTION, userRepoSuccessAction } from '../redux/actions.js';
import axios from 'axios';

const githubURL     = (user) => 'https://api.github.com/users/' + user + '/repos';
const httpRequest   = (action) => axios.get(githubURL(action.user));
const responseData  = (response) => response.data;
const getRepoNames  = (data) => data.map(repo => repo.name);

const obserable$ = (action) => Rx.Observable.fromPromise(httpRequest(action))
                                          .map(responseData)
                                          .map(data => {
                                            const repoNames = data.map(repo => repo.name);
                                            return userRepoSuccessAction(repoNames);
                                          });
export const gitHubRepoEpic = (action$) =>
  action$.ofType(USER_REPOS_ACTION.type)
    .mergeMap(action => obserable$(action).takeUntil(action$.ofType(CANCEL_USER_REPOS_ACTION.type)));
