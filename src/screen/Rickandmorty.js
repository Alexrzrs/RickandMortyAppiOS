import {
    View,
    Text,
    SafeAreaView,
    ImageBackground,
    StyleSheet,
} from "react-native";
import React from "react";
import RickandmortyinfoHead from "../components/RickandmortyinfoHead";
import RickandmortyinfoBody from "../components/RickandmortyinfoBody";

export default function Rickandmorty({ route }) {
    const { characters } = route.params;
    // console.log(characters);
    return (
        <ImageBackground
            source={require("../assets/videobg4.gif")}
            style={styles.background}
        >
            <SafeAreaView>
                <RickandmortyinfoHead characters={characters} />
                <RickandmortyinfoBody characters={characters} />
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "stretch",
    },
});
