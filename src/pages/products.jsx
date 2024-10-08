import { Button, Pagination } from "antd";
import { useContext, useEffect, useState } from "react";
import { Card } from "../components/card"

import { Link } from "react-router-dom";
import { ArrowDownOutlined, SearchOutlined } from "@ant-design/icons";
import { CartContext } from "../context/cartcontext";


function Products() {
    const { AddtoCart,isItemAdded } = useContext(CartContext)
    const [products, setProducts] = useState([])
    const [searched, setSearched] = useState('')
    const [loader, setLoader] = useState(false)
    const [skip, setSkip] = useState(0)
    const [total, setTotal] = useState(0)
    const [categories, setcategories] = useState([])
    const filteredProduct = products.filter((data) => data.title.toLowerCase().includes(searched.toLowerCase()))

    useEffect(() => {
        try {
            fetch('https://dummyjson.com/products/categories')
                .then(res => res.json())
                .then((data) => setcategories(data));
        } catch (error) {
            console.log(error.message);

        }

    }, [])
    // console.log(categories);




    useEffect(() => {
        setLoader(true)
        try {

            fetch(`https://dummyjson.com/products?limit=15&skip=${skip}`)
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

            <h1 className="mx-auto font-bold text-center my-4 underline text-6xl">All Products</h1>
            <div className=" my-6 flex flex-wrap w-1/2 items-center mx-auto">
                <input
                    type="text"
                    placeholder="Search Products Here..."
                    onChange={(e) => setSearched(e.target.value)}
                    className=" my-3 shadow placeholder:font-bold placeholder:text-2xl border-bold border xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                />
                <br />
                <select className="border-2 shadow mx-auto  font-bold text-xl border-black">
                    <option selected disabled  >Search By Categories</option>

                    {categories.map((data) => (
                        <option key={data.slug} className="font-bold" >{data.name}</option>

                    ))}

                    <ArrowDownOutlined />
                </select>


            </div>



            <section className="text-gray-600 body-font">

                <div className=" px-5 py-24 ">
                    <div className="flex flex-wrap   m-4 gap-x-4 gap-y-2 ">

                        {loader ? (
                            //loader 
                            <div className=" mx-auto custom-loader"></div>

                        ) : (
                            filteredProduct.map((data) => (
                                <div className="lg:w-1/4  p-4 md:mx-auto mx-auto transform hover:scale-105 transition-transform duration-300   border-2 shadow my-1  " >
                                    <Card product={data} />
                                    <Link to={`/product/id/${data.id}`} key={data.id} >
                                        <Button type="primary" >See More </Button>
                                    </Link>

                                    <Button type="primary" className="mx-3" onClick={() => AddtoCart(data)} > {isItemAdded(data.id)?(
                                      `Added ${isItemAdded(data.id).quantity}`  
                                    ):(
                                        `Add To Cart`  
                                    ) 
                                }</Button>
                                </div>
                            ))

                        )}






                    </div>
                </div>
            </section>
            <br />
            <br />
            <Pagination onChange={(num) => setSkip((num - 1) * 15)} align="center" defaultCurrent={1} total={total} pageSize={15} />
            <br />
            <br />

        </>
    )
}

export {
    Products
}