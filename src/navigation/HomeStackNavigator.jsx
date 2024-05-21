import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Workshop from '../screen/Workshop';
import Store from '../screen/Store';
import FavoriteListCategory from '../screen/FavoriteListCategory';
import Product from '../screen/Product';
import Header from './../components/Header';


const Stack = createNativeStackNavigator()
const HomeStackNavigator = () => {
  return (
        <Stack.Navigator
            initialRouteName='Workshop'
            /*se puede agregar un ternario para renderizar distintos headers*/
            screenOptions = {() => ({ header: () => {return <Header title={'Hi Jota! 👋'} description={'Reserver your Activity'} />}})}
            // screenOptions={{ headerShown: false,}}
        >
                <Stack.Screen
                    component={Workshop}
                    name='Workshop'
                />
                <Stack.Screen
                    component={Store}
                    name='Store'
                />
                <Stack.Screen
                    component={FavoriteListCategory}
                    name='FavoriteListCategory'
                />
                <Stack.Screen
                    component={Product}
                    name='Product'
                />

        </Stack.Navigator>
  )
}

export default HomeStackNavigator

const styles = StyleSheet.create({})