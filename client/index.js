import { configStore } from './redux/store.js';
import { USER_REPOS_ACTION, PING_ACTION, CANCEL_USER_REPOS_ACTION } from './redux/actions.js';

const store = configStore();
store.dispatch(PING_ACTION);
store.dispatch(USER_REPOS_ACTION);
setTimeout(() => store.dispatch(CANCEL_USER_REPOS_ACTION), 500);
setTimeout(() => {
  console.log('resending USER_REPOS_ACTION after cancellation');
  store.dispatch(USER_REPOS_ACTION)
}, 1000);
