import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import Rickandmortycard from "./Rickandmortycard";
import axios from "axios";
import { API_URL } from "@env";
import { useFocusEffect } from "@react-navigation/native";

export default function RickandmortyList(props) {
    const { characters } = props;
    const [personajes, setPersonajes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchUrls = characters.map((id) => `${API_URL}/${id}`);
                const responses = await Promise.all(
                    fetchUrls.map((url) => axios.get(url))
                );
                const fetchedData = responses.map((response) => response.data);
                setPersonajes(fetchedData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [characters]);

    useFocusEffect(
        React.useCallback(() => {
            setPersonajes([]); // Reset the personajes array when the component is focused
        }, [])
    );

    return (
        <SafeAreaView>
            <FlatList
                data={personajes}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(personaje) => String(personaje.id)}
                renderItem={({ item }) => (
                    <Rickandmortycard characters={item} />
                )}
                contentContainerStyle={StyleSheet.container}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    spiner: {
        marginTop: 20,
        marginBottom: 50,
    },
    background: {
        flex: 1,
        resizeMode: "stretch",
    },
});
