import { View, Text, SafeAreaView } from "react-native";
import React, { useContext, createContext } from "react";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";

export const UserContext = createContext(null);

export default function Account() {
    const { loggedUserData } = useContext(UserContext);
    const auth = loggedUserData != undefined;
    return (
        <SafeAreaView style={{ flex: 1 }}>
            {auth ? <UserData /> : <LoginForm />}
        </SafeAreaView>
    );
}
