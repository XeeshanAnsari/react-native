import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = (prop) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{prop.headerText}</Text>
        </View>
    )
}

const styles = {
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#00edd0',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 30
    }
}



export default Header;