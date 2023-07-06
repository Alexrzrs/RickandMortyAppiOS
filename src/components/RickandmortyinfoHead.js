import {
    Text,
    SafeAreaView,
    StyleSheet,
    Image,
    TouchableOpacity,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { MaterialIcons } from "@expo/vector-icons";
import { UserContext } from "../screen/Account";
import useAuth from "../hooks/useAuth";
import {
    addFavoriteApi,
    isFavoriteApi,
    removeFavoriteApi,
} from "../api/favorito";

export default function RickandmortyinfoHead({ characters }) {
    const { loggedUserData, setLoggedUserData } = useContext(UserContext);
    const [isFavorite, setIsFavorite] = useState(undefined);

    useEffect(() => {
        (async () => {
            const response = await isFavoriteApi(characters.id);
            setIsFavorite(response);
            console.log(response);
        })();
    }, []);

    const addFavorite = async () => {
        await addFavoriteApi(characters.id);
        setIsFavorite(true);
    };

    const removeFavorite = async () => {
        await removeFavoriteApi(characters.id);
        setIsFavorite(false);
    };

    const agregarFavoritos = async () => {
        if (isFavorite) {
            await removeFavorite();
            console.log("Eliminado de favoritos");
        } else {
            await addFavorite();
            console.log("Agregado a favoritos");
        }
    };

    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.characterNameText}>{characters.name}</Text>
            <Image source={{ uri: characters.image }} style={styles.image} />
            <Text style={styles.characterIdText}>ID: {characters.id}</Text>
            {loggedUserData && (
                <TouchableOpacity
                    style={styles.MaterialIcons}
                    onPress={agregarFavoritos}
                >
                    <MaterialIcons
                        name={isFavorite ? "favorite" : "favorite-border"}
                        size={32}
                        color="red"
                    />
                </TouchableOpacity>
            )}
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
    MaterialIcons: {
        position: "absolute",
        left: "66%",
        top: 230,

        borderRadius: 10,
    },
});
