export const PING_ACTION = { type: 'PING' };
export const PONG_ACTION = { type: 'PONG' };
export const USER_REPOS_ACTION = { type: 'USER_REPO', user: 'huonglt' };
export const CANCEL_USER_REPOS_ACTION = { type: 'CANCEL_USER_REPO_REQUEST' };

export const userRepoSuccessAction = (repoNames) => ({
    type: 'USER_REPO_SUCCESS_ACTION',
    repos: repoNames
});
