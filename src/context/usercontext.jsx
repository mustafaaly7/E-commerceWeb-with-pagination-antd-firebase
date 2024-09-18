import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utilities/firebase";


export const userContext = createContext()

function UserContextProvider({ children }) {
    const [user, setUser] = useState({
        isLogin: false,
        email: ''
    })
    useEffect(() => {
onAuthStateChanged(auth,(user)=>{
if(user){
setUser({
    email: user.email,
    isLogin :true
})

}else{
    setUser({
        isLogin:false,
        email : ''
    })
}



})
    }, [])

    return (
        <userContext.Provider value={{user,setUser}}>
            {children}
        </userContext.Provider>

    )

}
export{
    UserContextProvider
}