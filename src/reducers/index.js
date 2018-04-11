import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { users } from './users.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';
import { disasterAlerts } from './disasteralerts.reducer';

const rootReducer = combineReducers({
    authentication,
    users,
    registration,
    alert,
    disasterAlerts
});

export default rootReducer;