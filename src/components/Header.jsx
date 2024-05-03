import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'
import imageIcon from './../../assets/tallerv3d.jpg'

const Header = ({title, description}) => {
  return (
    <View style = {styles.container}>
      <View style = {styles.leftSideContainer}>
        <View style = {styles.boxOne}>
          <Text style = {styles.textName}>{title}</Text>
        </View>
        <View style = {styles.boxTwo}>
          <Text style = {styles.textDescription}>{description}</Text>
        </View>
      </View>
      <View style = {styles.rightSideContainer}>
          <Image style = {styles.portrait} source={imageIcon}></Image>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        height: 100,
        display: 'flex',
        flexDirection: 'row'
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
        // backgroundColor:'green',
        // width: '100%',
        // height: '50%',
    },
    boxTwo:{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 15,
        // backgroundColor:'darkviolet',
        // width: '100%',
        // height: '50%',
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
      fontSize: 21
    },
    textDescription: {
      color: colors.teal900,
    },
    portrait: {
        width: 45,
        height: 45,
        borderRadius: 50,
        margin: 30
    }

})