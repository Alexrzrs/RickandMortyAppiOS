import {
    View,
    Text,
    TextInput,
    Button,
    StyleSheet,
    Keyboard,
    ImageBackground,
} from "react-native";
import React, { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetail } from "../../utils/userDb";
import { UserContext } from "../../screen/Account";
import { useFonts } from "expo-font";

export default function LoginForm() {
    const [error, setError] = useState("");
    const { loggedUserData, setLoggedUserData } = useContext(UserContext);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formData) => {
            // console.log(formData);
            setError("");
            const { username, password } = formData;
            if (username !== user.username || password !== user.password) {
                console.log("Usuario o contrasena incorrectos");
                setError("Usuario o contrasena incorrectos");
            } else {
                const userDetail2 = {
                    email: userDetail.email,
                    firstName: userDetail.firstName,
                    lastName: userDetail.lastName,
                    username: userDetail.userName,
                };
                setLoggedUserData(userDetail2);
                console.log(userDetail);
                // const { login } = useAuth();
            }
            console.log("Formulario enviado");
            // console.log(formData);
        },
    });

    const [fontsLoaded] = useFonts({
        rickfont: require("../../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <ImageBackground
            source={require("../../assets/dance.gif")}
            style={styles.background}
        >
            <View>
                <Text style={styles.title}> Iniciar Sesion</Text>
                <TextInput
                    placeholder="Nombre de usuario"
                    style={styles.input}
                    autoCapitalize="none"
                    value={formik.values.username}
                    onChangeText={(text) =>
                        formik.setFieldValue("username", text)
                    }
                />
                <TextInput
                    placeholder="Contrasena"
                    style={styles.input2}
                    autoCapitalize="none"
                    value={formik.values.password}
                    onChangeText={(text) =>
                        formik.setFieldValue("password", text)
                    }
                    secureTextEntry={true}
                />
                <Button title="Iniciar sesion" onPress={formik.handleSubmit} />
                <Text style={styles.error}>{formik.errors.username}</Text>
                <Text style={styles.error}>{formik.errors.password}</Text>
                <Text style={styles.error}>{error}</Text>
            </View>
        </ImageBackground>
    );
}

function initialValues() {
    return {
        username: "",
        password: "",
    };
}
function validationSchema() {
    return {
        username: Yup.string().required("El nombre de usuario es obligatorio"),
        password: Yup.string().required("La contrasena es obligatoria"),
    };
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 60,
        fontWeight: "bold",
        marginTop: 20,
        marginBottom: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
    },
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 110,
    },
    error: {
        textAlign: "center",
        color: "#f00",
        fontWeight: "bold",
        fontSize: 15,
        marginTop: 15,
    },
    background: {
        flex: 1,
        resizeMode: "contain",
    },
});
