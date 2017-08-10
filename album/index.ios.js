/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Header from './src/containers/Header'
import AlbumList from './src/containers/AlbumList'

export default class Album extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={"Albums"} />
        <AlbumList />
      </View>
    );
  }
}


AppRegistry.registerComponent('album', () => Album);
