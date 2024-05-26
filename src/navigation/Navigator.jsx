import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator'
import AuthStackNavigator from './AuthStackNavigator';
import { useDispatch, useSelector } from "react-redux"
import { getSession } from '../persistence';
import { setUser } from '../features/user/userSlice';



const Navigation = () => {

  const {user} = useSelector(state => state.auth.value)
  const dispatch = useDispatch()


  useEffect(()=> {
    (async ()=> {
      try {
        const response = await getSession()
         if (response.rows._array.length) {
          const usuario = response.rows._array[0]
          dispatch(setUser({
            email: usuario.email,
            localId: usuario.localId,
            idToken: usuario.token
          }))
        }
      } catch (error) {
        console.log(error);
      }
    })()
  }, [])
  
  return (
    <NavigationContainer>
        {user ? <BottomTabNavigator /> :<AuthStackNavigator />}
    </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({

})