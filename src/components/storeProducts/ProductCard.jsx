import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { colors } from '../../constants/colors'

const ProductCard = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
        {children}
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        shadowColor: colors.platinum,
        shadowOffset: {
          width: 4,
          height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        marginRight: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})