import { configStore } from './redux/store.js';
import { USER_REPOS_ACTION, PING_ACTION } from './redux/actions.js';

const store = configStore();
store.dispatch(PING_ACTION);
store.dispatch(USER_REPOS_ACTION);
