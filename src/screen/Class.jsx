import React from 'react'
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import ReserveItemCard from '../components/reservesDates/reserveDate'
import { colors } from './../constants/colors'
import { useSelector } from "react-redux"
import { usePostOrderMutation } from '../services/shopService'

const Cart = () => {
  const { items: CartData, total } = useSelector(state => state.cart.value)
  const {user} = useSelector(state => state.auth.value)
  const [triggerPostOrder, result] = usePostOrderMutation()
  const userName = user.split('@')[0]

  const onConfirmOrder = () => {
    triggerPostOrder({items: CartData, user: userName, total})
  }

  return (
    <View>
      <View style={styles.cartContainer}>
        <FlatList 
           data={CartData}
           keyExtractor={item => item.id}
           renderItem={({item})=> {
                return (
                    <ReserveItemCard
                        cartItem={item}
                    />
                )
            }}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        />
      </View>
      <View style={styles.totalContainer}>
         <View style={styles.buttonContainer}>
            <Pressable style={styles.confirmButton} onPress={onConfirmOrder}>
                   <Text style={styles.textConfirmOrder}>RESERVAR CLASE</Text>
            </Pressable>
         </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  titleContainer:{
    width: '100%',
    height: '12%',
    backgroundColor: colors.teal200,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer: {
    width: '100%',
    height: '90%',
    backgroundColor: colors.teal200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  totalContainer: {
    width: '100%',
    height: '10%',
    backgroundColor: colors.teal200,
    padding: 10,
  },
  productCount: {
    width: '80%',
    height: '40%',
    backgroundColor: colors.teal600,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    width: '100%',
    height: '20%',
    // backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.teal200,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flex: 1
   },
  confirmButton: {
    width: '90%',
    height: '100%',
    backgroundColor: colors.teal600,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textConfirmOrder: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})