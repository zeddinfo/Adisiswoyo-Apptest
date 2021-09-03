import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';

const Search = ({ value,
    onChangeText,
    onFocus,
    onBlur,
    onPress,
    width,
    background,
    placeholder }) => {

    const [border, setBorder] = useState('#495A75');
    const onFocusForm = () => {
        setBorder('#81C2F1')
    }

    const onBlurForm = () => {
        setBorder('#495A75');
    }
    return (
        <View style={styles.container}>
            <View style={styles.sectionStyle(width, background, border)}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignItems: 'center',
                    }}
                    onPress={onPress}>
                    <FA5Icon name="search" size={20} color={border} />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput(background, border)}
                    placeholder={placeholder ? placeholder : 'Silahkan Cari Kontak'}
                    defaultValue={value}
                    onChangeText={onChangeText}
                    onFocus={onFocusForm}
                    onBlur={onBlurForm}
                />
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        marginTop: -15
    },
    sectionStyle: (widthParam, background, border) => ({
        flexDirection: 'row',
        paddingLeft: 10,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2F2F2',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: border,
    }),
    textInput: (background, border) => ({
        marginLeft: 10,
        color: 'black',
        backgroundColor: '#F2F2F2',
        width: '80%',
        height: 45,
        borderBottomWidth: 0,
        borderBottomColor: border,
    }),
    imageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    btnFilter: {
        backgroundColor: '#D2292D',
        marginLeft: 10,
    },
})
