import { Image, StyleSheet, View } from "react-native";
import React from "react";
import AddButton from "../components/profile/AddButton";
import { useSelector } from "react-redux";
import { useGetProfileImageQuery } from "../services/shopService";
import { truncateSessionsTable } from "../persistence";
import { clearUser } from "../features/user/userSlice";
import { colors } from '../constants/colors'

const MyProfile = ({navigation}) => {
    const {imageCamera, localId} = useSelector(state => state.auth.value)
    const { data: imageFromBase } = useGetProfileImageQuery(localId)

    const launchCamera = async () => {
        navigation.navigate('Image selector')
    };

    const defaultImageRoute = "../../assets/images/defaultProfile.png"

    const signOut = async () => {
        try {
            const response = await truncateSessionsTable()
            console.log(response);
            dispatch(clearUser())
        } catch (error) {
            console.log({errorSignOutDB: error});
        }
    }

    return (
        <View style={styles.container}>
            {imageFromBase || imageCamera  ? (
                <Image
                    source={{uri: imageFromBase?.image || imageCamera}}
                    style={styles.image}
                    resizeMode="cover"
                />
            ) : (
                <Image
                    source={require(defaultImageRoute)}
                    style={styles.image}
                    resizeMode="cover"
                />
            )}
            <AddButton onPress={launchCamera} title="Add profile picture" />
            <AddButton onPress={signOut} title="Sign out" />
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        padding: 10,
        gap: 15,
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor: colors.teal200
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});