import { Link } from "react-router-dom";
import { Card } from "../components/card"
import { Button } from "antd";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartcontext";


function Home() {
    const { AddtoCart,isItemAdded } = useContext(CartContext)

    const [homeProducts, setHomeProducts] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        try {
            setLoader(true)
            fetch('https://dummyjson.com/products?limit=12')
                .then(res => res.json())
                .then((data) => {
                    setHomeProducts(data.products)
                    setLoader(false)

                });


        } catch (error) {
            console.log(error.message);


        }



    }, [])
    // console.log(homeProducts.title);
    return (
        <>
            <div className="flex justify-around my-6">
                <h1 className="text-center font-bold text-6xl  ">Trending Products</h1>
                <Link to={"/products"}>
                    <Button className="font-semi-bold text-3xl" type="primary"> See All</Button>
                </Link>
            </div>

            <section className="text-gray-600 body-font">

                <div className=" px-5 py-24 ">
                    <div className="flex flex-wrap   m-4 gap-x-4 gap-y-2 ">

                        {loader ? (
                            // loader 
                            <div className=" mx-auto custom-loader"></div>
                            

                        ) : (
                            homeProducts.map((data) => (
                                // console.log(data.thumbnail)
                                <div className="lg:w-1/4  p-4 md:mx-auto mx-auto transform hover:scale-105 transition-transform duration-300   border-4 shadow my-1  " >
                                    <Card product={data} />
                                    <Link to={`/product/id/${data.id}`} key={data.id} >
                                        <Button type="primary">See More </Button>
                                    </Link>

                                    <Button type="primary" className="mx-3" onClick={() => AddtoCart(data)} > {isItemAdded(data.id)?(
                                      `Added ${isItemAdded(data.id).quantity}`  
                                    ):(
                                        `Add To Cart`  
                                    ) 
                                }</Button>

                                </div>


                            )))}



                    </div>
                </div>
            </section>

        </>
    )
}

export {
    Home
}