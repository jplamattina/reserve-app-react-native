import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import CartItem from '../components/cart/CarItem'
import { colors } from './../constants/colors'
import { useDispatch, useSelector } from "react-redux"
import { usePostOrderMutation } from '../services/shopService'
import ModalCustom from '../components/modal/ModalCustom'
import { removeCartItem } from '../features/counter/cartSlice'

const Cart = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { items: CartData, total } = useSelector(state => state.cart.value)
  const {user} = useSelector(state => state.auth.value)
  const [triggerPostOrder, result] = usePostOrderMutation()
  const userName = user.split('@')[0]

  const dispatch = useDispatch();

  const onConfirmOrder = () => {
    if(CartData.length != 0){
    triggerPostOrder({items: CartData, user: userName, total})
    setModalVisible(true)
    CartData.map(item => {
      dispatch(removeCartItem({ id: item.id }));
    })}
  }

  const handleCancelModal = () => {
    setModalVisible(false)
}
  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.productCount}>
          <Text>TENES {CartData.length} PRODUCTOS EN EL CARRITO</Text>
        </View>
      </View>
      <View style={styles.cartContainer}>
        <FlatList 
           data={CartData}
           keyExtractor={item => item.id}
           renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
          ItemSeparatorComponent={() => <View style={{ height: 5 }} />}
        />
      </View>
      <View style={styles.totalContainer}>
          <View style={styles.productContainer}>
            <Text>Producto</Text>
            <Text>$ {total}</Text>
         </View>
         <View style={styles.productContainer}>
            <Text>Descuento</Text>
            <Text>$ 0.000</Text>
         </View>
         <View style={{ height: 1, backgroundColor: colors.teal400 }} />
         <View style={styles.productContainer}>
            <Text>Total</Text>
            <Text>$ {total}</Text>
         </View>
         <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.confirmButton} onPress={onConfirmOrder}>
                   <Text style={styles.textConfirmOrder}>CONFIRM ORDER</Text>
            </TouchableOpacity>
         </View>
         <ModalCustom 
            modalVisible={modalVisible}
            handleCancelModal={handleCancelModal}
            secondTextcontent={'PRONTO RECIBIRAS EL PRODUCTO! 📦'}
            textContent={'GRACIAS POR TU COMPRA!😊😊'}
        />
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
    height: '68%',
    backgroundColor: colors.teal200,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  totalContainer: {
    width: '100%',
    height: '20%',
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
    height: '80%',
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