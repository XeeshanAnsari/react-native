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
import { Icon } from 'native-base'

export default class practicalFlexLayout extends Component {
  render() {
    return (
      <View style={styles.PinContainer}>
        <View style={styles.PinHeader}>
          <View style={styles.UtilityNav}>
            <Icon name='menu' />
            <Icon name='menu' />
            <Icon name='menu' />
          </View>
          <View  style={styles.PinButtonContainer}>
            <View style={styles.PinButton}>
              <Icon name='menu' />
              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>
        </View>

        <View style={styles.PinContent}>
          <Text style={styles.ImagePlaceHolder}>Place Holder</Text>
        </View>

        <View style={styles.PinMeta}>
          <View style={styles.PinMetaTextContainer}>
            <Text style={styles.PinMetaText}>Save From</Text>
            <Text style={styles.PinMetaText}>website.com</Text>
          </View>
          <View style={styles.PinMetaButtonContainer}>
            <View style={styles.PinMetaButton}>
              <Text style={styles.PinButtonText}>Save</Text>
            </View>
          </View>

        </View>


        <View style={styles.PinUser}>
          <View style={styles.PinUserAvatar}>
            <Text>Place Holder</Text>
          </View>
          <View style={styles.PinUserContainer}>
            <Text style={styles.PinUserText}>
              <Text style={styles.TextBold}>
                User Name
            </Text>
              <Text>
                saved to
            </Text>
              <Text style={styles.TextBold}>
                Space
            </Text>
            </Text>
            <Text style={styles.PinUserText}>Descripation asdasdasdasd</Text>
          </View>
        </View>


      </View>
    );
  }
}

const styles = {
  PinContainer: {
    flex: 1,
    backgroundColor: '#cecece',
    alignSlef: 'stretch'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 66,
    padding: 8

  },
  UtilityNav: {
    flexDirection: 'row'
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 2,
    borderRadius: 6,
    width: 70
  },
  PinButtonText: {
    color: 'white'
  },
  PinButtonContainer:{
    flex:1,
    alignItems: 'flex-end',
  }


};

AppRegistry.registerComponent('practicalFlexLayout', () => practicalFlexLayout);
