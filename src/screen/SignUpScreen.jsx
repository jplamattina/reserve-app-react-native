import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../constants/colors";
import SubmitButton from "../components/auth/SubmitButton";
import InputForm from "../components/auth/InputForm";
import { useDispatch } from "react-redux";
import { useSignUpMutation } from "../services/authService";
import { setUser } from "../features/user/userSlice";
import { signupSchema } from "../validation/authSchema";


const SignupScreen = ({ navigation }) => {
    
    const [email, setEmail] = useState("");
    const [errorMail, setErrorMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorPassword, setErrorPassword] = useState("")
    const [confirmPassword, setconfirmPassword] = useState("");
    const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

    const dispatch = useDispatch()
    
    const [triggerSignUp, result] = useSignUpMutation()


    useEffect(() => {
        if(result.isSuccess) {
            dispatch(
                setUser({
                    email: result.data.email,
                    idToken: result.data.idToken
                })
            )
        } 
    }, [result])

    const onsubmit = () => {
        try {
            setErrorMail('')
            setErrorPassword('')
            setErrorConfirmPassword('')
            const validation = signupSchema.validateSync({email, password, confirmPassword})            
            triggerSignUp({email, password, returnSecureToken: true})
        } catch (error) {
            console.log('error')
            console.log(error.path)
            console.log(error.message)
            switch (error.path) {
                case 'email':
                        setErrorMail(error.message)
                    break;
                case 'password':
                        setErrorPassword(error.message)
                break;
                case 'confirmPassword':
                        setErrorConfirmPassword(error.message)
                break;
                default:
                    break;
            }
        }
    }

    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <Text style={styles.title}>Signup</Text>
                <InputForm label={"email"} onChange={setEmail} error={errorMail} />
                <InputForm
                    label={"password"}
                    onChange={setPassword}
                    error={errorPassword}
                    isSecure={true}
                />
                <InputForm
                    label={"confirm password"}
                    onChange={setconfirmPassword}
                    error={errorConfirmPassword}
                    isSecure={true}
                />
                <SubmitButton onPress={onsubmit} title="Send" />
                <Text style={styles.sub}>Already have an account?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default SignupScreen;

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
    },
    sub: {
        fontSize: 14,
        color: "black",
    },
    subLink: {
        fontSize: 14,
        color: "blue",
    },
});