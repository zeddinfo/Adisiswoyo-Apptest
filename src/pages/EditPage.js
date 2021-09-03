import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, PermissionsAndroid, ActivityIndicator, } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Button, Gap, Header, Input, Profile } from '../components'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Api from '../helper/Api';
import { useSelector, useDispatch } from 'react-redux';
import { destroyData, setLoading, storeData, updateData } from '../redux/actions';
import AwesomeAlert from 'react-native-awesome-alerts';

const EditPage = (props) => {
    const { loading } = useSelector((state) => state);
    const [photo, setPhoto] = useState('');
    const [path, setPath] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const dispatch = useDispatch();
    const [showAlert, setShowAlert] = useState(false);


    const getcontact = async () => {
        dispatch(setLoading(true));
        const result = await Api.get(`contact/${props.data}`)
            .then(response => {
                dispatch(setLoading(false));
                console.log('responsdata', response.data);
                const respon = response.data;
                setFirstName(respon.data.firstName);
                setLastName(respon.data.lastName);
                setAge(respon.data.age.toString());
                setPath(respon.data.photo);
            })
            .catch(error => {
                console.log('error', error);
            })
    }

    const onContinue = async () => {
        const param = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            photo: `data:image/jpeg;base64,${photo}`,
        }
        dispatch(updateData(props.data, param));
    }

    useEffect(() => {
        getcontact()
    }, [])

    const handleDelete = () => {
        setShowAlert(!showAlert);
    }

    const actionDelete = () => {
        dispatch(destroyData(props.data));
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
            {loading && <View style={{ flex: 1 }}><ActivityIndicator size="large" color="red"></ActivityIndicator></View>
            }
            <Header title="Detail Kontak" onPress={() => Actions.pop()} isDelete={true} onDelete={() => handleDelete()} />
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
                <Button title="Update" onPress={onContinue} />
            </View>
            <AwesomeAlert
                show={showAlert}
                showProgress={false}
                title="Apakah Yakin"
                message="Ingin hapus data ini?"
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showCancelButton={true}
                showConfirmButton={true}
                cancelText="Tidak, Batalkan"
                confirmText="Ya, Hapus"
                confirmButtonColor="#DD6B55"
                onCancelPressed={() => {
                    setShowAlert(false);
                }}
                onConfirmPressed={() => {
                    actionDelete()
                }}
            />

        </ScrollView>
    )
}

export default EditPage

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
