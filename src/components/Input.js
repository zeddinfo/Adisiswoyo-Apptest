import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { fonts } from '../styles/fonts';

const Input = ({ label,
    value,
    onChangeText,
    secureTextEntry,
    disable,
    keyboardType,
    select,
    onValueChange, }) => {
    const [border, setBorder] = useState('#495A75');
    const onFocusForm = () => {
        setBorder('#81C2F1')
    }

    const onBlurForm = () => {
        setBorder('#495A75');
    }
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                testID='input-test'
                onFocus={onFocusForm}
                onBlur={onBlurForm}
                style={styles.input(border)}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                editable={!disable}
                selectTextOnFocus={!disable}
                keyboardType={keyboardType}
            />
        </View>
    );
}

export default Input

const styles = StyleSheet.create({
    input: border => ({
        borderWidth: 1,
        borderColor: border,
        borderRadius: 10,
        padding: 12,
    }),
    label: {
        fontSize: 16,
        marginBottom: 6,
        fontFamily: fonts.primary[400],
        color: '#AeAeAe'
    },
})
