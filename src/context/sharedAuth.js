import { useContext } from "react";
import { UserContext } from "../screen/Account";

export const useAuth = () => {
    const { loggedUserData } = useContext(UserContext);
    const auth = loggedUserData != undefined;
    return auth;
};
