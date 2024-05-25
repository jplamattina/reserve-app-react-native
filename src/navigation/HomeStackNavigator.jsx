import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Workshop from '../screen/Workshop';
import Store from '../screen/Store';
import FavoriteListCategory from '../screen/FavoriteListCategory';
import Product from '../screen/Product';
import Header from './../components/Header';
import { useSelector } from 'react-redux';


const Stack = createNativeStackNavigator()
const HomeStackNavigator = () => {
    const {user} = useSelector(state => state.auth.value)
    const userName = user.split('@')[0]

  return (
        <Stack.Navigator
            initialRouteName='Workshop'
            screenOptions={({ navigation, route }) => ({
                header: () => {
                switch (route.name) {
                    case 'Store':
                    return <Header navigation={navigation} title="" user={[userName, '!']} description="Buy a gift!" />;
                    case 'Workshop':
                    return <Header navigation={navigation} title="Wellcome" user={[userName, '!']} description="Reserve your Activity" />;
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