import "react-native-gesture-handler";
import React, { useState, useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, LogBox, Text, View } from "react-native";
import Navigation from "./src/navigation/Navigation";
import { UserContext } from "./src/screen/Account";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();


export default function App() {
    const [loggedUserData, setLoggedUserData] = useState();
    const [appIsReady, setAppIsReady] = useState(false);
    const scheme = "dark";

    useEffect(() => {
        async function prepare() {
            try {
                // Keep the splash screen visible while we fetch resources
                await SplashScreen.preventAutoHideAsync();
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    LogBox.ignoreAllLogs();

    if (!appIsReady) {
        return null;
    }
    return (
        // <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <UserContext.Provider value={{ loggedUserData, setLoggedUserData }}>
            <NavigationContainer onReady={onLayoutRootView}>
                {/* <AuthProvider> */}
                <Navigation />
                {/* </AuthProvider> */}
            </NavigationContainer>
        </UserContext.Provider>
        // </View>
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
