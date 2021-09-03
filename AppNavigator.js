import React from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import { ListContact, CreatePage, EditPage } from './src/pages';
import { BadRequest } from './src/pages/common';

const AppNavigator = () => {
    return (
        <Router>
            <Scene key="Root" hideNavBar={true}>
                <Scene key="ListContact" subtitle="ListContact" component={ListContact} type="reset" />
                <Scene key="CreateContact" subtitle="CreateContact" component={CreatePage} />
                <Scene key="EditContact" subtitle="EditContact" component={EditPage} />
                <Scene key="BadRequest" subtitle="BadRequest" component={BadRequest} />
            </Scene>
        </Router>
    )
}

export default AppNavigator

const styles = StyleSheet.create({})
