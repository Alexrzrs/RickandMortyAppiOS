import "react-native-gesture-handler";
import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { UserContext } from "./src/screen/Account";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const [loggedUserData, setLoggedUserData] = useState();

    return (
        <UserContext.Provider value={{ loggedUserData, setLoggedUserData }}>
            <NavigationContainer>
                <Navigation />
            </NavigationContainer>
        </UserContext.Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
