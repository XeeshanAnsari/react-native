import React, { Component } from 'react';
import { Container, Drawer, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import LoginForm from '../LoginForm/LoginForm';
import { StackNavigator } from 'react-navigation';
import DrawerNavigation from '../../navigation';
import { Provider } from 'react-redux';
import store from '../../store/store';

class Home extends Component {

    render() {
        return (

            <Provider store={store}>
                <Container>
                    <Header>
                        <Left>
                            <Button transparent>
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>App</Title>
                        </Body>
                        <Right />
                    </Header>
                     <DrawerNavigation /> 
                </Container>
            </Provider>

        )
    }
}



export default Home;