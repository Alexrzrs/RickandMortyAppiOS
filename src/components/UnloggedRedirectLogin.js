import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    ImageBackground,
} from "react-native";
import React from "react";
import rickBackground from "../assets/coolbg.jpg";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import videobg4 from "../assets/videobg4.gif";

export default function UnloggedRedirectLogin() {
    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    const navigation = useNavigation();
    const redirectToLogin = () => {
        navigation.navigate("Account");
    };

    if (!fontsLoaded) {
        return undefined;
    }
    return (
        <View>
            {/* <Image source={rickBackground} style={styles.image} /> */}
            <Text style={styles.identify}>
                Identificate para ver los favoritos
            </Text>
            <Pressable
                style={({ pressed }) => [
                    styles.button,
                    pressed && styles.buttonPressed,
                ]}
                onPress={() => redirectToLogin()}
            >
                <Text style={styles.text}>Iniciar Sesion</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    image: { width: 400, height: 300, top: 30 },
    identify: {
        fontSize: 50,
        fontFamily: "rickfont",
        color: "rgb(182, 251, 152)",
        fontWeight: "900",
        textShadowColor: "rgb(75, 173, 197)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        textAlign: "center",
        marginTop: "70%",
    },
    button: {
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: "rgb(75, 173, 197)",
        width: 200,
        alignSelf: "center",
        borderRadius: 20,
        top: 10,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: "bold",
        letterSpacing: 0.25,
        color: "white",
        textAlign: "center",
    },
});
