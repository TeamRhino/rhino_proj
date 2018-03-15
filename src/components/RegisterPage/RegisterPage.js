import React, { Component } from 'react';
import { 
    Container,
    Button, 
    Form 
} from 'semantic-ui-react';

class RegisterPage extends Component {
    render() {
        return(
            <Container>
                    <h1> Registration </h1>
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
        )
    }
}

export default RegisterPage;