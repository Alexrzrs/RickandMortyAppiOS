import { View, Text, SafeAreaView } from "react-native";
import React, { useContext } from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import { createContext } from "react";

export const UserContext = createContext(null);

export default function Account() {
    const { loggedUserData, setLoggedUserData } = useContext(UserContext);
    console.log(loggedUserData);
    var valorAuth = null;
    valorAuth =
        loggedUserData != undefined ? (valorAuth = loggedUserData) : null;
    const auth = valorAuth;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {auth ? <UserData /> : <LoginForm />}
            <Text></Text>
        </SafeAreaView>
    );
}
