import AsyncStorage from "@react-native-async-storage/async-storage";
import { includes, pull } from "lodash";
import { FAVORITE_STORAGE } from "../utils/constants";

//Crear la función que trae los favoritos
export const getFavoriteApi = async () => {
    try {
        const response = await AsyncStorage.getItem(FAVORITE_STORAGE);
        return JSON.parse(response || []);
    } catch (error) {
        console.log(error);
    }
};
//Crear la función que añade favoritos
export const addFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        favorites.push(id);
        await AsyncStorage.setItem(FAVORITE_STORAGE, JSON.stringify(favorites));
    } catch (error) {
        console.log(error);
    }
};

//Crear la función que verifica si un personaje es favorito
export const isFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        return includes(favorites, id);
    } catch (error) {
        console.log(error);
        return false;
    }
};

//Crear la función que elimina un personaje de la lista
export const removeFavoriteApi = async (id) => {
    try {
        const favorites = await getFavoriteApi();
        const newFavorites = pull(favorites, id);
        await AsyncStorage.setItem(
            FAVORITE_STORAGE,
            JSON.stringify(newFavorites)
        );
    } catch (error) {
        console.log(error);
    }
};
