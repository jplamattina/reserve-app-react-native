import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../../constants/colors"
import Card from "./Card"

const CategoryItem = ({ category, navigation }) => {
  return (
    <View style={styles.container}>
        <Card style={styles.card}>
            <Pressable onPress={()=>navigation.navigate('ItemListCategory', {category})}>
                {/* <Text style={styles.text}>{category}</Text> */}
            </Pressable>
        </Card>
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