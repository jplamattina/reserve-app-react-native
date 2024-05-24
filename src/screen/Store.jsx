import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
// import favoriteCategories from '../data/favoriteCategories.json'
import Search from '../components/Search'
import CategorySlider from '../components/categories/CategorySlider'
import ProductSection from '../components/storeProducts/ProductSection'
import products from './../data/products.json'
import { useGetProductsQuery, useGetProductsByCategoryQuery } from '../services/shopService'

const Store = ({navigation}) => {

  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [errorSearching, setErrorSearching] = useState("")

  const { data: productsByCategory, error, isLoading} = useGetProductsByCategoryQuery(selectedCategory)
  const { data: allProducts, errorProducts, isLoadingProducts} = useGetProductsQuery()

  useEffect(() => {
    if (!isLoading && !isLoadingProducts) {

      if(productsByCategory == '') {
        setProductsFiltered(allProducts)
        setErrorSearching("")
      } else {
        const productsFilter = productsByCategory.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
        setProductsFiltered(productsFilter)
        setErrorSearching("")
    }
    }
  
  }, [productsByCategory, allProducts, isLoadingProducts])



    return (
        <View style = {styles.storeContainer}>
              <View style = {styles.SearchSection}>
                <Search error = {errorSearching} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
              </View>
            <Text>Categorias</Text>
              <View style={styles.categoryContainer}>
                  <CategorySlider setSelectedCategory={setSelectedCategory}/>
              </View>
            <Text>Productos destacados</Text>
              <Pressable style={styles.recommendedCategoryContainer}>
                  <ProductSection 
                      filteredProduct={productsFiltered}
                      navigation={navigation}
                      />
              </Pressable>
        </View>
      )
}

export default Store

const styles = StyleSheet.create({
    storeContainer: {
      width: '100%',
      height: '100%',
      // justifyContent: 'center',
      backgroundColor: colors.teal200,
    },
    SearchSection: {
      alignItems: 'center',
    },
    categoryContainer: {
      width: '100%',
      height: 150,
    },
    recommendedCategoryContainer: {
      width: '100%',
      height: '100%',
    },
  })