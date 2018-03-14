import React, { Component } from 'react';
import { 
    Container,
    Button, 
    Form 
} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        <Redirect to={{ pathname: '/register' }} />
    }

    render() {
        return(
            <div class="login page padding">
                <Container>
                    <h1> State of Hawaii Alert System </h1>
                    <Form>
                        <Form.Field>
                            <label>Username</label>
                            <input placeholder='Username' />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input placeholder='********' />
                        </Form.Field>
                        <Button 
                        type='submit'
                        onClick={this.handleClick}
                        >Submit</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

export default LoginPage;