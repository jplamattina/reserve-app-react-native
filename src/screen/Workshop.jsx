import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
// import favoriteCategories from '../data/favoriteCategories.json'
import React from 'react'
import Header from '../components/Header';
import WorkshopCompany from '../components/workshop/WorkshopCompany';

const Workshop = ({navigation}) => {
    return (
        <View style = {styles.homeContainer}>
              <WorkshopCompany 
                titleCompany={'La Familia Ceramica'} 
                navigation={navigation}
                />
        </View>
      )
}

export default Workshop

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