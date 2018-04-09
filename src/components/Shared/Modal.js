import React from 'react';
import { 
    Button,
    Modal, 
} from 'semantic-ui-react';
import {
    EMERGENCY_ALERT,
    TEST_ALERT
} from '../../constants'
import './modal.css';

export const ModalClass = (props) => {
    return (
        <Modal trigger={
            <Button>
                <img src={props.image} alt="alert" width="100"></img>
            </Button>
            }>
            <Modal.Header> {props.modalHeader} </Modal.Header>
            <Modal.Content>
                <div class="ui two column centered grid">
                    <InnerModal 
                    buttonLabel={EMERGENCY_ALERT}
                    color="red"/>
                    <InnerModal 
                    buttonLabel={TEST_ALERT}
                    color="green"/>
                </div>
            </Modal.Content>
        </Modal>
    )
}

export const InnerModal = (props) => {
    return (
        <Modal trigger={
            <Button color={props.color}> {props.buttonLabel} </Button>
        }>
        <Modal.Header> Are you sure you want to send out a {props.buttonLabel}? </Modal.Header>
        <Modal.Content>
            <div class="ui two column centered grid">
                <Button> Yes </Button>
                <Button> No </Button>
            </div>
        </Modal.Content>
        </Modal>
    )
}

