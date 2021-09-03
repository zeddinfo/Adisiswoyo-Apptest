import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { fonts } from '../styles/fonts';
import Gap from './Gap';
import AvatarImage from './AvatarImage';



const CardContact = ({ firstName, lastName, image, age, onPress, id }) => {
    const firstNameAlphabet = firstName.split(' ').pop();
    const lastNameAlphabet = lastName.split(' ').pop();
    // console.log('first', firstNameAlphabet.charAt(0), 'last', lastNameAlphabet.charAt(0));
    // console.log('firstname', firstName);
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} testID='card-test'>
            {(image == '' || image == 'N/A') ? <AvatarImage first={firstNameAlphabet.charAt(0)} /> : <Image source={{ uri: image }} style={styles.image} />}

            <Gap width={20} />
            <View style={styles.profile}>
                <Text style={styles.header} testID='name-title'>{`${firstName} ${lastName}`}</Text>
                <Text style={styles.subHeader} testID='age-title'>{`Age ${age}`}</Text>
            </View>

            {/* <View style={styles.icon}>
                <View style={styles.iconArrow}>
                    <Image source={require('../Assets/icons/ic-arrow-right.png')} style={styles.iconArrow} />
                </View>

            </View> */}
        </TouchableOpacity>
    )
}

export default CardContact

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 10,
        flexDirection: 'row',
        borderRadius: 4,
        marginHorizontal: 5,
        borderRadius: 20,

    },
    image: {
        width: 65,
        height: 65,
        borderRadius: 65 / 2,
        resizeMode: 'cover'
    },
    header: {
        fontFamily: fonts.primary[600],
        color: 'black'
    },
    subHeader: {
        fontFamily: fonts.primary.normal,
        color: 'black'
    },
    profile: {
        // alignItems: 'center',
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center'
    },

    icon: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center',
    },
    iconArrow: {
        width: 15,
        height: 15,

    }
})
