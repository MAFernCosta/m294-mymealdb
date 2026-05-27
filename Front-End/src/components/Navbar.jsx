import { Link, NavLink } from "react-router-dom";

function Navbar() {
    const navbarContent = [
        {
            label: "Home",
            to: "/",
            submenu: []
        },
        {
            label: "Categories",
            to: "",
            submenu: [
                {
                    label: "Seafood",
                    to:""
                },
                {
                    label: "Meat",
                    to:""
                },
            ]
        },
        {
            label: "Admin",
            to: "",
            submenu: [
                {
                    label: "Create a new Meal",
                    to:""
                }
            ]
        },
        {
            label: "About",
            to: "/about",
            submenu: []
        }
    ];
    return (
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center py-3 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4">My meal DB</span> </a>
                <ul className="nav nav-pills">
                    {navbarContent.map(({ label, to, submenu }) =>
                        submenu.length <= 0 ? (
                            <li className="nav-item" key={label}>
                                <NavLink to={to} className="nav-link" aria-current="page">{label}</NavLink>
                            </li>
                        ) :
                            <div key={label} className="dropdown">
                                <button to="" className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {label}
                                </button>
                                <ul className="dropdown-menu">
                                    { submenu.map( ({label, to}) => 
                                        <li key={label}><Link className="dropdown-item" to={to}>{label}</Link></li>
                                    )}
                                    
                                </ul>
                            </div>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;