import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator'
import SignupScreen from './../screen/SignUpScreen'
import LoginScreen from '../screen/LoginScreen';
import AuthStackNavigator from './AuthStackNavigator';
import { useSelector } from "react-redux"


const Stack = createNativeStackNavigator();

const Navigation = () => {

  const {user} = useSelector(state => state.auth.value)
  console.log('user', user);
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator /> :<AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({

})