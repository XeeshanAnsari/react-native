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
  View,
  Image,
  Dimensions,
  ScrollView
} from 'react-native';
import { Icon } from 'native-base'


const Pin = () => {
  return (
    <View>
      <View style={styles.PinHeader}>
        <View style={styles.UtilityNav}>
          <Icon name='arrow-back' />
          <Icon style={styles.UtilityNavIcon} name='heart' />
          <Icon style={styles.UtilityNavIcon} name='share' />
          <Icon style={styles.UtilityNavIcon} name='more' />
        </View>
        <View style={styles.PinButtonContainer}>
          <View style={styles.PinButton}>
            <Icon name='pin' />
            <Text style={styles.PinButtonText}>Save</Text>
          </View>
        </View>
      </View>

      <View style={styles.PinContent}>
        {/* <Text style={styles.ImagePlaceHolder}>Place Holder</Text> */}
        <Image style={styles.PinContentImage} source={require('./image/postImage.jpg')}
        />
      </View>

      <View style={styles.PinMeta}>
        <View style={styles.PinMetaTextContainer}>
          <Text style={styles.PinMetaText}>Save From</Text>
          <Text style={[styles.PinMetaText, styles.TextBold]}>website.com</Text>
        </View>
        <View style={styles.PinButtonContainer}>
          <View style={[styles.PinButton, styles.UtilityButton]}>
            <Text style={styles.UtilityButtonText}>Visit</Text>
          </View>
        </View>
      </View>


      <View style={styles.PinUser}>
        <View style={styles.PinUserAvatar}>

        </View>
        <View style={styles.PinUserContainer}>
          <Text style={styles.PinUserText}>
            <Text style={styles.TextBold}>User Name</Text>
            <Text> saved to </Text>
            <Text style={styles.TextBold}>Space</Text>
          </Text>
          <Text style={styles.PinUserText}>Descripation asdasdasdasd</Text>
        </View>
      </View>


    </View>
  )
}

export default class practicalFlexLayout extends Component {
  render() {
    return (
      <ScrollView style={styles.PinContainer}>
        <Pin />
        <Pin />
        <Pin />
      </ScrollView>
    );
  }
}

const styles = {
  PinContainer: {
    flex: 1,
    backgroundColor: 'white',
    // alignSelf: 'stretch'
  },
  PinHeader: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    minHeight: 50,
    padding: 8

  },
  UtilityNav: {
    flexDirection: 'row'
  },
  UtilityNavIcon: {
    marginLeft: 20
  },
  PinButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  PinButton: {
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 2,
    borderRadius: 8,
    width: 70
  },
  PinButtonText: {
    color: 'white'
  },
  PinContent: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 8,
    paddingRight: 8,

  },
  PinContentImage: {
    width: Dimensions.get('window').width - 16,
    height: 300

  },
  ImagePlaceHolder: {
    backgroundColor: '#1e1e1e',
    flex: 1,
    alignSelf: 'stretch',
    borderRadius: 6
  },
  PinMeta: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 16,
    paddingRight: 8,
    paddingLeft: 16,
    minHeight: 70,
  },
  PinMetaTextContainer: {

  },
  UtilityButton: {
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center'
  },
  UtilityButtonText: {
    color: 'black',
  },
  TextBold: {
    fontWeight: 'bold',
  },
  PinUser: {
    flex: 5,
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 8
  },
  PinUserAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'black',
    marginRight: 8
  },
  PinUserContainer: {

  }




};

AppRegistry.registerComponent('practicalFlexLayout', () => practicalFlexLayout);
