import { createContext, useEffect, useState } from "react";


export const userContext = createContext()
function UserContext({ children }) {
    const [user, setUser] = useState({
        isLogin: false,
        email: ''
    })
    useEffect(() => {


    }, [])

    return (
        <userContext.Provider>
            {children}
        </userContext.Provider>

    )

}