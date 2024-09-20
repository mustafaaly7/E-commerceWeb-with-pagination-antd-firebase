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


    function AddtoCart(item) {
        const arr = [...cartItem]
        const itemIndex = arr.findIndex((data) => data.id == item.id)
        if (itemIndex == -1) {
            arr.push({ ...item, quantity: 1 })
            // console.log(arr);

        } else {
            arr[itemIndex].quantity++
        }
        setCartItems([...arr])
    }

    const updateCart = (id, type) => {
        const arr = [...cartItem]
        const itemIndex = arr.findIndex((data) => data.id == id)

        if (type == "+") {
            arr[findIndex].quantity++
        } else {
            arr[findIndex].quantity--
        }
        setCartItems([...arr])
    }



    const removeCart = (id) => {
        const arr = [...cartItem]
        const findIndex = arr.findIndex((data) => data.id == id)
        arr.splice(findIndex, 1)
        setCartItems([...arr])
    }

    const isItemAdded = (id) => {
const arr = [...cartItem]
const findIndex = arr.findIndex((data)=> data.id == id)
if(findIndex == -1){
    return null

}else{
    return arr[findIndex]
}

    }





    return (


        <CartContext.Provider value={{
            cartItem, setCartItems, AddtoCart, updateCart
            , removeCart,
            isItemAdded
        }}>
            {children}
        </CartContext.Provider>
    )

}
export {
    CartContextProvider
}