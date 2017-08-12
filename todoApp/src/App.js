import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import {
    Text
} from 'react-native';
import Todo from './container/Todo'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Todo />
            </Provider>
        )
    }
}

export default App;