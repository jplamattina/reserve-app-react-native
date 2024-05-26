import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { colors } from '../../constants/colors'
import { FontAwesome   } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { decrement, increment } from "../../features/counter/counterSlice";
import { removeCartItem } from "../../features/counter/cartSlice";

const ReserveItemCard = ({ cartItem }) => {
    const dispatch = useDispatch()

    const handleRemoveCart = () => {
        dispatch(removeCartItem({ id: cartItem.id }));
    };

    return (
        <View style={styles.card}>
            <View>
                <Image
                    resizeMode='cover'
                    style={styles.image}
                    source={{uri: cartItem.thumbnail}}
                />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title}</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.textNumber}>{cartItem.price * cartItem.quantity}</Text>
            </View>
            <View style={styles.buttonCountContainer}>
                <Pressable style={styles.minContainer} onPress={() => dispatch(decrement())}>
                    <Text style={styles.text3}>-</Text>
                </Pressable>
                <Text style={styles.textCount}>{cartItem.quantity}</Text>
                <Pressable style={styles.maxContainer} onPress={() => dispatch(increment())}>
                    <Text style={styles.text3}>+</Text>
                </Pressable>
            </View>
            <Pressable style={styles.erraseContainer} onPress={() => handleRemoveCart()}>
                <FontAwesome  name="trash" size={40} color={colors.teal900} />
            </Pressable>
        </View>
    );
};

export default ReserveItemCard;

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 100,
        backgroundColor: 'white',
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 2,
        borderColor: colors.teal600,
        borderRadius: 10,
      },
    textContainer: {
        width: 130,
        height: '100%',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 3,
    },
    buttonCountContainer: {
        width: 100,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    erraseContainer: {
        width: 40,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    minContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.teal600
    },
    image: {
        width: 100,
        height: '100%',
        borderRadius: 5,

    },
    maxContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: "center",
        textAlign: 'center',
        alignItems: "center",
        backgroundColor: colors.teal600
    },
    text: {
        fontSize: 13,
        color: colors.teal900,
    },
    text2: {
        fontSize: 12,
        color: colors.teal400,
    },
    text3: {
        fontSize: 19,
        color: colors.teal900,
    },
    textNumber: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.teal900,
    },
    textCount: {
        fontSize: 20,
        color: colors.teal900,
    }
});