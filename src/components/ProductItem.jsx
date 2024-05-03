import { Image, StyleSheet, Text, View } from 'react-native'
import { colors  } from '../constants/colors'
import Card from './Card'
import React from 'react'

const ProductItem = ({categories}) => {
  return (
    <Card
        style={styles.additionalStylesCard}
    >
      <Text style={styles.textCategory}>{categories.title}</Text>
      <Image
        resizeMode='cover'
        style={styles.image}
        source={{uri: categories.images[0]}}
       />
    </Card>
  )
}

export default ProductItem

const styles = StyleSheet.create({
    image: {
      height: 120,
      width: 100,
      borderRadius: 8
    },
    additionalStylesCard: {
      paddingLeft: 10,
      flexDirection: 'row',
      height: 120,
      width: 300,
      justifyContent: 'space-between',
      margin: 10,
    },
    textCategory: {
      color: colors.teal900
    }
  })