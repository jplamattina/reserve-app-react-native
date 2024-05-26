import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../constants/colors'

const ItemCard = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default ItemCard

const styles = StyleSheet.create({

    container: {
        backgroundColor: colors.teal600,
        width: 162,
        height: 300,
        shadowColor: colors.platinum,
        shadowOffset: {
          width: 10,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        borderRadius: 20,
        borderWidth: 2,
    }
})