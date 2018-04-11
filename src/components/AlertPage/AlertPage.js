import React, { Component } from 'react';
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
            </div>
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