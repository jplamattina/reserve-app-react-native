import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import StoreProductItem from './StoreProductItem'
import products from './../../data/products.json'

const ProductSection = ({filteredProduct, navigation, setSelectedProduct}) => {
  return (
    <View style={styles.productSectionContainer}>
      <View style={styles.productContainer}>
            <FlatList 
              data = {filteredProduct}
              keyExtractor = {(products) => products.id}
              numColumns={2}
              showsHorizontalScrollIndicator={false}
              renderItem = {({item}) => <StoreProductItem products={item} navigation={navigation}/>}
            />
      </View>
    </View>
  )
}

export default ProductSection

const styles = StyleSheet.create({
  productSectionContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    },
  productContainer:{
    width: '100%',
    height: '100%',
  }
})