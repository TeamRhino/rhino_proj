import React, { Component } from 'react';
import { 
    Container,
    Button, 
    Form,
    Message
} from 'semantic-ui-react';
import { 
    withRouter,
    Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import {
    PASSWORD_REGEX,
    EMPTY_STRING,
    ERROR_HEADER,
    ERROR_MESSAGE
} from '../../constants';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                confirmpassword: '',
                success: false,
                fireRedirect: false,
                firstNameError: false,
                lastNameError: false,
                usernameError: false,
                passwordError: false,
                confirmError: false
            },
            submitted: false
        };
    }

    handleChange = (e, {name, value}) => {
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    userValidation = (user) => {
        let validated = true
        const REGEX = new RegExp(PASSWORD_REGEX)
        if (user.firstName === EMPTY_STRING) {
            this.setState({ firstNameError : true});
            validated = false;
        } else {
            this.setState({ firstNameError : false});
        } 
        if (user.lastName === EMPTY_STRING) {
            this.setState({ lastNameError : true});
            validated = false;
        } else {
            this.setState({ lastNameError : false});
        }
        if (user.username === EMPTY_STRING) {
            this.setState({ usernameError : true});
            validated = false;
        } else {
            this.setState({ usernameError : false});
        }
        if (REGEX.test(user.password) === false ) {
            this.setState({ passwordError : true});
            validated = false;
        } else {
            this.setState({ passwordError : false});
        }
        if (user.password !== user.confirmpassword) {
            this.setState({ confirmError : true});
            validated = false;
        } else {
            this.setState({ confirmError : false});
        }
        
        return validated;
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const { user } = this.state;
        if (this.userValidation(user)) {
            this.setState({ success: true, fireRedirect: true });
            const { dispatch } = this.props;
            dispatch(userActions.register(user));

        } else {
            this.setState({ failure: true });
        }
        
    }
    render() {
        return(
            <Container>
                    <h1> Registration </h1>
                    <Form 
                    onSubmit={this.handleSubmit}
                    error={this.state.failure}
                    >
                        <Message
                            error
                            header={ERROR_HEADER}
                            content={ERROR_MESSAGE}/>
                        <Form.Group widths='equal'>
                            <Form.Input label='First Name' placeholder='First Name' name='firstName' onChange={this.handleChange} error={this.state.firstNameError} />
                            <Form.Input label='Last Name' placeholder='Last Name' name='lastName' onChange={this.handleChange} error={this.state.lastNameError} />
                        </Form.Group>
                        <Form.Input label='Username' placeholder='Username' name='username' onChange={this.handleChange} error={this.state.usernameError}/>
                        <Form.Group widths='equal'>
                            <Form.Input label='Password'type='password' placeholder='Password' name='password' onChange={this.handleChange} error={this.state.passwordError}/>
                            <Form.Input label='Confirm Password' type='password' placeholder='Password' name='confirmpassword' onChange={this.handleChange} error={this.state.confirmError}/> 
                        </Form.Group> 
                        <Button type='submit'>Submit</Button> 
                    </Form>
                    { this.state.fireRedirect && (<Redirect to={'login'}/>) }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = withRouter(connect(mapStateToProps)(RegisterPage));
export { connectedRegisterPage as RegisterPage };