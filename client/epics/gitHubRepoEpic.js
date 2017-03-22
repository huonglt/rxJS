import Rx from 'rxjs/Observable';
import { USER_REPOS_ACTION, CANCEL_USER_REPOS_ACTION, userRepoSuccessAction } from '../redux/actions.js';

const githubURL     = (user) => 'https://api.github.com/users/' + user + '/repos';
const responseData  = (response) => response.data;
const getRepoNames  = (data) => data.map(repo => repo.name);

const obserable$ = (action, httpGet) => Rx.Observable.fromPromise(httpGet(githubURL(action.user)))
                                          .map(responseData)
                                          .map(data => {
                                            const repoNames = data.map(repo => repo.name);
                                            return userRepoSuccessAction(repoNames);
                                          });
export const gitHubRepoEpic = (action$, store, { httpGet }) =>
  action$.ofType(USER_REPOS_ACTION.type)
    .mergeMap(action => obserable$(action, httpGet).takeUntil(action$.ofType(CANCEL_USER_REPOS_ACTION.type)));
