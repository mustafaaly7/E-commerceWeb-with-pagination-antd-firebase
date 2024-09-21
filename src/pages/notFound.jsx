import { ArrowRightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

 


 function NotFound(){
const navigate = useNavigate()

    return(
        <>
        
        <h1 className="text-6xl text-bold mx-auto my-6 text-center">THE PAGE YOU"RE LOOKING FOR DOESN"T EXIST</h1>


<div className="mx-auto flex item-center justify-center">
        <Button className=" my-6  text-2xl" onClick={()=> navigate("/")}>Return To Home Page <ArrowRightOutlined/></Button>
        </div>   
        </>
    )
 }
 export{
    NotFound
 }