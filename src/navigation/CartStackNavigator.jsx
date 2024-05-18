import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from './../components/Header';
import Cart from './../screen/Cart'


const Stack = createNativeStackNavigator()
const CartStack = () => {
  return (
        <Stack.Navigator
            /*se puede agregar un ternario para renderizar distintos headers*/
            // screenOptions = {() => ({ header: () => {return <Header title={'Hi Jota! 👋'} description={'Reserver your Activity'} />}})}
            screenOptions={{ headerShown: false,}}
        >
                <Stack.Screen
                    name='Cart'
                    component={Cart}
                />

        </Stack.Navigator>
  )
}

export default CartStack

const styles = StyleSheet.create({})