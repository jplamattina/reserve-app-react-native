import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
// import productCategories from '../../data/productCategories.json'
import CategoryItem from './CategoryItem'
import { useGetCategoriesQuery } from './../../services/shopService'

const CategorySlider = ({setSelectedCategory}) => {

  const { data: categories, error, isLoading } = useGetCategoriesQuery()

  return (
    <View style={styles.categorySliderContainer}>
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={item => item}
            data={categories}
            renderItem={({ item }) => 
            <CategoryItem 
              category={item} 
              setSelectedCategory={setSelectedCategory} 
              />}
        />
    </View>
  )
}

export default CategorySlider

const styles = StyleSheet.create({
    categorySliderContainer:{
    }
})