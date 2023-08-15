import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        name: "Jane",
        age: 35
    })
    return (
        <UserContext.Provider value={{
            developer: "Sebas",
            community: "4Geeks Academy",
            year: 2023,
            user, setUser
        }}>
         {children}       
        </UserContext.Provider>

    )
}