import { useParams } from "react-router-dom"
import { CardDetail } from "../components/carddetail"
import { useEffect, useState } from "react"

function ProductDetail(){
    const{id} = useParams()
    const[selectedProduct,setSelectedProduct] = useState([])
    const [loader,setLoader] = useState(false)
    useEffect(()=>{
        setLoader(true)
        try {
            fetch(`https://dummyjson.com/products/${id}`)
    .then(res => res.json())
    .then((data)=>{
        setSelectedProduct(data)
    setLoader(false)});
            
        } catch (error) {
            console.log(error.message);
            
        }
    },[id])
    console.log(selectedProduct);
    
    return(
        <>
        {loader? (
                            <h1 className=" mx-auto text-center font-bold text-6xl text-black ">Loading.....</h1>

        ):(

            <CardDetail product = {selectedProduct}/>
        )}
        </>
    )
}

export{
    ProductDetail
}