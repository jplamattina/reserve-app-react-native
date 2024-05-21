import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../constants/colors";

const AddButton = ({
    title = "",
    onPress = () => {},
    color = colors.teal600,
}) => {
    return (
        <Pressable
            style={{ ...styles.button, backgroundColor: color }}
            onPress={onPress}
        >
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    button: {
        width: "70%",
        borderWidth: 1,
        backgroundColor: colors.teal400,
        justifyContent: "center",
        alignItems: "center",
        padding: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 18,
        color: colors.teal900,
    },
})