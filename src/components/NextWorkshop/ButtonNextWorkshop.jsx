import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { colors } from '../../constants/colors'
import NextDateCard from './NextDateCard'
import NextWorkshopCard from './NextWorkShopCard'

const ButtonNextWorkshop = () => {
  return (
    <View style={styles.container}>
      <NextDateCard style={styles.card}>
          {/* <Pressable onPress={()=>navigation.navigate('ItemListCategory', {})}>
          </Pressable> */}
          <NextWorkshopCard style={styles.reserveCard}>
              <View>
                <Text style={styles.textCircle}>27/7</Text>
              </View>
          </NextWorkshopCard>
          <Text style={styles.textMessage}>Proxima Fecha</Text>
      </NextDateCard>

    <View>
    </View>
</View>
  )
}

export default ButtonNextWorkshop

const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  card:{
    width: 350,
    height: 95,
    marginVertical: 10,
    marginHorizontal: 10,
    shadowColor: colors.teal900,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
},
reserveCard: {
    width: 77,
    height: 77,
    marginLeft: 10,
    backgroundColor: colors.teal200,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textMessage: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.teal700
  },
  text: {
    color: colors.platinum,
    textAlign: "center",
    fontSize: 20,
  },
  circle:{
    width: 50,
    height: 50,
    backgroundColor: colors.teal700,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textCircle: {
    width: 77,
    height: 77,
    fontSize: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: "center",
    color: colors.teal900,
    fontWeight: 'bold',
  },
})