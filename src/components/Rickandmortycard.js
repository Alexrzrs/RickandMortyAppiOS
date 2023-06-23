import {
    View,
    Text,
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
    ImageBackground,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function Rickandmortycard(props) {
    const { characters } = props;
    console.log(props);
    const navigation = useNavigation();
    const goToPersonaje = () => {
        navigation.navigate("Rickandmorty", {
            characters: characters,
        });
    };

    const [fontsLoaded] = useFonts({
        rickfont: require("../../assets/fonts/get_schwifty.ttf"),
    });

    if (!fontsLoaded) {
        return undefined;
    }

    return (
        <TouchableWithoutFeedback onPress={goToPersonaje}>
            <View style={styles.card}>
                <View style={styles.marginCard}>
                    <View style={styles.colorCard}>
                        <Text style={styles.number}>
                            {`${characters.id}`.padStart(3, 0)}
                        </Text>
                        <View style={styles.containerText}>
                            <Text style={styles.name} number0fLines={3}>
                                {characters.name}
                            </Text>
                        </View>
                        <Image
                            source={{ uri: characters.image }}
                            style={styles.image}
                        />
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        flexGrow: 1,
        padding: 16,
        height: 130,
        padding: 5,
    },
    marginCard: {
        flex: 1,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 10,
        ShadowColor: "#000",
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    colorCard: {
        flex: 1,
        padding: 5,
        borderRadius: 10,
        backgroundColor: "#000",
    },
    name: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "#fff",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    containerText: {
        width: 90,
    },
    image: {
        position: "absolute",
        bottom: 2,
        right: 2,
        width: 75,
        height: 75,
        bottom: 10,
        borderRadius: 10,
    },
    number: {
        position: "absolute",
        right: 10,
        color: "#fff",
        fontSize: 20,
        fontFamily: "rickfont",
        color: "#fff",
        fontWeight: "900",
        textShadowColor: "rgb(182, 251, 152)",
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        marginTop: 3,
    },
    background: {
        flex: 1,
        resizeMode: "contain",
    },
});
