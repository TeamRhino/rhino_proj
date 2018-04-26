import { disasterAlertConstants } from '../constants';

export function disasterAlerts(state = {}, action) {
  switch (action.type) {
    case disasterAlertConstants.SENDING_ALERT:
      return { 
          alertEvent: action.alertEvent,
          alertType: action.alertType
         };
    case disasterAlertConstants.CONFIRMING_ALERT:
         return {
           ...state,
           alertTypes: action.alertTypes
         }
    case disasterAlertConstants.RETURN_MAIN_PAGE:
         return {
           alertTypes: "",
           alertEvent: "",
           alertType: ""
         }
    default:
      return state
  }
}