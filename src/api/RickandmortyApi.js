import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { API_URL } from "@env";
import axios from "axios";
import RickandmortyList from "../components/RickandmortyList";
import RickandmortyinfoHead from "../components/RickandmortyinfoHead";

export default function RickandmortyApi() {
    const [characters, setCharacters] = useState([]);
    const [nextUrl, setNextUrl] = useState([]);

    const loadMoreData = async () => {
        try {
            if (nextUrl) {
                const response = await axios.get(nextUrl);
                const newCharacters = response.data.results;
                setCharacters([...characters, ...newCharacters]);
                setNextUrl(response.data.info.next);
                // console.log("soynexturl " + nextUrl);
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL);
                setCharacters(response.data.results);
                setNextUrl(response.data.info.next);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <View>
            <RickandmortyList
                characters={characters}
                loadMoreData={loadMoreData}
                nextUrl={nextUrl}
            />
            <RickandmortyinfoHead characters={characters} />
        </View>
    );
}
