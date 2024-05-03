import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
// import favoriteCategories from '../data/favoriteCategories.json'
import React from 'react'
import Header from '../components/Header';
import Search from '../components/Search'
import CategorySlider from '../components/Categories/CategorySlider'
import RecommendedSlider from '../components/Recommend/RecommendSlider'
import ButtonReservation from '../components/Reservations/ButtonReservation'
import ButtonNextWorkshop from '../components/NextWorkshop/ButtonNextWorkshop'
import ButtonMyReservation from '../components/MyReservations/ButtonMyReservations'

const home = () => {
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

export default home

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