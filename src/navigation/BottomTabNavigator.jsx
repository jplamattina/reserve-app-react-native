import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { colors } from './../constants/colors'
import Store from '../screen/Store';
import Header from './../components/Header'
import HeaderProfile from './../components/HeaderProfile'
import { FontAwesome5, Entypo, AntDesign, FontAwesome } from "@expo/vector-icons"
import HomeStackNavigator from './HomeStackNavigator';
import CartStack from './CartStackNavigator';
import MyProfileStackNavigator from './MyprofileStackNavigator'
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator()

const BottomTabNavigator = () => {
    const {user} = useSelector(state => state.auth.value)
    const userName = user.split('@')[0]
  return (
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ navigation, route }) => {
                    let header = null;
                    switch (route.name) {
                        case 'MyProfile':
                            header = <HeaderProfile navigation={navigation} title="" user={userName} description="change your mind?" />;
                            break;
                        case 'Store':
                            header = <Header navigation={navigation} title="" user={[userName, '!']} description="Buy a gift!" />;
                            break;
                        default:
                            header = null;
                    }

                    return {
                        header: () => header,
                        headerShown: true,
                        tabBarShowLabel: false,
                        tabBarStyle: styles.tabBar,
                    };
                }}
            >
            <Tab.Screen
                name='Store'
                component={Store}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome5
                                    name="store"
                                    size={24}
                                    color={focused ? colors.teal600 : colors.teal400}
                                />
                            </View>
                        )
                    },
                }}
            />
             <Tab.Screen
                name='MyProfile'
                component={MyProfileStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <FontAwesome 
                                    name="user-circle"
                                    size={32}
                                    color={focused ? colors.teal600 : colors.teal400}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name='Home'r
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <Entypo
                                    name="home"
                                    size={32}
                                    color={focused ? colors.teal600 : colors.teal400}
                                />
                            </View>
                        )
                    },
                }}
            />
            <Tab.Screen
                name='Products'
                component={CartStack}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View>
                                <AntDesign
                                    name="shoppingcart"
                                    size={32}
                                    color={focused ? colors.teal600 : colors.teal400}
                                />
                            </View>
                        )
                    },
                }}
            />  
        </Tab.Navigator>
  )
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.teal200,
        shadowColor: "black",
        elevation: 4,
        height: 60,
    },
})