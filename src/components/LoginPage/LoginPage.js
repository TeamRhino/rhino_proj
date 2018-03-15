import React, { Component } from 'react';
import { 
    Container,
    Button,
    Form 
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { userActions } from '../../actions';
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

    }

    handleChange = (e, { name, value }) => this.setState({[name]: value})

    handleSubmit = () => {
        console.log('hello');
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username,password))
        }
    }

    render() {
        return(
            <div class="login page padding">
                <Container>
                    <h1> State of Hawaii Alert System </h1>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Input placeholder='Username' name='username' onChange={this.handleChange} />
                        <Form.Input placeholder='Password' name='password' onChange={this.handleChange} />  
                        <Button type='submit'>Submit</Button>
                    </Form>

                    <div class="login page padding"> 
                        <Link to={'/register'}><h4>Register</h4></Link> 
                    </div>
                </Container>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };