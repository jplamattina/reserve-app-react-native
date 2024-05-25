import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import StoreProductItem from './StoreProductItem'
import { colors } from './../../constants/colors'

const ProductSection = ({filteredProduct, navigation}) => {
  return (
    <View style={styles.productSectionContainer}>
      <View style={styles.productContainer}>
            <FlatList 
              data = {filteredProduct}
              keyExtractor = {(products) => products.id}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem = {({item}) => <StoreProductItem products={item} navigation={navigation}/>}
            />
      </View>
    </View>
  )
}

export default ProductSection

const styles = StyleSheet.create({
  productSectionContainer: {
    flex: 1,
    backgroundColor: colors.teal200,
    paddingBottom: 240,
  },
  productContainer: {
    width: '100%',
    height: '100%',
  }
});