import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import buttonStyle from '../styles/buttonStyle'
import PropTypes from 'prop-types'


export default function CustomButton(props) {
    return (
        <TouchableOpacity>
            <View style={[buttonStyle.defaultButton, { backgroundColor: props.backgroundColor, width: props.width, height: props.height }, buttonStyle[props.size]]} onPress={props.click}>
                <Text style={[{ color: props.color ? props.color : 'black' },buttonStyle[`${props.size}Font`]]}>{props.title}</Text>
            </View>
        </TouchableOpacity>

    );
}

CustomButton.prototype = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    click: PropTypes.func,
    width: PropTypes.number,
    height: PropTypes.number,
    size: PropTypes.string

}
CustomButton.defaultProps = {
    title: 'button',
    color: 'while',
    backgroundColor: 'blue',
    click: () => { },
    width: 100,
    height: 50,
    size: 'small'

}