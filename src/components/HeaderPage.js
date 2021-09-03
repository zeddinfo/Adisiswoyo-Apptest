import React, { useState } from 'react'
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { SafeAreaView } from 'react-native-safe-area-context';
import F5Icon from 'react-native-vector-icons/FontAwesome5';
import { useDispatch } from 'react-redux';
import { filterData, setContact } from '../redux';
import { fonts } from '../styles/fonts';
import Gap from './Gap';
import Search from './Search';

const HeaderPage = ({ count, filter }) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                animated={true}
                backgroundColor="white"
                barStyle={'dark-content'}
                showHideTransition={'fade'}
                hidden={false} />
            <View style={styles.content}>
                <Text style={styles.text}>List Contacts</Text>
                <View style={styles.leading}>
                    <View style={styles.iconUser}>
                        <F5Icon name='users' color='white' size={20} />
                        <Gap width={10} />
                        <Text style={{ fontFamily: fonts.primary[600], color: 'white', textAlign: 'center', alignSelf: 'center' }}>{count}</Text>
                    </View>
                    <Gap width={10} />
                    <TouchableOpacity style={styles.btnAdd} onPress={() => Actions.CreateContact()}>
                        {/* <Text>Hell</Text> */}
                        <F5Icon size={15} color='white' name='plus' />
                    </TouchableOpacity>
                </View>
            </View>
            <Gap height={10} />

        </SafeAreaView>
    )
}

export default HeaderPage

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    content: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    text: {
        fontFamily: fonts.primary[600],
        color: 'black',
        fontSize: 15,
    },
    leading: {
        flexDirection: 'row',
    },
    iconUser: {
        backgroundColor: '#81C2F1',
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnAdd: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: 45,
        height: 45,
        backgroundColor: '#0189EC',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
