import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <header className="fixed-top bg-white">
                <Navbar />
            </header>
            <main className="flex-grow-1 flex-shrink-1">
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout;