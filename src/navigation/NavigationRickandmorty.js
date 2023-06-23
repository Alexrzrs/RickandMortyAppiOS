import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RickandMorty from "../screen/Rickandmorty";
import RickandmortyApi from "../api/RickandmortyApi";

export default function NavigationRickandmorty() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RickandMortyApi"
                component={RickandmortyApi}
                options={{
                    title: "",
                    headerTransparent: true,
                }}
            />
            <Stack.Screen name="Rickandmorty" component={RickandMorty} />
        </Stack.Navigator>
    );
}
