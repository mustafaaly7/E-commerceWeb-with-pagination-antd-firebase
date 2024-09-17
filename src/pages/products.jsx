import {  Button, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Card } from "../components/card"

import { Link } from "react-router-dom";


function Products() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        try {
            setLoader(true)
            fetch('https://dummyjson.com/products?limit=12')
                .then(res => res.json())
                .then((data) => {
                    setProducts(data.products)

                    setLoader(false)
                });


        } catch (error) {

            console.log(error.message);

        }



    }, [])
    console.log(products);

    return (
        <>
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap  md:mx-auto m-4 ">

                        {loader ? (
                            <h1 className="  mx-auto text-center font-bold text-6xl text-black">Loading.....</h1>
                        ) : (

                            products.map((data) => (
                                <div className="lg:w-1/4 md:w-1/2 p-4 md:mx-auto mx-auto   shadow my-1  " >
                                    <Card product={data}  />
                                <Link  to={`/product/id/${data.id}`} key={data.id} >
                                    <Button>See More </Button>
                                </Link>
                                </div>
                                // console.log(data.thumbnail)

                            )))}

                    </div>
                </div>
            </section>




        </>
    )
}

export {
    Products
}