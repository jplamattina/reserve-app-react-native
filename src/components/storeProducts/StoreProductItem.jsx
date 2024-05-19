import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import { colors  } from '../../constants/colors'
import ProductCard from './ProductCard'
import React, { useState } from 'react'

const StoreProductItem = ({products, navigation}) => {
  

  return (
    <View style={styles.storeProductContainer}>
        <Pressable onPress={() => { navigation.navigate('Product', { productId: products.id })}}>
          <ProductCard
              style={styles.StylesCardContainer}
          >
            <View style={styles.imageContainer}>
              <View style={styles.imageDimensions}>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{uri: products.images[0]}}
                />
              </View>
            </View>
            <View style={styles.descriptionContainer}>
              <View style={styles.descriptionTitle}>
                <Text style={styles.textCategory}>{products.title}</Text>
              </View>
              <View style={styles.priceAndHearthcontainer}>
                <View style={styles.price}>
                  <Text style={styles.priceText}>$ {products.price}</Text>
                </View>
                  <View style={styles.heart}>
                    <View style={styles.heartItem}>
                      <Text style={styles.heartIcon}>+</Text>
                    </View>
                </View>
              </View>
            </View>
          </ProductCard>
       </Pressable>
    </View>
  )
}

export default StoreProductItem

const styles = StyleSheet.create({
    storeProductContainer: {
        width: '100%',
        height: '100%',
        //display: 'flex',
        flex: 1,
    },
    imageContainer: {
      width: '100%',
      height: '60%',
    },
    descriptionContainer: {
      width: '100%',
      height: '40%',
    },
    imageDimensions: {
      width: '90%',
      height: '80%',
      margin: 10,
     },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      resizeMode: 'cover'
    },
    StylesCardContainer: {
      flexDirection: 'column',
      width: 180,
      height: 250,
      justifyContent: 'space-between',
      margin: 10,
      displa: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.teal200,
      borderWidth: 2,
      borderColor: colors.teal600,
    },
    textCategory: {
      marginLeft: 10,
      color: colors.teal900
    },
    heartItem: {
      width: 30,
      height: 30,
      backgroundColor: colors.teal600,
      borderRadius: 20,
    },
    heartIcon: {
      width: 30,
      height: 30,
      fontSize: 20,
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    descriptionTitle: {
      width: '100%',
      height: '60%',
    },
    priceAndHearthcontainer: {
      width: '100%',
      height: '40%',
      display: 'flex',
      flexDirection: 'row',
    },
    price: {
      width: '70%',
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 15,
    },
    heart: {
      width: '30%',
      justifyContent: 'center',
    },
    priceText: {
      fontSize: 20,
      fontWeight: 'bold',

    }
  })