import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from "./../../constants/colors";

const SubmitButton = ({ onPress, title }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{title}</Text>
    </Pressable>    
  )
}

export default SubmitButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.teal600,
        borderRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
        width: '60%'
    },
    text: {
        color: colors.platinum,
        fontFamily: 'PlayFair',
        fontSize: 22
    },
});