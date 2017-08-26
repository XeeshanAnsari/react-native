import React, { Component } from 'react';
import { connect } from 'react-redux';
import AuthMiddleware from '../../store/middlewares/auth_middlewares'
import { Container, Content, Form, Item, Input, Label, Button, Text, Left, Icon, Body, Title } from 'native-base';

function mapDispatchToProps(dispatch) {
    return {
        signup: (user) => { dispatch(AuthMiddleware.signup(user)) }
    }
}

class SignUpForm extends Component {
    static navigationOptions = {
        title: "Signup Form"
    }

    constructor() {
        super()
        this.state = {
            userName: '',
            email: '',
            password: ''
        }
    }

    handleSignUp = () => {
        console.log(this.state);
        this.props.signup(this.state);
        // .then(() => {
        //     console.log("nativajgdsj",this.props.navigation)
        //     this.props.navigation.navigate('LoginRoute')
        // })
    }
    render() {
        return (
            <Container>
                <Content style={styles.mainConatiner}>
                    <Form>
                        <Item floatingLabel>
                            <Label>User Name</Label>
                            <Input
                                value={this.state.userName}
                                onChangeText={(userName) => this.setState({ userName: userName })}
                            />
                        </Item>

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
                        <Container style={styles.buttonContainer}>
                            <Button full info onPress={this.handleSignUp}>
                                <Text>Sign Up</Text>
                            </Button>
                        </Container>
                    </Form>
                </Content>
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

export default connect(null, mapDispatchToProps)(SignUpForm);
