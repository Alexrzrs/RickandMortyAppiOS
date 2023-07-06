import {
    Text,
    View,
    TextInput,
    Button,
    StyleSheet,
    Keyboard,
    ImageBackground,
} from "react-native";
import React, { useContext, useState } from "react";
import { UserContext } from "../../screen/Account";
import { useFonts } from "expo-font";

export default function UserData() {
    const { loggedUserData, setLoggedUserData } = useContext(UserContext);
    //Configurar mas si es que se cambiaran los datos de la cuenta
    const [userName, setUserName] = useState("");
    const [fontsLoaded] = useFonts({
        rickfont: require("../../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <ImageBackground
            source={require("../../assets/rickbg3.gif")}
            style={styles.background}
        >
            <View style={styles.container}>
                <Text style={styles.bienvenida1}>bienvenido</Text>
                <Text style={styles.bienvenida2}>
                    {loggedUserData.firstName} {loggedUserData.lastName}
                </Text>
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Usuario: " + `${loggedUserData.username}`}
                    style={styles.input}
                />
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Correo: " + `${loggedUserData.email}`}
                    style={styles.input2}
                />
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Nombre: " + `${loggedUserData.firstName}`}
                    style={styles.input3}
                />
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Apellido: " + `${loggedUserData.lastName}`}
                    style={styles.input4}
                />
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Contraseña: ********"}
                    style={styles.input5}
                />
                <TextInput
                    value={userName}
                    onChangeText={(userName) => setUserName(userName)}
                    placeholder={"Favoritos: 0"}
                    style={styles.input5}
                />
                <Button title="Cerrar sesion" onPress={() => logOut()} />
            </View>
        </ImageBackground>
    );
    function logOut() {
        setLoggedUserData(undefined);
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "contain",
    },
    container: {
        display: "flex",
        alignItems: "center",
    },
    bienvenida1: {
        marginTop: 30,
        fontSize: 80,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    bienvenida2: {
        marginTop: 20,
        fontSize: 50,
        fontFamily: "rickfont",
        color: "white",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    input: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 50,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
    },
    input2: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
    },
    input3: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
    },
    input4: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
    },
    input5: {
        width: 300,
        height: 44,
        padding: 10,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: "#e8e8e8",
        borderRadius: 20,
    },
});
