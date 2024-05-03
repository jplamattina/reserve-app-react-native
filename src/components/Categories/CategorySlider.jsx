import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import categories from '../../data/categories.json'
import CategoryItem from './CategoryItem'

const CategorySlider = () => {
  return (
    <View style={styles.categorySliderContainer}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item}
            data={categories}
            renderItem={({ item }) => <CategoryItem category={item} />}
        />
    </View>
  )
}

export default CategorySlider

const styles = StyleSheet.create({
    categorySliderContainer:{
    }
})