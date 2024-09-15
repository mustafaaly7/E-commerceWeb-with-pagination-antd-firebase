import { ArrowRightOutlined, FacebookOutlined, GoogleOutlined, GooglePlusOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Link } from "react-router-dom"

function Auth() {
    return (
        <>
            <div className="w-screen h-screen bg-gray-200 flex items-center justify-center">
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-4xl font-semibold mb-6">Signup Now OR Login</h1>
                    <button className="my-2 w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                        SIGNUP WITH GOOGLE <GooglePlusOutlined className="ml-2" />
                    </button>
                    <button className="my-2 w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                        SIGNUP WITH FACEBOOK <FacebookOutlined className="ml-2" />
                    </button>
                    <Link to={"/auth/signup"} className="my-2 w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center"> <button >
                        SIGNUP WITH GMAIL / Firebase <GoogleOutlined className="ml-2" />
                    </button></Link>

                        <Link to={"/auth/login"}className="my-2 w-full bg-blue-500 text-white py-2 px-4 rounded shadow hover:scale-105 transition-transform duration-300 flex items-center justify-center"><button >
                            Already Have an Account? Login <ArrowRightOutlined className="ml-2" />
                        </button></Link >
                        </div>
                </div>


            </>
            )
}

            export {
                Auth
            }