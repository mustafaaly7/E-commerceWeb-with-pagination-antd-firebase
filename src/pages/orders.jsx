import { useContext } from "react"
import { Card } from "../components/card"
import { CartContext } from "../context/cartcontext"
import { Button, Image } from "antd"

function Orders() {
    const { cartItem, setCartItems, AddtoCart, updateCart
        , removeCart,
        isItemAdded } = useContext(CartContext)


    const totalPrice = cartItem.reduce(
        (value, data) => value + data.price * data.quantity, 0

    )
    const totalQuantity = cartItem.reduce((value, data) => data.quantity + value, 0)
    // console.log(totalQuantity);



    return (
        <div className="container mx-auto">
          <div className="flex gap-4 my-4">
            <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
              <h1 className="text-2xl font-semibold">{totalQuantity}</h1>
            </div>
            <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
              <h1 className="text-2xl font-semibold">${Math.floor(totalPrice)}</h1>
            </div>
            <div className="flex-grow border border-red-400 rounded flex justify-center items-center p-5">
              Proceed to Checkout
            </div>
          </div>
          {cartItem.map((data) => (
            <div key={data.id} className="flex border my-3 p-3">
              <Image src={data.thumbnail} height={100} width={100} />
              <div className="pl-3">
                <h1>{data.title}</h1>
                <h1>${data.price}</h1>
    
                <div className="flex gap-3 my-3">
                  <Button onClick={() => updateCart(data.id, "plus")}>
                    +
                  </Button>
                  <h1>{data.quantity}</h1>
                  <Button
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
          ))}
        </div>
      );
}

export {
    Orders
}