import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import AppNavigator from './AppNavigator'
import { store } from './src/redux'

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})
