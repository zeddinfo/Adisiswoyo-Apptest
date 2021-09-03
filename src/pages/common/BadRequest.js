import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { fonts } from '../../styles/fonts'

const BadRequest = (props) => {
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Image source={require('../../Assets/icons/ic-bad-request.png')} style={styles.image} />
                <Text style={styles.title}>Oop, Terjadi Kesalahan</Text>
                <Text style={styles.subtitle}>Pesan kesalahan : {props.message}</Text>
            </View>
        </View>
    )
}

export default BadRequest

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 300, height: 300
    },
    content: {
        alignItems: 'center',
    },
    title: {
        fontFamily: fonts.primary[600],
        fontSize: 20,
        color: '#001'
    },
    subtitle: {
        fontFamily: fonts.primary[600],
        fontSize: 15,
        color: '#003'
    },
})
