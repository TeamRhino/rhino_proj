import React, { Component } from 'react';
import { 
    Button,
    Modal, 
} from 'semantic-ui-react';
import {
    EMERGENCY_ALERT,
    TEST_ALERT
} from '../../constants';
import './modal.css';
import PropTypes from 'prop-types';


export class ModalClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            alertType: ''
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.onTestAlertClick = this.onTestAlertClick.bind(this);
        this.onEmergencyAlertClick = this.onEmergencyAlertClick.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

    onTestAlertClick = () => {
        this.setState({ alertType: TEST_ALERT })
    }

    onEmergencyAlertClick = () => this.setState({ alertType: EMERGENCY_ALERT })

    eventHandler = () => {
        this.props.eventHandler(this.state.alertType);
    }

    handleClick = () => {
        this.eventHandler();
        this.props.handleClick();    
    }

    render() {
        return (
        <Modal open={this.state.open}
        trigger={
            <Button onClick={this.handleOpen}>
                <img src={this.props.image} alt="alert" width="100"></img>
            </Button>
            }>
            <Modal.Header> {this.props.modalHeader} </Modal.Header>
            <Modal.Content>
                <div className="ui two column centered grid">
                    <InnerModal 
                    buttonLabel={EMERGENCY_ALERT}
                    link={this.props.link}
                    onClick={this.onEmergencyAlertClick}
                    handleClick={this.handleClick}
                    color="red"
                    handleClose={this.handleClose}/>
                    <InnerModal 
                    buttonLabel={TEST_ALERT}
                    link={this.props.link}
                    handleClick={this.handleClick}
                    onClick={this.onTestAlertClick}
                    color="green"
                    handleClose={this.handleClose}/>
                </div>
            </Modal.Content>
        </Modal>
    )
    }
}

export const InnerModal = (props) => {
    return (
        <Modal trigger={
            <Button onClick={props.onClick} color={props.color}> {props.buttonLabel} </Button>
        }>
        <Modal.Header> Are you sure you want to send out a {props.buttonLabel}? </Modal.Header>
        <Modal.Content>
            <div className="ui two column centered grid">
                <Button onClick={props.handleClick}> Yes </Button>
                <Button onClick={props.handleClose}> No </Button>
            </div>
        </Modal.Content>
        </Modal>
    )
}

ModalClass.PropTypes = {
    image: PropType.string.isRequired,
    modalHeader: PropType.string.isRequired,
    handleClick: PropType.func,
    eventHandler: PropType.func,
    link: PropType.string.isRequired
}

ModalClass.defaultProps = {
    image: "",
    modalHeader: "What would you like to do?",
    link: "/",
}