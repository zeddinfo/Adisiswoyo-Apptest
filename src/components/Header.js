import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { fonts } from '../styles/fonts';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import Gap from './Gap';
import { TouchableOpacity } from 'react-native';

const Header = ({ onPress, title, isDelete, onDelete }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <F5Icon name="arrow-left" color="black" size={20} />
            </TouchableOpacity>
            <Text style={styles.text}>{title}</Text>
            <Gap width={24} />
            {isDelete && <TouchableOpacity onPress={onDelete} testID='delete-button'>
                <F5Icon color="red" name="trash" size={20} />
            </TouchableOpacity>}

        </View>
    );
}

export default Header

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
    },
    text: {
        textAlign: 'center',
        flex: 1,
        fontSize: 15,
        fontFamily: fonts.primary[600],
        color: 'black',
        textTransform: 'capitalize',
    },
});
