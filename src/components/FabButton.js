import React from 'react'
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import F5Icon from 'react-native-vector-icons/FontAwesome5';

const FabButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <F5Icon name="plus" size={25} color="white" />
        </TouchableOpacity>
    )
}

export default FabButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 40,
        right: 50,
        backgroundColor: '#7F58AF',
        width: 60,
        height: 60,
        borderRadius: 60,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
    }
})
