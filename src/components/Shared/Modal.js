import React, { Component } from 'react';
import { 
    Button,
    Header,
    Image, 
    Modal, 
    Icon 
} from 'semantic-ui-react';

const ModalClass = () => {
    return (
        <Modal trigger={
            <Button>
                <img src={this.props.image} width="100"></img>
            </Button>
            }>
            <Modal.Header> {this.props.modalHeader} </Modal.Header>
        </Modal>
    )
    
}

export default ModalClass;