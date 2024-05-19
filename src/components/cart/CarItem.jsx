import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from '../../constants/colors'
import { FontAwesome   } from "@expo/vector-icons";
import cartData from './../../data/cartData.json'

const CartItem = ({ cartItem }) => {
    return (
        <View style={styles.card}>
            <View>
            <Image
                resizeMode='cover'
                style={styles.image}
                source={{}}
            />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{cartItem.title}</Text>
                <Text style={styles.text2}>{cartItem.brand}</Text>
                <Text style={styles.textNumber}>{cartItem.price}</Text>
            </View>
            <View style={styles.buttonCountContainer}>
                <View style={styles.minContainer}>
                    <Text style={styles.text3}>-</Text>
                </View>
                <Text style={styles.textCount}>{cartItem.quantity}</Text>
                <View style={styles.maxContainer}>
                    <Text style={styles.text3}>+</Text>
                </View>
            </View>
            <View style={styles.erraseContainer}>
                <FontAwesome  name="trash" size={40} color={colors.teal900} />
            </View>
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    card: {
        height: 100,
        backgroundColor: colors.teal200,
        padding: 3,
        // margin: 10,
        borderBottomWidth: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    textContainer: {
        width: "30%",
        height: '100%',
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        backgroundColor: 'red',
    },
    buttonCountContainer: {
        width: "30%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",

    },
    erraseContainer: {
        width: "20%",
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
        width: '20%',
        height: '100%',
        backgroundColor: 'red'
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
        fontSize: 19,
        color: colors.teal900,
    },
    text2: {
        fontSize: 14,
        color: colors.teal400,
    },
    text3: {
        fontSize: 19,
        color: colors.teal900,
    },
    textNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.teal900,
    },
    textCount: {
        fontSize: 20,
        color: colors.teal900,
    }
});