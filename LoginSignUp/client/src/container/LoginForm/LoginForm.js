import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthMiddleware from '../../store/middlewares/auth_middlewares';
import { Container, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Title } from 'native-base';



function mapDispatchToProps(dispatch) {
    return {
        signin: (user) => { dispatch(AuthMiddleware.signin(user)) }
    }
}

class LoginForm extends Component {
    static navigationOptions = {
        title: "Login Form"
    }
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSignin = () => {
        console.log(this.state);
        this.props.signin(this.state);
    }

    render() {
        return (
            <Container>
                <Form>
                    <Item floatingLabel>
                        <Label>Email</Label>
                        <Input
                            value={this.state.email}
                            onChangeText={(email) => this.setState({ email: email })}
                        />
                    </Item>
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input
                            value={this.state.password}
                            onChangeText={(password) => this.setState({ password: password })}
                        />
                    </Item>
                    <Item>
                        <Container style={styles.buttonContainer}>
                            <Button info onPress={this.handleSignin}>
                                <Text>LOGIN</Text>
                            </Button>
                        </Container>
                    </Item>


                </Form>

            </Container>
        )

    }
}

const styles = {
    mainConatiner: {
        padding: 20,
    },
    buttonContainer: {
        paddingTop: 30
    }
}


export default connect(null, mapDispatchToProps)(LoginForm);