import { Link } from 'react-router-dom';
import useUser from './useUser';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';

export default function NavBar () {
    const { isLoading, user } = useUser();

    const navigate = useNavigate();

    return(
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
                { isLoading ? <li>loading...</li> : (
                    <>
                    {user && (
                        <div style={{marginRight:10}}>
                            Logged in as {user.email}
                        </div>
                    )}
                    <>
                        {user
                            ? <button className="navbar-signin" onClick={() =>signOut(getAuth())}>Sign Out</button>
                            : <button className="navbar-signin" onClick={() =>navigate('/signin')}>Sign In</button>}
                    </>
                    </>
                )}

            </div>
        </nav>
    );
}