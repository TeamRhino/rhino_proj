import { createBrowserHistory } from 'history';

/* It is written this way because of unit testing. This creates ensures that the history is created
even when there is no document available */

let createdHistory;

if (typeof document !== 'undefined') {
    createdHistory = createBrowserHistory();
}

export const history = createdHistory;