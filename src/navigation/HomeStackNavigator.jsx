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
            screenOptions={({ navigation, route }) => ({
                header: () => {
                switch (route.name) {
                    case 'MyProfile':
                    return <Header navigation={navigation} title="asd" user='coder' description="Reserve your Activity" />;
                    case 'Store':
                    return <Header navigation={navigation} title="" user='coder' description="Reserve your Activity" />;
                    case 'Workshop':
                    return <Header navigation={navigation} title="User023" user='coder' description="Reserve your Activity" />;
                    default:
                    return null;
                }
                },
                headerShown: true,
            })}
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