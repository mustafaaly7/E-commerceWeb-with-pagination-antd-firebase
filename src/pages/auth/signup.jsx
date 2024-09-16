import { createUserWithEmailAndPassword } from "firebase/auth"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { addDoc, collection } from "firebase/firestore"
import { auth, db } from "../../utilities/firebase"

function Signup(){
    const [email, setEmail] = useState("")
    const [fullName, setFullname] = useState("")
    const [phoneNumber, setPhonenumber] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function SubmitHandler (e) {
        e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
   
   .then(() => {
                
                alert("User Successfully Created")
                navigate("/auth/login")
            })
            .catch((error) => {
                alert(error.message)
            })

            try {
                const docRef = addDoc(collection(db, "userInfo"), {
                    name: fullName,
                    emailAddress: email,
                    phn: phoneNumber,
                    
                  });
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }

    }

    return (
        <>
            <section className="LoginBody bg-gray-50 dark:bg-gray-900 ">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up to your account
                            </h1>

                            <form

                                onSubmit={SubmitHandler} className="space-y-4 md:space-y-6" >

                                <div>
                                    <label
                                        htmlFor="fullName"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your FullName
                                    </label>
                                    <input
                                        type="text"
                                        name="fullName"
                                        id="fullName"
                                        value={fullName}
                                        onChange={(e) => {
                                            setFullname(e.target.value)

                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>


                                <div>
                                    <label
                                        htmlFor="number"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your PhoneNumber
                                    </label>
                                    <input
                                        type="number"
                                        name="phoneNumber"
                                        id="phoneNumber"
                                        value={phoneNumber}
                                        onChange={(e) => {
                                            setPhonenumber(e.target.value)

                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>








                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)

                                        }}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="name@company.com"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        htmlFor="password"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                htmlFor="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>

                                </div>
                                <button
                                    type="submit"
                                    onClick={async() => {
                                        if (email.length < 6 || password.length < 6) {
                                            alert("please Enter Correct Info")
                                            return
                                        }
                                       
                                    }}
                                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                >
                                    Sign UP
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Already Have An Account?{" "}
                                    <Link
                                        to={"/auth/login"}
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Login
                                    </Link>
                                </p>
                            </form>

                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export{
    Signup
}