import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import colors from '../../constants/colors'
import categories from '../../data/categories.json'
import RecomendCategoryItem from './RecommendCategoryItem'

const RecomendSlider = () => {
  return (
    <View style={styles.categorySliderContainer}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item}
            data={categories}
            renderItem={({ item }) => <RecomendCategoryItem category={item} />}
        />
    </View>
  )
}

export default RecomendSlider

const styles = StyleSheet.create({
    categorySliderContainer:{
        height: 200,
    }
})