import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HomePage.css';
import {
    Link,
    withRouter
  } from 'react-router-dom';
<<<<<<< HEAD
import {
    HOMEPAGE_TITLE
} from '../../constants';
import ModalClass from '../Shared/Modal';
import { Button } from 'semantic-ui-react';

=======
import { 
    Button,
    Header,
    Image, 
    Modal, 
    Icon 
} from 'semantic-ui-react';

  
>>>>>>> master

class HomePage extends Component {
    render() {
        return(
            <div>
              <h1 align="center">{HOMEPAGE_TITLE}</h1>
              <div class="left">
                  <h2 align = "left"><a name = "ManMade">Man Made Disaster</a></h2>
                  <figure>
<<<<<<< HEAD
                    <ModalClass
                        image="https://www.iconexperience.com/_img/v_collection_png/512x512/shadow/ballistic_missile.png"
                        modalHeader="What type of alert would you like to send?">
                    </ModalClass>
                  </figure>
=======
                    <Modal trigger={
                        <Button>
                            <img src="https://www.iconexperience.com/_img/v_collection_png/512x512/shadow/ballistic_missile.png" width="100"></img>
                        </Button>
                        }>
                        <Modal.Header>What type of alert would you like to send? </Modal.Header>
                        <Modal.Content>
                        </Modal.Content>
                    </Modal>
                    </figure>
>>>>>>> master
                </div>

                <div class="right">
                  <h2 ><a name = "Natural">Natural Disaster</a></h2>
                  <figure>
<<<<<<< HEAD
                    <ModalClass
                            image="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-01-512.png"
                            modalHeader="What type of alert would you like to send?">
                    </ModalClass>
                  </figure>

                  <figure>
                    <ModalClass
                            image="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_TornadoGradient.png"
                            modalHeader="What type of alert would you like to send?">
                    </ModalClass>
=======
                  <Modal trigger={
                        <Button>
                            <img src="https://cdn4.iconfinder.com/data/icons/aami-flat-disaster/64/disasters-01-512.png" width="100"></img>
                        </Button>
                        }>
                        <Modal.Header>What type of alert would you like to send? </Modal.Header>
                        <Modal.Content>
                        </Modal.Content>
                    </Modal>
                  </figure>

                  <figure>

                      <Modal trigger={
                        <Button>
                            <img src="https://cdn1.iconfinder.com/data/icons/weather-elements/512/Weather_TornadoGradient.png" width="100"></img>
                        </Button>
                        }>
                        <Modal.Header>What type of alert would you like to send? </Modal.Header>
                        <Modal.Content>
                        </Modal.Content>
                    </Modal>
>>>>>>> master
                  </figure>
                </div>
            </div>
    );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
  }

const connectedHomePage = connect(mapStateToProps)(HomePage);
export { connectedHomePage as HomePage };