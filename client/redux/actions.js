export const PING_ACTION = { type: 'PING' };
export const PONG_ACTION = { type: 'PONG' };
export const USER_REPOS_ACTION = { type: 'USER_REPO', payload: { user: 'huonglt' }};

export const userRepoSuccessAction = (repoNames) => ({
    type: 'USER_REPO_SUCCESS_ACTION',
    payload: {
      repos: repoNames
    }
});
