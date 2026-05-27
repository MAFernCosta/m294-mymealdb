import { Link } from "react-router-dom";

function Footer() {

    return (
        <>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                    <div className="col-md-4 d-flex align-items-center">
                        <span className="mb-3 mb-md-0 text-body-secondary">© {new Date().getFullYear()} My meal DB</span>
                    </div>
                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                        <li className="ms-3">
                            <Link
                                className="pe-2 link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-offset-3"
                                to="/"
                                aria-label="Home"
                            >
                                Home
                            </Link>
                            <Link
                                className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover link-offset-3"
                                to="/about"
                                aria-label="About"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;