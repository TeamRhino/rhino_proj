import React, { Component } from 'react';
import { 
    Container,
    Button, 
    Form 
} from 'semantic-ui-react';
import { 
    Link, 
    withRouter 
} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
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
    
    handleSubmit = (event) => {
        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        return(
            <Container>
                    <h1> Registration </h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input placeholder='First Name' name='firstName' onChange={this.handleChange} />
                        <Form.Input placeholder='Last Name' name='lastName' onChange={this.handleChange} />
                        <Form.Input placeholder='Username' name='username' onChange={this.handleChange} />
                        <Form.Input placeholder='Password' name='password' onChange={this.handleChange} />  
                        <Link to={'/login'}><Button type='submit'>Submit</Button></Link>
                    </Form>
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