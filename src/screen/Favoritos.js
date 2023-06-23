import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
} from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function Favoritos() {
    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }
    return (
        <ImageBackground
            source={require("../assets/galaxy.gif")}
            style={styles.background}
        >
            <SafeAreaView>
                <Text style={styles.tituloFavs}>Favoritos</Text>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "contain",
    },
    tituloFavs: {
        fontSize: 50,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        textAlign: "center",
        marginTop: 20,
    },
});
