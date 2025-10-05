import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function logIn () {
        console.log("LogIn function called");
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/reserve');
        } catch (e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h1>Sign In</h1>
        {error && <p>{error}</p>}
        <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value = {email}
            onChange={e => setEmail(e.target.value)}/>
        <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}/>
        <button onClick={logIn}>Log In</button>
        <br/>
        <Link to="/CreateAccount">Create an Account Here</Link>
        </>
    );
}