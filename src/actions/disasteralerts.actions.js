import { disasterAlertConstants } from '../constants';
import { history } from '../helpers';

export const disasterAlertActions = {
    goToAlertsPage,
    goToConfirmPage,
    goToMainPage,
    goToSuccessPage
};

function goToAlertsPage(alertEvent, alertType) {
    history.push('/alertpage');
    return { type: disasterAlertConstants.SENDING_ALERT, alertEvent, alertType };
}

function goToConfirmPage(alertTypes) {
    history.push('/confirmpage');
    return { type: disasterAlertConstants.CONFIRMING_ALERT, alertTypes }
}

function goToMainPage() {
    history.push('/');
    return { type: disasterAlertConstants.RETURN_MAIN_PAGE }
}

function goToSuccessPage(alertTypes) {
  history.push('/successpage');
  return { type: disasterAlertConstants.SUCCESS_ALERT, alertTypes }
}

