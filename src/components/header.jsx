import { Link, useNavigate } from "react-router-dom"
import logo from "../images/logo.png"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Badge } from "antd"
import { useContext } from "react"
import { userContext } from "../context/usercontext"
import { signOut } from "firebase/auth"
import { auth } from "../utilities/firebase"
import { CartContext, CartContextProvider } from "../context/cartcontext"

function Header() {
    const {cartItem} = useContext(CartContext)
    // console.log("cartItems" , cartItem);
    
    const { user, setUser } = useContext(userContext)
    const navigate = useNavigate()
    return (

        <>
            <header className="shadow-md font-[sans-serif] tracking-wide relative z-50">
                <section className="md:flex lg:items-center relative py-3 lg:px-10 px-4 border-gray-200 border-b bg-white lg:min-h-[80px] max-lg:min-h-[60px]">
                    <Link to={"/"} className="max-sm:w-full max-sm:mb-3 shrink-0">
                        <img
                            src={logo}
                            alt="logo"
                            className="w-[160px]"
                        />

                    </Link>
                    <div className="flex flex-wrap w-full items-center">
                        
                      <div id="containerAnimation" className=" mx-auto container-bottom-to-up">
  {/* <p class="top-to-bottom">hello me</p> */}

                        {user.isLogin ? (
                            <h1 className=" mx-auto font-bold text-center text-3xl font-mono top-to-bottom">Welcome <span className="underline">{user.email}</span></h1>
                            
                        ) : (
                            <h1 className="top-to-bottom  font-bold text-center text-3xl font-mono">Signup Now To get 10% Off</h1>
                        )}
                        </div>
                        {/* <input
                            type="text"
                            placeholder="Search something..."
                            className="xl:w-96 max-lg:w-full lg:ml-10 max-md:mt-4 max-lg:ml-4 bg-gray-100 focus:bg-transparent px-6 rounded h-11 outline-[#333] text-sm transition-all"
                            /> */}
                        <div className="ml-auto max-lg:mt-4">
                            <ul className="flex items-center">
                                <Link to="/products">
                                    <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            className="mr-2"
                                            viewBox="0 0 24 24"
                                        >
                                            <g data-name="Layer 2">
                                                <path
                                                    d="M14.5 12.75A3.22 3.22 0 0 1 12 11.6a3.27 3.27 0 0 1-2.5 1.15A3.22 3.22 0 0 1 7 11.6a2.91 2.91 0 0 1-.3.31 3.22 3.22 0 0 1-2.51.82 3.35 3.35 0 0 1-2.94-3.37v-.71a4.76 4.76 0 0 1 .24-1.5l1.57-4.7a1.75 1.75 0 0 1 1.66-1.2h14.56a1.75 1.75 0 0 1 1.66 1.2l1.57 4.7a4.76 4.76 0 0 1 .24 1.5v.71a3.35 3.35 0 0 1-2.92 3.37 3.2 3.2 0 0 1-2.51-.82c-.11-.1-.22-.22-.32-.33a3.28 3.28 0 0 1-2.5 1.17zm-9.78-10a.26.26 0 0 0-.24.17l-1.56 4.7a3.27 3.27 0 0 0-.17 1v.71a1.84 1.84 0 0 0 1.57 1.88A1.75 1.75 0 0 0 6.25 9.5a.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.67 1.67 0 0 0 1.75 1.75 1.76 1.76 0 0 0 1.75-1.75.75.75 0 0 1 1.5 0 1.75 1.75 0 0 0 1.93 1.74 1.84 1.84 0 0 0 1.57-1.88v-.71a3.27 3.27 0 0 0-.17-1l-1.56-4.7a.26.26 0 0 0-.24-.17z"
                                                    data-original="#000000"
                                                />
                                                <path
                                                    d="M20 22.75H4A1.76 1.76 0 0 1 2.25 21v-9.52a.75.75 0 0 1 1.5 0V21a.25.25 0 0 0 .25.25h16a.25.25 0 0 0 .25-.25v-9.53a.75.75 0 1 1 1.5 0V21A1.76 1.76 0 0 1 20 22.75z"
                                                    data-original="#000000"
                                                />
                                                <path
                                                    d="M15.5 22.75h-7a.76.76 0 0 1-.75-.75v-5a1.76 1.76 0 0 1 1.75-1.75h5A1.76 1.76 0 0 1 16.25 17v5a.76.76 0 0 1-.75.75zm-6.25-1.5h5.5V17a.25.25 0 0 0-.25-.25h-5a.25.25 0 0 0-.25.25z"
                                                    data-original="#000000"
                                                />
                                            </g>
                                        </svg>
                                        Products
                                    </li>
                                </Link>
                                <Link to="/Orders">
                                    <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                        <Badge count={cartItem.length} />
                                        <ShoppingCartOutlined />
                                        Orders
                                    </li>
                                </Link>





                                {/* <li className="max-lg:py-2 px-3 cursor-pointer">
                                    <span className="relative">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20px"
                                            height="20px"
                                            className="inline"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                                                data-original="#000000"
                                            />
                                        </svg>
                                        <span className="absolute left-auto -ml-1 -top-1 rounded-full bg-red-500 px-1 py-0 text-xs text-white">
                                            0
                                        </span>
                                    </span>
                                </li> */}
                                {/* {user.userLogin ? (


                                    <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                        <h4>{user.email}</h4>
                                        <button className=" mx-4 px-4 py-2 text-sm rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent" onClick={() => {
                                            signOut(auth)
                                            navigate("/login")
                                        }}>


                                            Sign Out
                                        </button>
                                    </li>
                                ) : ( */}
                                <li className="flex text-[15px] max-lg:py-2 px-3 hover:text-[#007bff] hover:fill-[#007bff]">
                                    {user.isLogin ? (
                                        <button className="px-4 py-2 text-sm rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent" onClick={() => {
                                            signOut(auth).then(() => {
                                                // Sign-out successful.
                                                alert("user Succesfully Logged Out")
                                                navigate('/auth')
                                            }).catch((error) => {
                                                console.log(error.message);

                                                // An error happened.
                                            });
                                        }}>


                                            SignOut
                                        </button>
                                    ) : (

                                        <button className="px-4 py-2 text-sm rounded font-semibold text-[#333] border-2 border-[#333] bg-transparent" onClick={() => {
                                            navigate("/auth/signup")
                                        }}>


                                            SignUp
                                        </button>
                                    )}
                                </li>

                                {/* )} */}




                            </ul>
                        </div>
                    </div>
                </section>

            </header>






        </>
    )

}

export {
    Header
}