import { useContext, useState } from "react"
import { Card } from "../components/card"
import { CartContext } from "../context/cartcontext"
import { Button, Image, message } from "antd"
import CheckoutModal from "../components/checkoutModal"
import { addDoc, auth, collection, db } from "../utilities/firebase"
import { useNavigate } from "react-router-dom"

function Orders() {
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { cartItem, setCartItems, AddtoCart, updateCart
        , removeCart,
        isItemAdded ,ClearCart} = useContext(CartContext)


    const totalPrice = cartItem.reduce(
        (value, data) => value + data.price * data.quantity, 0

    )
    const totalQuantity = cartItem.reduce((value, data) => data.quantity + value, 0)
    // console.log(totalQuantity);
    const checkOutOrder = async (values) => {
        const checkOutobject = {
            ...values,
            status: "pending",
            totalPrice: totalPrice,
            totalQuantity: totalQuantity,
            user: auth.currentUser ? auth.currentUser.uid : "guest",
            items: cartItem.map((data) => (
                `productTitle : ${data.title} , price : ${data.price} , quantity : ${data.quantity}`
            )

            )
        }

        const docRef = addDoc(collection(db,"order"),checkOutobject).then(message.success("Your Order succesfully has been placed"))

        const encodedTxt = encodeURI(JSON.stringify(checkOutobject))
        // console.log("encoded txt" ,encodedTxt);
        window.open(`https://wa.me/923042281289?text=${encodedTxt}`, "_blank")
        ClearCart()
        setIsModalOpen(false)
navigate("/")
    }





    return (
        <div className="container mx-auto">
            <CheckoutModal
                isModalOpen={isModalOpen}
                handleOk={() => setIsModalOpen(false)}
                handleCancel={() => setIsModalOpen(false)}
                checkoutOrder={checkOutOrder}
            />



            <div className="flex gap-4 my-4">
                <div className="flex-grow border border-blue-600 bg-blue-600 rounded flex justify-center items-center p-5">
                    <h1 className="text-2xl font-semibold text-white ">TOTAL QUANTITY : <span className="underline">{totalQuantity}</span></h1>
                </div>
                <div className="flex-grow border border-blue-600  bg-blue-600 rounded flex justify-center items-center p-5">
                    <h1 className="text-2xl font-semibold text-white"> YOUR TOTAL BILL : <span className="underline">${Math.floor(totalPrice)}</span></h1>
                </div>
                <div onClick={() => setIsModalOpen(true)} className="flex-grow border bg-blue-600 cursor-pointer hover:bg-blue-500 border-blue-600 rounded flex justify-center items-center p-5">
                    <h1 className="text-2xl font-semibold text-white">
                        Proceed to Checkout

                    </h1>
                </div>
            </div>
            {cartItem.map((data) => (
                <div key={data.id} className="flex border my-3 p-3">
                    <Image src={data.thumbnail} height={100} width={100} />
                    <div className="pl-5">
                        <h1 className="text-bold text-2xl">{data.title}</h1>
                        <h1 className="text-bold text-2xl">${data.price}</h1>

                        <div className="flex gap-3 my-3">
                            <Button className="border-blue-500 text-bold text-2xl bg-blue-500 text-white" onClick={() => updateCart(data.id, "plus")}>
                                +
                            </Button>
                            <h1 className="text-bold text-2xl">{data.quantity}</h1>
                            <Button className="border-blue-500 text-bold text-2xl bg-blue-500 text-white"
                                onClick={() => {
                                    if (data.quantity <= 1) {
                                        removeCart(data.id);
                                    } else {
                                        updateCart(data.id, "minus");
                                    }
                                }}
                            >
                                -
                            </Button>
                        </div>
                    </div>
                </div>
            ))
            }

            <div>

            </div>
        </div>
    );
}

export {
    Orders
}