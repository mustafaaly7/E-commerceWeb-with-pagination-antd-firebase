import { Card } from "../components/card"
import { Button } from "antd";

function Home(){
    return(
        <>
        <div className="flex justify-around my-6">
        <h1 className="text-center font-bold text-3xl ">Trending Products</h1> 
        <Button className="font-bold"> See All</Button> 

        </div>
        <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </div>
  </div>
</section>

        </>
    )
}

export{
    Home
}