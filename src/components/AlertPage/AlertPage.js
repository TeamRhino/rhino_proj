import React, { Component } from 'react';
import './AlertTypes.css';

import {
    Container,
} from 'semantic-ui-react';
import { connect } from 'react-redux';

export default class AlertPage extends Component {

    render() {
        return(
            <Container>
            <div>
                <h1> You are sending a {this.props.disasterAlerts.alertType} {this.props.disasterAlerts.alertEvent} </h1>
                <h1> Which alert(s) would you like to send? </h1>

                <div class="row">
                <div class="column">
                  <img src="http://www.cityofhubbard-oh.gov/wp-content/uploads/2017/04/tornado-siren.jpg" width="200" height="200"></img>
                  <input type="checkbox" id="warningSirens"></input>
                  <label for="warningSirens">Warning Sirens</label>
                </div>

                <div class="column">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Icon_sound_radio.svg/2000px-Icon_sound_radio.svg.png" width="200" height="200"></img>
                  <input type="checkbox" id="radioWarning"></input>
                  <label for="radioWarning">Radio Warning</label>
                </div>

                <div class="column">
                  <img src="https://cdn0.iconfinder.com/data/icons/communication-18/512/tv-512.png" width="200" height="200"></img>
                  <input type="checkbox" id="tvWarning"></input>
                  <label for="tvWarning">Television Warning</label>
                </div>

                <div class="column">
                  <img src="https://help.republicwireless.com/hc/article_attachments/115012283727/Google_Messenger_Icon.jpg" width="200" height="200"></img>
                  <input type="checkbox" id="textMessageWarning"></input>
                  <label for="textMessageWarning">Text Message Warning</label>
                </div>
              </div>

            </div>
      <button type="button"><a href="http://google.com">next</a></button>
            </Container>

    )

    }
}




function mapStateToProps(state) {
    const { disasterAlerts } = state;
    return {
        disasterAlerts
    };
}

const connectedAlertPage = connect(mapStateToProps)(AlertPage);
export { connectedAlertPage as AlertPage };