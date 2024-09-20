import { createContext, useState } from "react";



export const CartContext = createContext()

function CartContextProvider({children}){
const [cartItem, setCartItems]= useState([])
const [isLoaded,setIsloaded] = useState(true)



return(


    <CartContext.Provider>
    {children}
    </CartContext.Provider>
)

}
export{
    CartContextProvider
}