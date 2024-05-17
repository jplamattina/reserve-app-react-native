import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
// import favoriteCategories from '../data/favoriteCategories.json'
import Search from '../components/Search'
import CategorySlider from '../components/categories/CategorySlider'
import ProductSection from '../components/storeProducts/ProductSection'
import products from './../data/products.json'

const Store = ({
  setCategorySelected = () => {},
  navigation,
  route
}) => {

  const [keyWord, setKeyword] = useState("")
  const [productsFiltered, setProductsFiltered] = useState([])
  const [selectedCategory, setSelectedCategory] = useState([])
  const [error, setError] = useState("")
  // const {category: categorySelected} = route.params

  // useEffect(()=> {
  //   //Products filtered by category
  //   regex= /\d/
  //   const hasDigits = (regex.test(keyWord))
  //   console.log(hasDigits);
  //   if (hasDigits) {
  //     setError("Don't use digits")
  //     return
  //   }
  //   console.log(products,' asd')
  //   const productsPrefiltered = products.filter(product => product.category === categorySelected)
  //   setProductsFiltered(productsPrefiltered)
  //   //Product filtered by name
  //   const productsFilter = productsPrefiltered.filter(product => product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase()))
  //   setProductsFiltered(productsFilter)
  //   setError("")
  // }, [keyWord, categorySelected])

  //  useEffect(() => {
  //   //Products filtered by category
  //   regex= /\d/
  //   const hasDigits = (regex.test(keyWord))
  //   if (hasDigits) {
  //     setError("Don't use digits")
  //     return
  //   }
  //   console.log(selectedCategory, 'selectedCategory')
  //   const productsPrefiltered = products.filter(product => product.category === selectedCategory?.toString())
  //   setProductsFiltered(productsPrefiltered)
  // }, [keyWord])

  useEffect(() => {
    const productsPrefiltered = products.filter(product => product.category.includes(selectedCategory?.toString()))
    const sortedData = productsPrefiltered.sort((a, b) => a.title.localeCompare(b.title));
    if(selectedCategory == 'Todos') {
      setProductsFiltered(products.sort((a, b) => a.title.localeCompare(b.title)))
    } else {
      setProductsFiltered(sortedData)
    }
  }, [selectedCategory])


    return (
        <View style = {styles.storeContainer}>
              <View style = {styles.SearchSection}>
                <Search error = {error} onSearch={setKeyword} goBack={()=> navigation.goBack()}/>
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
      backgroundColor: colors.teal00,
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