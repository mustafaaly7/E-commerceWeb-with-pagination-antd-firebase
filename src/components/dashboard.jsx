import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

function Dashboard() {

    return (

        <>
            <Header />

            <Outlet />

            <Footer />
        </>
    )
}