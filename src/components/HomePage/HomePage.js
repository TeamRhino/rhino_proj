import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';
import { disasterAlertActions } from '../../actions'
import {
    HOMEPAGE_TITLE,
    TSUNAMI_ALERT,
    MISSILE_ALERT,
    TORNADO_ALERT
} from '../../constants';
import { ModalClass } from '../Shared/Modal';


class HomePage extends Component {

    constructor(props) {
        super(props);
        this.eventTypeHandler = this.eventTypeHandler.bind(this);
        this.handleMissileAlert = this.handleMissileAlert.bind(this);
        this.handleTsunamiAlert = this.handleTsunamiAlert.bind(this);
        this.handleTornadoAlert = this.handleTornadoAlert.bind(this);
        this.handleEventType = "";
    }

    eventTypeHandler = (eventType) => {
        /* Did this because this.setState() is asynchronous but I needed a synchronous task */
        this.handleEventType = eventType;
    }

    handleMissileAlert() {
        const { dispatch } = this.props;
        dispatch(disasterAlertActions.goToAlertsPage(MISSILE_ALERT, this.handleEventType));
    }

    handleTsunamiAlert() {
        const { dispatch } = this.props;
        dispatch(disasterAlertActions.goToAlertsPage(TSUNAMI_ALERT, this.handleEventType));
    }

    handleTornadoAlert() {
        const { dispatch } = this.props;
        dispatch(disasterAlertActions.goToAlertsPage(TORNADO_ALERT, this.handleEventType));
    }

    render() {
        return(
            <div>
              <h1 align="center">{HOMEPAGE_TITLE}</h1>
              <div class="container">
                <div class="container-item">Man-Made Disaster</div>
                <div class="container-item"></div>
                <div class="container-item"></div>
                <div class="container-item">Natural Disaster</div>
              </div>

              <div class="container">
                <div class="container-item">
                  <figure>
                    <ModalClass
                        image="http://demoji.pro/submission/content/1-home/missile/emoji_missile_r.png"
                        modalHeader="What type of alert would you like to send?"
                        handleClick={this.handleMissileAlert}
                        eventHandler={this.eventTypeHandler}
                        link="/alertpage">
                    </ModalClass>
                  </figure>
                </div>

                <div class="container-item"></div>
                <div class="container-item"></div>


                <div class="container-item">
                   <figure>
                    <ModalClass
                            image="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-01-512.png"
                            modalHeader="What type of alert would you like to send?"
                            handleClick={this.handleTsunamiAlert}
                            eventHandler={this.eventTypeHandler}
                            link="/alertpage">
                    </ModalClass>
                  </figure>
                </div>

                <div class="container-item">
                  <figure>
                    <ModalClass
                            image="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_TornadoGradient.png"
                            modalHeader="What type of alert would you like to send?"
                            handleClick={this.handleTornadoAlert}
                            eventHandler={this.eventTypeHandler}
                            link="/alertpage">
                    </ModalClass>
                  </figure>
                </div>
              </div>
            </div>
    );
    }
}

function mapStateToProps(state) {
    const { alertType } = state.disasterAlerts;
    return {
        alertType
    };
  }

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };