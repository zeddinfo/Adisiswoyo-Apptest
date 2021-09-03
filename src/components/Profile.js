import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../styles/fonts'

const Profile = ({ firstName, lastName, age, isRemove, photo, onPress, path }) => {
    return (
        <View style={styles.container}>
            {!isRemove && (
                <View style={styles.borderProfile}>
                    <Image source={photo} style={styles.avatar} />
                </View>
            )}
            {isRemove && (
                <TouchableOpacity style={styles.borderProfile} onPress={onPress}>
                    {path != '' ? <Image source={{ uri: path }} style={styles.avatar} /> : <Image source={require('../Assets/icons/ic-profile.png')} style={styles.avatar} />}

                    {isRemove && <Image source={require('../Assets/icons/ic-remove.png')} style={styles.removePhoto} />}
                </TouchableOpacity>
            )}
            {firstName && (
                <View>
                    <Text style={styles.name}>{`${firstName} ${lastName}`}</Text>
                    <Text style={styles.profession}>{age}</Text>
                </View>
            )}
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: { justifyContent: 'center', alignItems: 'center' },
    avatar: { width: 110, height: 110, borderRadius: 110 / 2 },
    borderProfile: {
        width: 130,
        height: 130,
        borderRadius: 130 / 2,
        borderWidth: 1,
        borderColor: '#CCCC',
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: '#CCCC',
        marginTop: 16,
        textAlign: 'center',
    },
    profession: {
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color: '#CCCC',
        marginTop: 2,
        textAlign: 'center',
    },
    removePhoto: { position: 'absolute', right: 8, bottom: 8, width: 35, height: 35 },
})
