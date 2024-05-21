import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screen/LoginScreen';
import SignUpScreen from '../screen/SignUpScreen';


const Stack = createNativeStackNavigator()
const AuthStackNavigator = () => {
  return (
        <Stack.Navigator
            initialRouteName='Login'
            /*se puede agregar un ternario para renderizar distintos headers*/
            // screenOptions = {() => ({ header: () => {return <Header title={'Hi Jota! 👋'} description={'Reserver your Activity'} />}})}
            screenOptions={{ headerShown: false,}}
        >
                <Stack.Screen
                    component={LoginScreen}
                    name='Login'
                />
                <Stack.Screen
                    component={SignUpScreen}
                    name='Signup'
                />

        </Stack.Navigator>
  )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})