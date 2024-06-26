import { Pressable, StyleSheet, Text, View } from "react-native"
import React, { useState, useEffect } from "react"
import { colors } from "../constants/colors"
import InputForm from "../components/auth/InputForm"
import SubmitButton from "../components/auth/SubmitButton"
import { useSignInMutation } from "../services/authService"
import { setUser } from "./../features/user/userSlice"
import { useDispatch } from "react-redux"
import { insertSession } from "../persistence/index"

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    
    const dispatch = useDispatch()
    const [triggerSignIn, result] = useSignInMutation('Signup')

    useEffect(() => {
        if (result?.data && result.isSuccess) {
            (async ()=> {
                try {
                        const response = await insertSession({
                            email: result.data.email,
                            localId: result.data.localId,
                            token: result.data.idToken,
                        })
                    dispatch(
                        setUser({
                            email: result.data.email,
                            idToken: result.data.idToken,
                            localId: result.data.localId,
                        })
                    )
                } catch (error) {
                  console.log(error.message);
                }
            })()
        }
    }, [result])

    const onSubmit = () => {
        triggerSignIn({ email, password })
    }
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Login to start</Text>
                <InputForm 
                    label={"email"}
                    onChange={setEmail} 
                    error={""} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={""}
                    isSecure={true}
                />
                <SubmitButton onPress={onSubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable style={styles.sign} onPress={() => navigation.navigate("Signup")}>
                    <Text style={styles.subLink}>Sign up</Text>
                    <Text style={styles.sub}>instead!</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        width: "90%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.platinum,
        gap: 15,
        paddingVertical: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 22,
        // fontFamily: "Josefin",
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
    sign: {
        width: '100%',
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
    }
})