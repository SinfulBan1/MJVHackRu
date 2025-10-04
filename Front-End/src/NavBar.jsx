import { Link } from 'react-router-dom';

export default function NavBar () {
    return(
        <>
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/">
                    <img src="/assets/busclipart.png" alt="Home" className="navbar-logo" />
                </Link>
            </div>
            <div className="navbar-center">
                <Link to="/reserve" className="navbar-link">Reserve</Link>
            </div>
            <div className="navbar-right">
                <Link to="/signin">
                <button className="navbar-signin">Sign In</button>
                </Link>
            </div>
        </nav>
        </>
    );
}