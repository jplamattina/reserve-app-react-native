import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import CartItem from '../components/cart/CarItem'
import { colors } from './../constants/colors'
import { useSelector } from "react-redux"
// import CartData from './../data/cartData.json'

const Cart = () => {
  const { items: CartData, total } = useSelector(state => state.cart.value)
  return (
    <View>
      <View style={styles.titleContainer}>
        <View style={styles.productCount}>
          <Text>TENES 20 PRODUCTOS EN EL CARRITO</Text>
        </View>
      </View>
      <View style={styles.cartContainer}>
        <FlatList 
           data={CartData}
           keyExtractor={pepe => pepe.id}
           renderItem={({item})=> {
                return (
                    <CartItem
                        cartItem={item}
                    />
                )
            }}
        />
      </View>
      <View style={styles.totalContainer}>
          <View style={styles.productContainer}>
            <Text>Producto</Text>
            <Text>$ {total}</Text>
         </View>
         <View style={styles.productContainer}>
            <Text>Descuento</Text>
            <Text>$ 0.500</Text>
         </View>
         <View style={{ height: 1, backgroundColor: colors.teal400 }} />
         <View style={styles.productContainer}>
            <Text>Total</Text>
            <Text>$ {total}</Text>
         </View>
      </View>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  titleContainer:{
    width: '100%',
    height: '10%',
    backgroundColor: 'red',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: 'violet'
  },
  totalContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: 'darkviolet',
  },
  productCount: {
    width: '80%',
    height: '50%',
    backgroundColor: colors.teal600,
    borderRadius: 20,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productContainer: {
    width: '100%',
    height: '20%',
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})