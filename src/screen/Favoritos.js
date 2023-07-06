import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    ImageBackground,
    Button,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import { useFonts } from "expo-font";
import { getFavoriteApi } from "../api/favorito";
import { UserContext } from "../screen/Account";
import RickandmortyListFavoritos from "../components/RickandmortyListFavoritos";
import { useFocusEffect } from "@react-navigation/native";

export default function Favoritos() {
    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    const [characters, setCharacters] = useState([]);
    const { loggedUserData, setLoggedUserData } = useContext(UserContext);

    const fetchFavorites = async () => {
        const response = await getFavoriteApi();
        setCharacters(response);
    };

    const checkFavorito = async () => {
        const response = await getFavoriteApi();
        console.log(response);
        console.log(characters);
    };

    useFocusEffect(
        React.useCallback(() => {
            let isActive = true;
            if (loggedUserData) {
                fetchFavorites();
            }
            return () => {
                isActive = false;
            };
        }, [loggedUserData])
    );

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
                {/* <Button title="Actualizar Favoritos" onPress={checkFavorito} /> */}
                {!loggedUserData ? (
                    <Text style={{ color: "white" }}>Usuario no logeado</Text>
                ) : (
                    <RickandmortyListFavoritos characters={characters} />
                )}
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
