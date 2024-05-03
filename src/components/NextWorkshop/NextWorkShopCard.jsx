import { StyleSheet, View, Text } from 'react-native'
import React from 'react'
import { colors } from '../../constants/colors'

const NextWorkshopCard = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default NextWorkshopCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.teal200,
        shadowColor: colors.platinum,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10,
        borderRadius: 10,
    }
})