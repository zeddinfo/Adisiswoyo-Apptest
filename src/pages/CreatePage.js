import React, { useState } from 'react'
import { ScrollView, StyleSheet, Text, View, PermissionsAndroid, ActivityIndicator, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Gap, Header, Input, Profile } from '../components'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Api from '../helper/Api';
import { useSelector, useDispatch } from 'react-redux';
import { storeData } from '../redux/actions';

const CreatePage = (props) => {
    const [photo, setPhoto] = useState('');
    const [path, setPath] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state);

    const onContinue = async () => {
        const param = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            photo: `data:image/jpeg;base64,${photo}`,
        }
        dispatch(storeData(param));
    }

    const getImage = async () => {
        const options = {
            maxWidth: 750,
            maxHeight: 750,
            includeBase64: true,
        };
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                {
                    title: 'Perhatian',
                    message:
                        'Minta ijin kamera ya guys',
                    // buttonNeutral: 'Ask me later',
                    buttonNegative: 'Batal',
                    buttonPositive: 'Ijinkan',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Gallery permission granted');
                launchImageLibrary(options, (response) => {
                    console.log('open gallery ...');
                    if (response.didCancel) {
                        console.log('Belum memilih gambar');
                    } else if (response.error) {
                        console.log('Terhadi kesalahan');
                    }
                    console.log('response image', response.assets);
                    setPhoto(response.assets[0].base64);
                    setPath(response.assets[0].uri);
                })
            } else {
                console.log('Gallery permission denied');
            }
        } catch (error) {
            console.log('error catch', error);
        }
    }
    return (
        <ScrollView style={styles.page} showsHorizontalScrollIndicator={false}>
            <Header title="Tambah Kontak" onPress={() => Actions.pop()} />
            <View style={styles.content}>
                <Profile isRemove onPress={getImage} photo={photo} path={path} />
                <Gap height={26} />
                <Input
                    label="First Name"
                    value={firstName}
                    onChangeText={value => setFirstName(value)}
                />
                <Gap height={24} />
                <Input
                    label="Last Name"
                    value={lastName}
                    onChangeText={value => setLastName(value)}
                />
                <Gap height={24} />
                <Input
                    label="age"
                    value={age}
                    keyboardType="numeric"
                    onChangeText={value => setAge(value)}
                />
                <Gap height={40} />
                <Button title="Simpan" onPress={onContinue} />
            </View>

        </ScrollView>
    )
}

export default CreatePage

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    content: {
        padding: 20,
        paddingTop: 0,
    }
})
