import { Button, Pagination } from "antd";
import { useEffect, useState } from "react";
import { Card } from "../components/card"

import { Link } from "react-router-dom";
import { SearchOutlined } from "@ant-design/icons";


function Products() {
    const [products, setProducts] = useState([])
    const [searched, setSearched] = useState('')
    const [loader, setLoader] = useState(false)
    const [skip, setSkip] = useState(0)
    const [total, setTotal] = useState(0)


    useEffect(() => {
        setLoader(true)
        try {

            fetch(`https://dummyjson.com/products?limit=16&skip=${skip}`)
                .then(res => res.json())
                .then((data) => {
                    setProducts(data.products)
                    setTotal(data.total)
                    setLoader(false)
                    // console.log(products);
                    // console.log(total);




                });

        } catch (error) {
            console.log(error.message);



        }

    }, [skip])





    return (
        <>


            <section className="text-gray-600 body-font">

                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap  md:mx-auto m-4 ">
                        {loader ? (
                            <h1 className=" mx-auto text-center font-bold text-6xl text-black ">Loading.....</h1>

                        ) : (
                            products.map((data) => (
                                <div className="lg:w-1/4 md:w-1/2 p-4 md:mx-auto mx-auto   shadow my-1  " >
                                    <Card product={data} />
                                    <Link to={`/product/id/${data.id}`} key={data.id} >
                                        <Button>See More </Button>
                                    </Link>
                                </div>
                            ))

                        )}






                    </div>
                </div>
            </section>
            <br />
            <br />
            <Pagination onChange={(num) => setSkip((num - 1) * 16)} align="center" defaultCurrent={1} total={total} pageSize={16} />
            <br />
            <br />

        </>
    )
}

export {
    Products
}