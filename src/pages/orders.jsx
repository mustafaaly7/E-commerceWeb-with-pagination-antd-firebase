import { useContext } from "react"
import { Card } from "../components/card"
import { CartContext } from "../context/cartcontext"

function Orders() {
    const { cartItem, setCartItems, AddtoCart, updateCart
        , removeCart,
        isItemAdded } = useContext(CartContext)


    const totalPrice = cartItem.reduce(
        (value, data) => data.price * data.quantity, 0

    )
    const totalQuantity = cartItem.reduce((value, data) => data.quantity + value, 0)
    // console.log(totalQuantity);



    return (
        <>
            <div className="container mx-auto">
                <div className="flex gap-4 my-4">
                    <div className="flex-growborder border-red-400 rounded flex justify-center items-center p-5">
                        <h1 className="text-2xl font-semibold">Hello</h1>
                    </div>
                    <div className="flex-growborder border-red-400 rounded flex justify-center items-center p-5">
                        <h1 className="text-2xl font-semibold">Hello</h1>
                    </div>
                    <div className="flex-growborder border-red-400 rounded flex justify-center items-center p-5">
                        <h1 className="text-2xl font-semibold">Hello</h1>
                    </div>

                </div>

            </div>

        </>
    )
}

export {
    Orders
}