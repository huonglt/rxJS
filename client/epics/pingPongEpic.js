import 'rxjs';
import { PING_ACTION, PONG_ACTION } from '../redux/actions.js';
export const pingPongEpic = action$ => action$.ofType(PING_ACTION.type).mapTo(PONG_ACTION);
