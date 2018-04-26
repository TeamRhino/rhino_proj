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

    playTVAlert() {
        if (this.props.alertTypes.tv) {
            return (
                <div>
                    <h2> To simulate a TV alert a Youtube video is linked </h2>
                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/ec7IN0KLWlU?autoplay=1">
                    </iframe>

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
                {this.playTVAlert()}
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