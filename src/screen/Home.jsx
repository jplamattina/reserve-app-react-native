import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
// import favoriteCategories from '../data/favoriteCategories.json'
import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search'
import CategorySlider from '../components/categories/CategorySlider'
import RecommendedSlider from '../components/recommend/RecommendSlider'
import ButtonReservation from '../components/reservations/ButtonReservation'
import ButtonNextWorkshop from '../components/nextWorkshop/ButtonNextWorkshop'
import ButtonMyReservation from '../components/myReservations/ButtonMyReservations'

const Home = () => {
    return (
        <View style = {styles.homeContainer}>
              <View style = {styles.headerContainer}>
                <Header title={'Hi Jota! 👋'} description={'Reserver your Activity'} />
              </View>
              <View>
                  <ButtonReservation />
              </View>
              <View>
                  <ButtonNextWorkshop />
              </View>
              <View>
                  <ButtonMyReservation />
              </View>
              <View style = {styles.SearchSection}>
                <Search />
              </View>
            <Text>Categorias</Text>
            <View style={styles.categoryContainer}>
                <CategorySlider />
            </View>
            <Text>Recomended Places</Text>
            <View style={styles.recommendedCategoryContainer}>
                <RecommendedSlider />
            </View>
        </View>
      )
}

export default Home

const styles = StyleSheet.create({
    homeContainer: {
      width: '100%',
      height: '100%',
      // justifyContent: 'center',
      backgroundColor: colors.teal00,
    },
    headerContainer:{
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
      height: 200,
    },
  })