import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, RefreshControl, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Actions } from 'react-native-router-flux';
import { useSelector, useDispatch } from 'react-redux';
import { CardContact, FabButton, Gap, HeaderPage, Search } from '../components';
import Api from '../helper/Api';
import { setContact } from '../redux';
import { fonts } from '../styles/fonts';

const ListContact = () => {
    const { contacts, loading } = useSelector((state) => state);
    const dispatch = useDispatch();
    const [filtered, setFilterd] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [refreshing, setRefreshing] = React.useState(false);

    useEffect(() => {
        dispatch(setContact())
        console.log('contact', contacts);
    }, [dispatch]);

    const onRefresh = () => {
        setRefreshing(true);
        dispatch(setContact());
        setRefreshing(false);
    }

    useEffect(() => {
        setFilterd(contacts.data);
    }, [contacts])

    const renderItem = ({ item, index }) => {
        return (
            <CardContact firstName={item.firstName} image={item.photo} lastName={item.lastName} age={item.age} onPress={() => Actions.EditContact({ data: item.id })} />
        )
    }

    const emptyItem = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center', alignContent: 'center', marginTop: '50%' }}>
                {loading ? <ActivityIndicator size="large" color="red"></ActivityIndicator> : <View style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Image source={require('../Assets/icons/ic-noInet.png')} style={{ width: 250, height: 250 }} />
                    <Gap height={20} />
                    <Text style={{ fontFamily: fonts.primary[600] }}>Kontak tidak ditemukan</Text></View>}
            </View>
        );
    };

    const search = (text) => {
        if (text) {
            const newItem = contacts.data.filter(function (item) {
                const items = item.firstName
                    ? item.firstName.toUpperCase()
                    : ''.toUpperCase();
                const textContact = text.toUpperCase();
                return items.indexOf(textContact) > -1;
            });
            setFilterd(newItem);
            setKeyword(text);
        } else {
            setFilterd(contacts.data);
            setKeyword(text);
            //   setPaketFiltered(paket);
            //   setSearch(text);
            //   console.log(paketFiltered);
        }
    };

    return (
        <View style={styles.page}>
            <HeaderPage count={(loading == false && contacts.data) ? contacts.data.length : '0'} />
            <Search value={keyword} onChangeText={(value) => search(value)} />
            <View style={styles.content}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    data={filtered}
                    keyExtractor={(index) => Math.random()}
                    ListEmptyComponent={emptyItem}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh} />
                    }
                />

            </View>
            {/* <FabButton onPress={() => Actions.CreateContact()} /> */}
        </View>

    )
}

export default ListContact

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    content: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        flex: 1,
    }
})
