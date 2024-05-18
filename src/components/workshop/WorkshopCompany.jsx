import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import ItemCard from './itemCard'
import tienda from '../../../assets/tienda.jpg'
import handsClay from '../../../assets/handsClay.jpg'
import { colors } from '../../constants/colors'

const WorkshopCompany = ({titleCompany, navigation}) => {
  return (
    <View>
        <View style={styles.workshopTitleContainer}>
            <View style={styles.centerTitle}>
                <Text style={styles.titleText}>{titleCompany}</Text>
            </View>
        </View>
        <View style={styles.workshopItemContainer}>
            <View style={styles.leftWorkshopSide}>
                <ItemCard style={styles.cardLeft}>
                    <Pressable
                        onPress={() => navigation.navigate('Store')}
                    >
                        <Image
                            resizeMode='cover'
                            style={styles.image}
                            source={handsClay}
                        />
                        <View style={styles.overlayContent}>
                            <View style={styles.reservationCard}>
                                <Text style={styles.reservationCardTitleText}>RESERVAR CLASE</Text>
                            </View>
                            <View style={styles.reservationCardButton}>
                                <Text>+</Text>
                            </View>
                        </View>   
                    </Pressable>               
                </ItemCard>
                <ItemCard style={styles.smallLeftCard}>
                    <View style={styles.smallLeftCardTitle}>
                        <Text style={styles.creditsText}>TUS CREDITOS</Text>
                    </View>
                    <View style={styles.smallLeftCardDesc}>
                        <Text style={styles.credits}>8</Text>
                    </View>
                </ItemCard>
            </View>
            <View style={styles.rightWorkshopSide}>
                <ItemCard style={styles.smallRightCard}>
                    <View style={styles.smallRightCardTitle}>
                        <Text style={styles.nextClass}>PROXIMA CLASE</Text>
                    </View>
                    <View style={styles.smallRightCardDesc}>
                        <Text style={styles.class}>27/07</Text>
                    </View>
                </ItemCard>
                <ItemCard style={styles.cardRight}>
                    <Pressable
                        onPress={() => navigation.navigate('Store')}
                    >
                        <Image
                            resizeMode='cover'
                            style={styles.image}
                            source={tienda}
                        />
                        <View style={styles.overlayContent}>
                            <View style={styles.reservationCard}>
                                <Text style={styles.shopCardTitleText}>TIENDA</Text>
                            </View>
                        </View>           
                    </Pressable>
                </ItemCard>
            </View>
        </View>
    </View>
  )
}

export default WorkshopCompany

const styles = StyleSheet.create({
    workshopTitleContainer: {
        width: '100%',
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.teal200,
    },
    workshopItemContainer: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: colors.teal600,
    },
    centerTitle: {
        width: '100%',
        justifyContent: 'center',
    },
    titleText:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22
    },
    leftWorkshopSide: {
        width: '50%',
        height: 500,
        display: 'flex',
        flexDirectionx: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 10,
    },
    rightWorkshopSide: {
        width: '50%',
        height: 500,
        display: 'flex',
        flexDirectionx: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: 10,
    },
    smallLeftCard:{
        width: 162,
        height: 153,
        marginRight: 5,
    },
    cardLeft: {
        marginRight: 5,
    },
    cardRight: {
        marginLeft: 5,
    },
    smallRightCard:{
        width: 162,
        height: 153,
        marginLeft: 5,
    },
    reservationCard:{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    reservationCardTitleText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 25,
        color: colors.teal200
    },
    image:{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 20, 
    },
    overlayContent: {
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    shopCardTitleText: {
        textAlign: 'center',
        fontWeight: 'light',
        fontSize: 25,
        color: colors.teal900
    },
    creditsText: {
        textAlign: 'center',
        fontWeight: 'light',
        fontSize: 15,
        color: colors.teal900
    },
    credits: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 80,
        color: colors.teal900
    },
    nextClass: {
        textAlign: 'center',
        fontWeight: 'light',
        fontSize: 15,
        color: colors.teal900
    },
    class: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50,
        color: colors.teal900
    },
    smallRightCardTitle: {
        height: '20%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallRightCardDesc: {
        height: '80%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallLeftCardTitle: {
        height: '20%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    smallLeftCardDesc: {
        height: '80%',
        display: 'flex',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
})