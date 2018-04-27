import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Button
} from 'semantic-ui-react';
import { disasterAlertActions } from '../../actions'

export default class SuccessPage extends Component {
    constructor(props) {
        super(props);
    }

    handleOnClick = () => {
        const { dispatch } = this.props;
        dispatch(disasterAlertActions.goToMainPage());
    }

    playSirenAlert() {
        if (this.props.alertTypes.siren) {
            return(
                <div>
                    <h2> To simulate a siren alert the following play button is placed. Autoplay is not allowed in modern browsers </h2>
                    <audio controls src="http://soundbible.com/grab.php?id=2056&type=mp3"> </audio>
                </div>
            )
        }
    }

  playRadioAlert() {
    if (this.props.alertTypes.radio) {
      return (
          <div>
            <div>
              <h2> To simulate a radio alert the following play button is placed. </h2>
              <audio controls src="http://soundbible.com/grab.php?id=1063&type=mp3"> </audio>
            </div>
          </div>
      )
    }
  }

    playTVAlert() {
        if (this.props.alertTypes.tv) {
            return (
                <div>
                    <h2> To simulate a TV alert a Youtube video is linked </h2>
                    <iframe width="420" height="315"
                            src="https://www.youtube.com/embed/jE4z-vYC8Vc" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
                    </iframe>
                </div>
            )
        }
    }

  playSMSAlert() {
    if (this.props.alertTypes.tv) {
      return (
          <div>
            <h2></h2>
            <h2> A text message alert has been sent to all of the residents of Hawai'i. </h2>
            <h2></h2>
          </div>
      )
    }
  }

    render() {
        return(
            <div>
                <Container>
                <h1> Success! </h1>
                {this.playSirenAlert()}
                {this.playRadioAlert()}
                {this.playTVAlert()}
                {this.playSMSAlert()}
                  <Button onClick={this.handleOnClick}> Return to Main Menu </Button>
                </Container>
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { alertTypes } = state.disasterAlerts;
    const { users } = state.authentication;
    return {
        alertTypes,
        users
    };
}

const connnectedSuccessPage = connect(mapStateToProps)(SuccessPage);
export { connnectedSuccessPage as SuccessPage };