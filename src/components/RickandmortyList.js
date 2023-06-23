import {
    View,
    Text,
    SafeAreaView,
    FlatList,
    StyleSheet,
    ActivityIndicator,
    ImageBackground,
} from "react-native";
import React from "react";
import Rickandmortycard from "./Rickandmortycard";

export default function RickandmortyList(props) {
    const { characters, loadMoreData, nextUrl } = props;
    const loadMore = () => {
        // console.log("Cargando personajes");
        {
            loadMoreData();
        }
    };
    // console.log(characters);
    return (
        <SafeAreaView>
            <FlatList
                data={characters}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                keyExtractor={(characters) => String(characters.id)}
                renderItem={({ item }) => (
                    <Rickandmortycard characters={item} />
                )}
                contentContainerStyle={StyleSheet.container}
                onEndReached={loadMore}
                onEndReachedThreshold={0.1}
                ListFooterComponent={
                    <ActivityIndicator
                        size="large"
                        color="#D21F3C"
                        style={styles.spiner}
                    />
                }
                // style={{ backgroundColor: "#000" }}
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
