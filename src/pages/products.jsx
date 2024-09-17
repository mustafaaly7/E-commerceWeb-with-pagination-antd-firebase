import { Card, Pagination } from "antd";
import { useEffect, useState } from "react";
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
                    <div className="flex flex-wrap -m-4">

                        {loader ? (
                            <h1 className="text-center text-6xl text-black">LOADING.....</h1>
                        ) : (

                            products.map((data) => (
                                <Link className="lg:w-1/4 md:w-1/2 p-4 w-full" to={`/product/id/${data.id}`}>
                                    <Card product={data} key={data.id} />
                                </Link>

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