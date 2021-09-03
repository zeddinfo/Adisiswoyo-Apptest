import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../styles/fonts'

const AvatarImage = ({ first, second }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.alphabet}>{`${first ?? ''}${second ?? ''}`}</Text>
        </View>
    )
}

export default AvatarImage

const styles = StyleSheet.create({
    container: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        backgroundColor: '#64c5EB',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    alphabet: {
        fontFamily: fonts.primary[600],
        fontSize: 50,
        color: 'white'
    }
})
