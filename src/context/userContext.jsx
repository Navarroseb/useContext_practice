import { createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    return (
        <UserContext.Provider value={{
            developer: "Sebas",
            community: "4Geeks Academy"
        }}>
         {children}       
        </UserContext.Provider>

    )
}