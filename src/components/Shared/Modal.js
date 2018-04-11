import React, { Component } from 'react';
import { 
    Button,
    Modal, 
} from 'semantic-ui-react';
import {
    EMERGENCY_ALERT,
    TEST_ALERT
} from '../../constants';
import {
    Link
} from 'react-router-dom';
import './modal.css';

export class ModalClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    handleOpen = () => this.setState({ open: true });

    handleClose = () => this.setState({ open: false });

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
                <div class="ui two column centered grid">
                    <InnerModal 
                    buttonLabel={EMERGENCY_ALERT}
                    link={this.props.link}
                    color="red"
                    handleClose={this.handleClose}/>
                    <InnerModal 
                    buttonLabel={TEST_ALERT}
                    link={this.props.link}
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
            <Button color={props.color}> {props.buttonLabel} </Button>
        }>
        <Modal.Header> Are you sure you want to send out a {props.buttonLabel}? </Modal.Header>
        <Modal.Content>
            <div class="ui two column centered grid">
                <Link to={props.link}><Button> Yes </Button></Link>
                <Button onClick={props.handleClose}> No </Button>
            </div>
        </Modal.Content>
        </Modal>
    )
}

