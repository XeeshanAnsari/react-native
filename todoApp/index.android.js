/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import App from './src/App'

export default class TodoApp extends Component {
  render() {
    return (
     <App/>
    );
  }
}


AppRegistry.registerComponent('todoApp', () => TodoApp);
