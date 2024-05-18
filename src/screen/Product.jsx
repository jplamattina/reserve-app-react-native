import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Pressable, ScrollView, Animated, FlatList} from 'react-native'
import { colors } from '../constants/colors'
import tallerV3d from './../../assets/tallerv3d.jpg'
import products from './../data/products.json'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../features/counter/counterSlice'

const { height, width } = Dimensions.get("window")
const Product = ({ route }) => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    // const setHeight = (h) => (height / 100) * h;
    // const setWidth = (w) => (width / 100) * w;

    const { productId } = route.params;

    const selectedProduct = products.find(product => product.id === productId);
  return (
    <View style={styles.productContainer}>
        <View style={styles.imageContainer}>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{uri: selectedProduct.images[0]}}
            />
            <View>
                <View style={styles.dotsImages}>
                    <Text> asdasdsadasdsa</Text>
                </View>
            </View>
        </View>
        <View style={styles.descriptionContainer}>
            <View style={styles.descRatingContainer}>
                <View style={styles.titleDescription}>
                    <View>
                        <Text style={styles.title}>{selectedProduct.title}</Text>
                        <Text style={styles.description}>{selectedProduct.category}</Text>
                    </View>
                    <View>
                        <Text style={styles.rating}>Estrellas</Text>
                    </View>
                </View>
            </View>
            <View style={styles.descriptionProduct}>
                <Pressable style={styles.minButton} onPress={()=> dispatch(decrement())}>
                    <Text style={styles.textIcon}>-</Text>
                </Pressable>
                <View>
                    <Text style={styles.textCount}>{count}</Text>
                </View>
                <Pressable style={styles.maxButton} onPress={()=> dispatch(increment())}>
                    <Text style={styles.textIcon}>+</Text>
                </Pressable>
            </View>
            <View style={styles.storeContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>${selectedProduct.price}</Text>
                </View>
                <View style={styles.buttonAddCart}>
                    <Pressable style={styles.buttonCart} onPress={()=> dispatch(increment())}>
                        <Text style={styles.cartTitle}>Agregar al Carrito</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    productContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: colors.teal200
    }, 
    imageContainer: {
        width: '100%',
        height: '60%',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    dotsImages: {
        width: '100%',
        height: 20,
        backgroundColor: 'violet',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        bottom: 30,
    },
    descriptionContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    targetContainer: {
        width: '100%',
        height: '50%',
    },
    descRatingContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignContent: 'center',
    },
    titleDescription: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
    },
    rating: {
        marginTop: 6,
    },
    storeContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    },
    priceContainer: {
        width: '50%',
        height: '100%',
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    buttonAddCart: {
        width: '50%',
        height: '100%',
        backgroundColor: 'violet',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonCart: {
        width: '100%',
        height: 50,
        textAlign: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.teal900,
        borderRadius: 10,
        marginRight: 20,
    },
    descriptionProduct: {
        width: '50%',
        height: '30%',
        padding: 10,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        textAlign: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        color: colors.teal900,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        color: colors.teal900,
        fontWeight: 'light'
    },
    priceTitle: {
        fontSize: 45,
        color: colors.teal900,
        fontWeight: 'bold'
    },
    cartTitle: {
        fontSize: 20,
        color: colors.teal200
    },
    minButton: {
        width: 44,
        height: 44,
        backgroundColor: colors.teal600,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
        maxButton: {
        width: 44,
        height: 44,
        backgroundColor: colors.teal600,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    textIcon: {
        fontSize: 25,
    },
    textCount: {
        fontSize: 40,
        color: colors.teal400
    }
})