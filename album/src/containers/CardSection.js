import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const { containerstyle } = styles;
    return (
        <View style={containerstyle}>
            {props.children}
        </View>
    )
}
const styles = {
    containerstyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'

    },

}
export default CardSection;