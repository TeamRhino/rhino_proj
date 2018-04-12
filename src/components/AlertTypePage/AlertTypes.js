import React, { Component } from 'react';
import './AlertTypes.css';
import {Link} from  'react-router-dom';
class AlertTypes extends Component {
  render() {
    return(
        <div>
          <h1 align="center">Warning Types</h1>

          <div class="row">
            <div class="column">
              <img src="http://www.cityofhubbard-oh.gov/wp-content/uploads/2017/04/tornado-siren.jpg" width="100" height="100"></img>
                <input type="checkbox" id="warningSirens"></input>
                  <label for="warningSirens">Warning Sirens</label>
            </div>

            <div class="column">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Icon_sound_radio.svg/2000px-Icon_sound_radio.svg.png" width="100" height="100"></img>
                <input type="checkbox" id="radioWarning"></input>
                  <label for="radioWarning">Radio Warning</label>
            </div>

            <div class="column">
              <img src="https://cdn0.iconfinder.com/data/icons/communication-18/512/tv-512.png" width="100" height="100"></img>
                <input type="checkbox" id="tvWarning"></input>
                <label for="tvWarning">Television Warning</label>
            </div>

            <div class="column">
              <img src="https://help.republicwireless.com/hc/article_attachments/115012283727/Google_Messenger_Icon.jpg" width="100" height="100"></img>
              <input type="checkbox" id="textMessageWarning"></input>
                  <label for="textMessageWarning">Text Message Warning</label>
            </div>
          </div>
        </div>
    );
  }
}

export default AlertTypes;