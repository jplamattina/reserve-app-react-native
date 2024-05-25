import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetProfileImageQuery } from '../services/shopService'

const Header = ({navigation, title, user, description}) => {

  const {imageCamera, localId} = useSelector(state => state.auth.value)
  const { data: imageFromBase } = useGetProfileImageQuery(localId)
  const defaultImageRoute = "../../assets/images/defaultProfile.png"

  return (
    <View style = {styles.container}>
      <View style = {styles.leftSideContainer}>
        <View style = {styles.boxOne}>
          <Text style = {styles.textName}>{title} {user}</Text>
        </View>
        <View style = {styles.boxTwo}>
          <Text style = {styles.textDescription}>{description}</Text>
        </View>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: colors.teal200,
    },
    leftSideContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    boxOne:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
    },
    boxTwo:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
    },
    rightSideContainer: {
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection: 'column',
    },
    textName: {
      color: colors.teal900,
      fontSize: 16
    },
    textDescription: {
      color: colors.teal900,
      marginLeft: 3,
    },
    portrait: {
        width: 45,
        height: 45,
        borderRadius: 50,
        margin: 30
    }

})