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
  Dimensions
} from 'react-native';
import { Button, Icon, Thumbnail } from 'native-base'
export default class card extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.CardContainer}>
          <View style={styles.CardHeader}>
            <View >
              <Image style={styles.CardHeaderAvater} source={require('./images/wellcome.png')} />
            </View>
            <View style={styles.CardHeaderTextContainer}>
              <Text style={styles.CardHeaderTextOne}>Logo Design</Text>
              <Text style={styles.CardHeaderTextTwo}>Basic Package</Text>
            </View>
          </View>

          <View style={styles.CardBody}>
            <View style={styles.CardBodyLeftContainer}>
              <View style={styles.PackageListContainer}>
                <Icon ios='ios-checkmark' android="md-checkmark" />
                <Text style={styles.PackageListText}>Logo Design Concepts</Text>
              </View>
              <View style={styles.PackageListContainer}>
                <Icon ios='ios-checkmark' android="md-checkmark" />
                <Text style={styles.PackageListText}>Number of Revision 1</Text>
              </View>
              <View style={styles.PackageListContainer}>
                <Icon ios='ios-checkmark' android="md-checkmark" />
                <Text style={styles.PackageListText}>Standard Delivery 24 Hours</Text>
              </View>
              <View style={styles.PackageListContainer}>
                <Icon ios='ios-checkmark' android="md-checkmark" />
                <Text style={styles.PackageListText}>Logo Design Concepts</Text>
              </View>

            </View>
            <View style={styles.CardBodyRightContainer}>
              <View style={styles.PackagePriceContainer}>
                <Text>Now Only For</Text>
                <Text style={styles.ActualPriceText}>$45</Text>
                <Text style={styles.OldPriceText}>was $51</Text>
              </View>
            </View>
          </View>

          <View style={styles.CardFooter}>
            <View style={styles.MoreDetailButtonContainer}>
              <View style={[styles.MoreDetailButton, styles.ButtonStyle]}>
                <Icon style={styles.ButtonIcon} ios='ios-menu' android="md-menu" />
                <Text style={[styles.ButtonText, styles.MoreDetailButtonText]}>MORE DETAILS</Text>
              </View>
            </View>
            <View style={styles.OrderButtonContainer}>
              <View style={[styles.OrderButton, styles.ButtonStyle]} >
                <Icon style={styles.ButtonIcon} ios='ios-menu' android="md-menu" />
                <Text style={[styles.ButtonText, styles.OrderButtonText]}>ORDER NOW</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

    );
  }
}

const styles = {
  Container: {
    padding: 10,
    paddingTop: 15,
    backgroundColor: '#cecece',
  },
  CardContainer: {
    backgroundColor: "white",
    padding: 15,
    flexDirection: 'column',
    borderRadius: 5,
  },
  CardHeader: {
    flexDirection: 'row',
  },
  CardHeaderAvater: {
    width: 50,
    height: 50,
    borderColor:'black',
    borderWidth: 1,
    borderRadius: 25,
    resizeMode: 'stretch'
  },
  CardHeaderTextContainer: {
    marginLeft: 10,
    marginTop: 2
  },
  CardHeaderTextOne: {
    color: "black"
  },
  CardHeaderTextTwo: {
    fontSize: 20,
    color: "black"
  },
  CardBody: {
    minHeight: 230,
    marginTop: 20,
    flexDirection: 'row',
  },
  CardBodyLeftContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center'
  },
  PackageListContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    minWidth: Dimensions.get('window').width - 150
  },
  PackageListText: {
    marginLeft: 8,
    color: '#1e1e1e'
  },
  CardBodyRightContainer: {
    justifyContent: 'center',
    marginLeft: 10
  },
  PackagePriceContainer: {
    alignItems: 'flex-end',
  },
  ActualPriceText: {
    fontSize: 40,
    color: 'red'
  },
  CardFooter: {
    flexDirection: 'row'
  },
  ButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal:8,
    paddingVertical:6,   
    borderRadius: 5
  },
  MoreDetailButton: {
    backgroundColor: '#cecece',
  },
  OrderButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  OrderButton: {
    backgroundColor: 'red',
  },
  ButtonIcon: {
    fontSize: 20
  },
  ButtonText: {
    fontSize: 10,
    marginLeft: 5
  }
}

AppRegistry.registerComponent('card', () => card);
