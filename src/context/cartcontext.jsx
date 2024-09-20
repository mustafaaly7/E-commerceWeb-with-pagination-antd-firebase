import { createContext, useEffect, useState } from "react";



export const CartContext = createContext()

function CartContextProvider({ children }) {
    const [cartItem, setCartItems] = useState([])
    const [isLoaded, setIsloaded] = useState(true)

    useEffect(() => {
        const items = localStorage.getItem("cartItems")
        if (items) {
            setCartItems([...JSON.parse(items)])
        }
        setIsloaded(false)
    }, [])

    useEffect(() => {
        if (!isLoaded) {
            localStorage.setItem("cartItems", JSON.stringify(cartItem))
        }


    }, [cartItem])


function AddtoCart(item){
const arr = [...cartItem]
const itemIndex = arr.findIndex((data)=>data.id == item.id)
if(itemIndex == -1){
arr.push({...item, quantity : 1})
// console.log(arr);

}else{
    arr[itemIndex].quantity ++
}
setCartItems([...arr])
}






    return (


        <CartContext.Provider value={{cartItem ,setCartItems}}>
            {children}
        </CartContext.Provider>
    )

}
export {
    CartContextProvider
}