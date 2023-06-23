import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "../screen/Account";
import Rickandmorty from "../screen/Rickandmorty";
import Favoritos from "../screen/Favoritos";
import Icon from "@expo/vector-icons/FontAwesome5";
import NavigationAccount from "./NavigationAccount";
import NavigationFavoritos from "./NavigationFavoritos";
import RickandmortyApi from "../api/RickandmortyApi";
import NavigationRickandmorty from "./NavigationRickandmorty";

export default function Navigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBarOptions={{ style: { backgroundColor: "#fff" } }}>
            <Tab.Screen
                name="Account"
                component={NavigationAccount}
                options={{
                    tabBarLabel: "Mi cuenta",
                    tabBarIcon: ({ color, size }) => {
                        <Icon name="user" color={color} size={size} />;
                    },
                }}
            />
            <Tab.Screen
                name="Rickandmorty"
                component={NavigationRickandmorty}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: () => renderIconRM(),
                }}
            />
            <Tab.Screen name="Favoritos" component={NavigationFavoritos} />
        </Tab.Navigator>
    );
}

const renderIconRM = () => {
    return (
        <Image
            source={require("../assets/iconoram.png")}
            style={{ height: 75, width: 75, top: -20 }}
        />
    );
};
