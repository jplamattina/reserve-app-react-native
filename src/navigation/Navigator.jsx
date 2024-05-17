import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator'


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({

})