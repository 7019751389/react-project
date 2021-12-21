import react from "react";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="name">Active</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="name">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="name">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" href="name">Disabled</a>
                    </li>
                </ul>
            </div>
        </nav>
    );

}