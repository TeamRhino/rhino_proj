import { disasterAlertConstants } from '../constants';
import { history } from '../helpers';

export const disasterAlertActions = {
    goToAlertsPage,
};

function goToAlertsPage(alertEvent, alertType) {
    history.push('/alertpage');
    return { type: disasterAlertConstants.SENDING_ALERT, alertEvent, alertType };
}


