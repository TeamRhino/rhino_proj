import React, { Component } from 'react';
import { 
    Container,
    Button,
    Form 
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export default class AlertPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h1> Which alert(s) would you like to send? </h1>
            </div>
        )
    }
}
