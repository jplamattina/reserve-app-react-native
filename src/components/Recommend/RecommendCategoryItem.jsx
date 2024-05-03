import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native"
import React from "react"
import { colors } from "../../constants/colors"
import CardRecommend from "./CardRecomend"

const RecomendCategoryItem = ({ category, navigation }) => {
  return (
    <View style={styles.container}>
        <CardRecommend style={styles.card}>
            <Pressable onPress={()=>navigation.navigate('ItemListCategory', {category})}>
                {/* <Text style={styles.text}>{category}</Text> */}
            </Pressable>
            <View style={styles.textContainer}>
              <Text style={styles.textH1}>{category}</Text>
              <Text style={styles.textA}>{category}</Text>
              <Text style={styles.textB}>⭐4.5</Text>
            </View>
        </CardRecommend>
    </View>
  )
}

export default RecomendCategoryItem

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    display: 'flex',
    marginVertical: 10, 
    marginHorizontal: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
},
  textContainer: {
    margin: 10,
  },
  textH1: {
    color: colors.teal900,
    fontSize: 20,
  },
  textA: {
    color: colors.teal900,
    fontSize: 12,
  },
  textB: {
    color: colors.teal900,
    fontSize: 12,
  },
})