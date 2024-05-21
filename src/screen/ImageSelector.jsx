import React, {useState} from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { colors } from '../constants/colors';
import AddButton from '../components/profile/AddButton';
import { useDispatch, useSelector } from 'react-redux';
import * as ImagePicker from "expo-image-picker";
import { setCameraImage } from '../features/user/userSlice';
import { usePostProfileImageMutation } from '../services/shopService';

const ImageSelector = ({navigation}) => {
    const [image, setImage] = useState(null);
    dispatch = useDispatch();

    const [triggerSaveImage, result] = usePostProfileImageMutation()
    const {localId} = useSelector(state => state.auth.value)

    console.log('localID:', localId);

    const verifyCameraPermissions = async () => {
        const {granted} = await ImagePicker.requestCameraPermissionsAsync();
        return granted;
    };

    const pickImage = async () => {     
        console.log(localId);
        try {
            const permissionCamera = await verifyCameraPermissions()
            if(permissionCamera) {
                let result = await ImagePicker.launchCameraAsync({
                    mediaType: ImagePicker.MediaTypeOptions.All,
                    allowsEditing: true,
                    aspect: [1, 1],
                    base64: true,
                    quality: 0.2,
                })
            if (!result.canceled) {
                const image = `data:image/jpeg;base64,${result.assets[0].base64}`
                setImage(image)
            }
        };
        } catch (error) {
            console.log('error', error)
        }

    }

    const confirmImage = () => {
        try {
            console.log('entre aca', localId)
            dispatch(setCameraImage(image))
            triggerSaveImage({image, localId})
            navigation.goBack()
        } catch (error) {
            
        }
    }

  return (
    <View style={styles.container}>
        {image ? (
            <>
                <Image source={{ uri: image }} style={styles.image} />
                <AddButton title="Take another photo" onPress={pickImage}/>
                <AddButton title="Confirm photo" onPress={confirmImage} />
            </>
        ) : (
            <>
                <View style={styles.noPhotoContainer}>
                    {/*Agregar logica para que figure la img tomada*/}
                    {image ?(
                        <> 
                            <Image source={{ uri: image }} style={styles.image} />
                        </>
                        ) : (
                            <Text>No photo to show...</Text>
                        )
                    }
                </View>
                <AddButton title="Take a photo" onPress={pickImage} />
            </>
        )}
    </View>
  )
}

export default ImageSelector


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 20,
        marginTop: 20,
    },
    image: {
        width: 200,
        height: 200,
    },
    noPhotoContainer: {
        width: 200,
        height: 200,
        borderWidth: 2,
        borderColor: colors.teal400,
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
});