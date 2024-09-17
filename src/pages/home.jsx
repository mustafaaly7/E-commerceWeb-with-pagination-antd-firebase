import { Link } from "react-router-dom";
import { Card } from "../components/card"
import { Button } from "antd";
import { useEffect, useState } from "react";


function Home() {
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
                <h1 className="text-center font-bold text-3xl underline ">Trending Products</h1>
                <Link to={"/products"}>
                    <Button className="font-semi-bold" type="primary"> See All</Button>
                </Link>
            </div>
            
            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {loader ? (
                            <h1 className=" mx-auto text-center font-bold text-6xl text-black ">Loading.....</h1>

                        ) : (
                            homeProducts.map((data) => (
                                // console.log(data.thumbnail)
                                <div className="lg:w-1/4 md:w-1/2 p-4 md:mx-auto mx-auto   shadow my-1  " >
                                    <Card product={data}  />
                                <Link  to={`/product/id/${data.id}`} key={data.id} >
                                    <Button>See More </Button>
                                </Link>
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