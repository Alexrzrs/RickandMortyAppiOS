import { Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { useFonts } from "expo-font";

export default function RickandmortyinfoHead({ characters }) {
    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }
    console.log(characters);

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.characterNameText}>{characters.name}</Text>
            <Image source={{ uri: characters.image }} style={styles.image} />
            <Text style={styles.characterIdText}>ID: {characters.id}</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    image: {
        top: 60,
        position: "absolute",
        width: 200,
        height: 200,
        bottom: 10,
        borderRadius: 10,
    },
    characterNameText: {
        top: 10,
        fontSize: 28,
        fontWeight: "900",
        textAlign: "center",
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterIdText: {
        position: "absolute",
        top: 235,
        left: "45%",
        backgroundColor: "#00154D",
        color: "black",
        fontWeight: "900",
        lineHeight: 15,
        color: "white",
        borderRadius: 10,
        padding: 4,
        overflow: "hidden",
    },
});
