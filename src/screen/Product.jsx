import React, { useState, useEffect }  from 'react';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';
import { useGetProductByIdQuery } from '../services/shopService';
import { addCartItem } from '../features/counter/cartSlice';
import { colors } from '../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import { FlatList } from 'react-native';
import { useWindowDimensions } from 'react-native';

const Product = ({ navigation, route }) => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [resetCount, setResetCount] = useState(false)
    const { width, height } = useWindowDimensions();
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();
    const { productId } = route.params;
    const { data: productById, error, isLoading } = useGetProductByIdQuery(productId);

    const handleAddCart = () => {
        dispatch(addCartItem({ ...productById, quantity: count }));
    };

    const renderItem = ({item, index}) => {
        return (
            <View>
                <Image
                    key={item.id}
                    style={[styles.imageCarrousel, { width: width, height:height * 0.6}]}
                    source={{ uri: item }}
                />
            </View>
        )
    }

    const renderDotIndicators = () => {
        return productById.images.map((dot, index) => {
            return (
                <View
                    key={`dot_${index}`} 
                    style={[
                        styles.dot,
                        { backgroundColor: activeIndex === index ? colors.teal600 : colors.teal900 }
                    ]}
                />
            )
        })
    }

    const handleScroll = (event) => {
        const scrollPosition = event.nativeEvent.contentOffset.x;
        const index = Math.round(scrollPosition / width);
        setActiveIndex(index);
    }

    useEffect(() => {
        dispatch(reset());
        setResetCount(false)
    }, [resetCount]);

    return (
        <View style={styles.productContainer}>
            {productById ? (
                <>
                    <View style={styles.imageContainer}>
                        <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                            <AntDesign name="leftcircleo" size={50} color={colors.teal600}/>
                        </Pressable>
                        <View>
                        {productById.images && (
                            <FlatList 
                                style={styles.image} 
                                data={productById.images} 
                                renderItem={renderItem} 
                                horizontal={true} 
                                pagingEnabled={true}
                                onScroll={handleScroll}
                                keyExtractor={(item) => item}
                                showsHorizontalScrollIndicator={false}
                                />
                        )}
                        </View>
                        <View style={styles.dotsImages}>
                            {renderDotIndicators()}
                        </View>
                    </View>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.descRatingContainer}>
                            <View style={styles.titleDescription}>
                                <View>
                                    <Text style={styles.title}>{productById.title}</Text>
                                    <Text style={styles.description}>{productById.category}</Text>
                                </View>
                                <View>
                                    <Text style={styles.rating}>⭐ {productById.rating}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.descriptionProduct}>
                            <Pressable style={styles.minButton} onPress={() => dispatch(decrement())}>
                                <Text style={styles.textIcon}>-</Text>
                            </Pressable>
                            <View>
                                <Text style={styles.textCount}>{count}</Text>
                            </View>
                            <Pressable style={styles.maxButton} onPress={() => dispatch(increment())}>
                                <Text style={styles.textIcon}>+</Text>
                            </Pressable>
                        </View>
                        <View style={styles.storeContainer}>
                            <View style={styles.priceContainer}>
                                <Text style={styles.priceTitle}>${count <= 1 ? (productById.price) : (productById.price * parseInt(count))}</Text>
                            </View>
                            <View style={styles.buttonAddCart}>
                            <Pressable style={styles.buttonCart} onPress={() => {
                                handleAddCart();
                                setResetCount(true);
                            }}>
                                    <Text style={styles.cartTitle}>Agregar al Carrito</Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </>
            ) : (
                isLoading ? <Text>Loading...</Text> : <Text>Error: {error}</Text>
            )}
        </View>
    );
};

export default Product;

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
    },
    dotsImages: {
        width: '100%',
        height: 30,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        flexDirection: 'row',
        bottom: 30,
    },
    descriptionContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.teal600
    },
    targetContainer: {
        width: '100%',
        height: '50%',
    },
    descRatingContainer: {
        width: '100%',
        height: '30%',
        flexDirection: 'row',
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
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    buttonAddCart: {
        width: '50%',
        height: '100%',
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
        backgroundColor: colors.teal200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    maxButton: {
        width: 44,
        height: 44,
        backgroundColor: colors.teal200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    textIcon: {
        fontSize: 25,
    },
    textCount: {
        fontSize: 40,
        color: colors.teal900
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        width: 55,
        height: 55,
        // backgroundColor: colors.teal600,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        zIndex: 1,
    },
    imageCarrousel: {
        width: '100%',
        height: '100%',
    },
    dot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        marginHorizontal: 5,
    },
});
