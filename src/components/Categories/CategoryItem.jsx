import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import { colors } from "../../constants/colors"
import Card from "./Card"

const CategoryItem = ({ category, setSelectedCategory }) => {
  return (
    <View style={styles.container}>
            <Pressable onPress={() => setSelectedCategory(category)}>
              <Card style={styles.card}>
                      {/* <Text style={styles.text}>{category}</Text> */}
              </Card>
            </Pressable>
        <View>
            <Text>{category}</Text>
        </View>
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'blue',
  },
  card:{
    width: 100,
    display: 'flex',
    marginVertical: 10, 
    marginHorizontal: 10 
},
  text: {
    color: colors.platinum,
    textAlign: "center",
    fontSize: 20,
  },
})