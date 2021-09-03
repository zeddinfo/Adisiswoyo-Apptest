import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../styles/fonts'

const Button = ({ title, onPress, }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} testID='button'>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0BCAD4',
        paddingVertical: 10,
        borderRadius: 10,
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary[600],
        textAlign: 'center',
        color: 'white'
    }
})
