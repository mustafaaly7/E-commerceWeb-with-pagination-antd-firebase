import { Pagination } from "antd";
import { useEffect, useState } from "react";


function Products() {
    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        try {
            fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
                .then(res => res.json())
                .then((data) => {
                    setProducts(data.products)

                    setLoader(false)
                });


        } catch (error) {

            console.log(error.message);

        }



    }, [])
    return (
        <>





        </>
    )
}

export {
    Products
}