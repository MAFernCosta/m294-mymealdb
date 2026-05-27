import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
    return (
        <div>
            <header>
                <Navbar />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout;