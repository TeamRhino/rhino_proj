import { disasterAlertConstants } from '../constants';

export function disasterAlerts(state = {}, action) {
  switch (action.type) {
    case disasterAlertConstants.SENDING_ALERT:
      return { 
          alertEvent: action.alertEvent,
          alertType: action.alertType
         };
    default:
      return state
  }
}