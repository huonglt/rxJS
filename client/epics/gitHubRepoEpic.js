import Rx from 'rxjs/Observable';
import { USER_REPOS_ACTION, userRepoSuccessAction } from '../redux/actions.js';
import axios from 'axios';

const githubURL = (user) => 'https://api.github.com/users/' + user + '/repos';
const repoRequest = (action) => axios.get(githubURL(action.payload.user));
const responseData = (response) => response.data;
const getRepoNames = (data) => data.map(repo => repo.name);

export const gitHubRepoEpic = (action$) =>
  action$.ofType(USER_REPOS_ACTION.type)
    .mergeMap((action) => Rx.Observable.fromPromise(repoRequest(action))).map(responseData).map(data => {
      const repoNames = data.map(repo => repo.name);
      return userRepoSuccessAction(repoNames);
    });
