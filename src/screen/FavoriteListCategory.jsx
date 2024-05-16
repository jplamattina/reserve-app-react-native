import { FlatList, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import categories from '../data/categories.json'
import ProductItem from '../components/ProductItem'
import React from 'react'

const FavoriteListCategory = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList 
        data = {categories}
        renderItem = {({item}) => <ProductItem product={item}/>}
        keyExtractor = {(product) => product.id}
      />
    </View>
  )
}

export default FavoriteListCategory

const styles = StyleSheet.create({
    flatListContainer: {
      width: '100%',
      backgroundColor: colors.teal400,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10
    },
  })