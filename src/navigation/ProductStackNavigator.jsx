import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Product from './../screen/Cart'


const Stack = createNativeStackNavigator()
const ProductStack = () => {
  return (
        <Stack.Navigator
            screenOptions={{ headerShown: false,}}
        >
                <Stack.Screen
                    name='Product'
                    component={Product}
                />

        </Stack.Navigator>
  )
}

export default ProductStack

const styles = StyleSheet.create({})