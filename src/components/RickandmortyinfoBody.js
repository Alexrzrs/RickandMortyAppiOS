import { Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useFonts } from "expo-font";

export default function RickandmortyinfoBody({ characters }) {
    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    const [debut, setDebut] = useState("");
    // const longitudTexto = characters.name;
    // console.log(longitudTexto.length);
    const getEpisodeData = async () => {
        await axios
            .get(characters.episode[0])
            .then((res) => setDebut(res.data.episode + " - " + res.data.name));
    };

    useEffect(() => {
        getEpisodeData();
    }, []);

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.characterStatusText}>
                    Estatus: {characters.status}
                </Text>
                <Text style={styles.characterSpeciesText}>
                    Especie: {characters.species}
                </Text>
                <Text style={styles.characterTypeText}>
                    Tipo: {characters.type === "" ? "n/a" : characters.type}
                </Text>
                <Text style={styles.characterGenderText}>
                    Genero: {characters.gender}
                </Text>
                <Text style={styles.characterOriginText}>
                    Origen: {characters.origin && characters.origin.name}
                </Text>
                <Text style={styles.characterUbicacionText}>
                    Ubicacion: {characters.location && characters.location.name}
                </Text>
                <Text style={styles.characterDebutText}>Debut: {debut}</Text>
                {/* <Image source={{ uri: character.image }} style={styles.image} /> */}
            </SafeAreaView>
        </SafeAreaView>
    );
}

let alturaPrimerCampo = 260;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    characterStatusText: {
        position: "absolute",
        top: alturaPrimerCampo,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterSpeciesText: {
        position: "absolute",
        top: alturaPrimerCampo + 60,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterTypeText: {
        position: "absolute",
        top: alturaPrimerCampo + 120,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterGenderText: {
        position: "absolute",
        top: alturaPrimerCampo + 180,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterOriginText: {
        position: "absolute",
        top: alturaPrimerCampo + 240,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterUbicacionText: {
        position: "absolute",
        top: alturaPrimerCampo + 300,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    characterDebutText: {
        position: "absolute",
        top: alturaPrimerCampo + 360,
        left: "3%",
        backgroundColor: "#00154D",
        color: "black",
        color: "white",
        width: 400,
        borderRadius: 10,
        overflow: "hidden",
        textAlign: "center",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "rgb(75, 173, 197)",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
});
