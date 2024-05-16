import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, Pressable, ScrollView, Animated, FlatList} from 'react-native'
import { colors } from '../constants/colors'
import tallerV3d from './../../assets/tallerv3d.jpg'
import products from './../data/products.json'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../features/counter/counterSlice'

const { height, width } = Dimensions.get("window")
const Product = ({ route }) => {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    // const setHeight = (h) => (height / 100) * h;
    // const setWidth = (w) => (width / 100) * w;

    console.log('count', count)
    const { productId } = route.params;

    const selectedProduct = products.find(product => product.id === productId);
    console.log('selectedProduct', selectedProduct)
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
                    <Text style={styles.title}>{selectedProduct.title}</Text>
                  
                </View>
                <View style={styles.rating}>
                    <Text>Estrellas</Text>
                </View>
            </View>
            <View style={styles.descriptionProduct}>
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </View>
            <View style={styles.storeContainer}>
                <View style={styles.priceContainer}>
                    <Text style={styles.priceTitle}>${selectedProduct.price}</Text>
                </View>
                <View style={styles.buttonAddCart}>
                    <Pressable style={styles.buttonCart} onPress={() => dispatch(increment())}>
                        <Text style={styles.cartTitle}>Agregar al Carrito {count}</Text>
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
        height: '50%',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    dotsImages: {
        width: '100%',
        position: 'absolute',
        bottom: 90,
        height: 20,
        backgroundColor: 'red',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
    },
    descriptionContainer: {
        width: '100%',
        height: '50%',
        flex: 1,
        backgroundColor: 'darkviolet',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        position: 'absolute',
        top: '40%',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    targetContainer: {
        width: '100%',
        height: '50%',
    },
    descRatingContainer: {
        width: '100%',
        height: '40%',
        flexDirection: 'row',
    },
    titleDescription: {
        width: '50%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    rating: {
        width: '50%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center'
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
        alignItems: 'center'
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
        width: '90%',
        height: '20%',
        // padding: 20,
        backgroundColor: 'green'
    },
    title: {
        fontSize: 35,
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
    }
})