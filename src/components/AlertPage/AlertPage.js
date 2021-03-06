import React, { Component } from 'react';
import './AlertTypes.css';
import { disasterAlertActions } from '../../actions'
import {
    Container,
    Button,
    Modal
} from 'semantic-ui-react';
import { connect } from 'react-redux';

export default class AlertPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeAlerts: {
                siren: false,
                radio: false,
                tv: false,
                sms: false
            },
            open: false
        }
        this.onSirenAlertClick = this.onSirenAlertClick.bind(this);
        this.onRadioAlertClick = this.onRadioAlertClick.bind(this);
        this.onTVAlertClick = this.onTVAlertClick.bind(this);
        this.onSMSAlertClick = this.onSMSAlertClick.bind(this);
        this.onConfirmClick = this.onConfirmClick.bind(this);
    }

    onConfirmClick() {
        const { dispatch } = this.props;
        dispatch(disasterAlertActions.goToConfirmPage(this.state.activeAlerts));
    }

  restart = () => {
    const { dispatch } = this.props;
    dispatch(disasterAlertActions.goToMainPage());
  }

    onCancelClick = () => this.setState({open: false})

    onModalClick = () => this.setState({open: true})
    
    onSirenAlertClick() {
        if (!this.state.activeAlerts.siren) {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    siren: true
                }
            }))
        } else {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    siren: false
                }
            }))
        }
    }

    onRadioAlertClick() {
        if (!this.state.activeAlerts.radio) {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    radio: true
                }
            }))
        } else {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    radio: false
                }
            }))
        }
    }

    onTVAlertClick() {
        if (!this.state.activeAlerts.tv) {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    tv: true
                }
            }))
        } else {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    tv: false
                }
            }))
        }
    }

    onSMSAlertClick() {
        if (!this.state.activeAlerts.sms) {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    sms: true
                }
            }))
        } else {
            this.setState(prevState => ({
                activeAlerts: {
                    ...prevState.activeAlerts,
                    sms: false
                }
            }))
        }
    }

    renderModal() {
        return(
            <Modal
              trigger={<Button color="green" onClick={this.onModalClick}>Confirm</Button>}
              open={this.state.open}>
                <Modal.Header>Confirm Window</Modal.Header>
                <Modal.Content>
                <Modal.Description>
                    <div className="ui grid centered">
                        <h1> Are you sure you want to send these alerts? </h1>
                    </div>
                    <div className="ui grid centered">
                        <Button 
                        onClick={this.onConfirmClick}
                        color="green"> Confirm </Button>
                        <Button color="red" onClick={this.onCancelClick}> Cancel </Button>
                    </div>
                </Modal.Description>
                </Modal.Content>
            </Modal>
        );
    }

    render() {
        return(
            <Container>
            <div>
                <h1> You are sending a {this.props.disasterAlerts.alertType} {this.props.disasterAlerts.alertEvent} </h1>
                <h1> Which alert(s) would you like to send? </h1>

                <div className="row">
                <div className="column">
                  <br />
                  <br />
                  <img alt="siren" src="http://www.cityofhubbard-oh.gov/wp-content/uploads/2017/04/tornado-siren.jpg" width="200" height="200"></img>
                  <Button inverted 
                  color="blue"
                  onClick={this.onSirenAlertClick}
                  active={this.state.activeAlerts.siren}> Sirens </Button>
                </div>
                

                <div className="column">

                  <br />
                  <br />
                  <img alt="radio" src="https://d1nhio0ox7pgb.cloudfront.net/_img/g_collection_png/standard/256x256/radio.png" width="200" height="200"></img>
                  <Button inverted 
                  color="blue"
                  onClick={this.onRadioAlertClick}
                  active={this.state.activeAlerts.radio}> Radio </Button>

                </div>

                <div className="column">

                  <br />
                  <br />
                  <img alt="tv" src="https://cdn0.iconfinder.com/data/icons/flat-designed-circle-icon-2/1000/television.png" width="200" height="200"></img>
                  <Button inverted
                   color="blue"
                   onClick={this.onTVAlertClick}
                   active={this.state.activeAlerts.tv}> TV Alert </Button>
                </div>

                <div className="column">
                  <br />
                  <br />
                  <img alt="sms" src="https://help.republicwireless.com/hc/article_attachments/115012283727/Google_Messenger_Icon.jpg" width="200" height="200"></img>
                  <Button inverted 
                  color="blue"
                  onClick={this.onSMSAlertClick}
                  active={this.state.activeAlerts.sms}> SMS Alert </Button>
                </div>
              </div>
              <div className="centered row">
                {this.renderModal()}
                <Button color = 'red'onClick={this.restart}> Restart </Button>
              </div>
            </div>

              <center> <h3> <br /> <br /> *** Note: to unclick a button, click the clicked button again then click anywhere outside the button. ***</h3></center>

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