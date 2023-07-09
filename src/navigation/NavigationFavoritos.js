import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Favoritos from "../screen/Favoritos";
import RickandMorty from "../screen/Rickandmorty";

export default function NavigationFavoritos() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Favoritos"
                component={Favoritos}
                options={{ title: "Favoritos" }}
            />
            <Stack.Screen name="Rickandmorty" component={RickandMorty} />
        </Stack.Navigator>
    );
}
