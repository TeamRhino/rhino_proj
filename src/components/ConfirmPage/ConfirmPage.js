import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Form,
    Button
 } from 'semantic-ui-react';
import { userActions } from '../../actions';
import { disasterAlertActions } from '../../actions'


export default class ConfirmPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            confirm: '',
            password: '',
            submitted: false,
            passwordError: false
        };
    }

    restart = () => {
      const { dispatch } = this.props;
      dispatch(disasterAlertActions.goToMainPage());
    }

    alertSiren() {
        if (this.props.alertTypes.siren) {
            return( <h1> Siren Alert is True </h1> );
        } else {
            return( <h1> Siren Alert is False </h1> );
        }
    }

    alertRadio() {
        if (this.props.alertTypes.radio) {
            return( <h1> Radio Alert is True </h1> );
        } else {
            return( <h1> Radio Alert is False </h1> );
        }
    }

    alertTV() {
        if (this.props.alertTypes.tv) {
            return( <h1> TV Alert is True </h1> );
        } else {
            return( <h1> TV Alert is False </h1> );
        }
    }

    alertSMS() {
        if (this.props.alertTypes.sms) {
            return( <h1> SMS Alert is True </h1> );
        } else {
            return( <h1> SMS Alert is False </h1> );
        }
    }

    handleChange = (e, { name, value }) => this.setState({[name]: value})

    handleSubmit = () => {
        this.setState({ submitted: true });
        const { password, confirm } = this.state;
        const { dispatch } = this.props;
        if (password && confirm === password) {
            dispatch(userActions.verifyAlert(this.props.user, password))
            dispatch(disasterAlertActions.goToSuccessPage());

        } else {
            this.setState({passwordError: true, submitted: false})
        }
    }

    render() {
        return(
            <div>

                <Container>
                    <h1> You are going to send the following Alerts </h1>
                    {this.alertSiren()}
                    {this.alertRadio()}
                    {this.alertTV()}
                    {this.alertSMS()}

                    <h1> Reminder: You are sending a {this.props.disasterAlerts.alertType} {this.props.disasterAlerts.alertEvent} </h1>

                    <h3> Please create and confirm password to send the following alerts </h3>


                  <Form onSubmit={this.handleSubmit}>
                        <Form.Input error={this.state.passwordError} type='password' placeholder='Password' name='password' onChange={this.handleChange} />
                        <Form.Input error={this.state.passwordError} type='password' placeholder='Confirm' name='confirm' onChange={this.handleChange} />
                        <Button color = 'green' type='submit'>Submit</Button>
                        <Button color = 'red'onClick={this.restart}> Restart </Button>
                    </Form>

                  <center> <h3> <br /> <br /> *** Note: The Restart Button will send you back to the Homepage. Click that button if you want to start all over again. ***</h3></center>

                </Container>
            </div>
        );
    }
}


function mapStateToProps(state) {
    const { disasterAlerts } = state;
    const { alertTypes } = state.disasterAlerts;
    const { user } = state.authentication;
    return {
        disasterAlerts,
        alertTypes,
        user
    };
}

const connnectedConfirmPage = connect(mapStateToProps)(ConfirmPage);
export { connnectedConfirmPage as ConfirmPage };