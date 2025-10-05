import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function CreateAccount () {
    // set variables for email, password, and error that are changable by the code
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    async function createAccount() {
        try { // try to create an account with the given email and password
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate("/reserve");
        } catch (e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h1>Create an Account</h1>
        {error && <p>{error}</p>}
        <input
        type="text"
        id="username"
        placeholder="Enter an email"
        value= {email}
        onChange={e => setEmail(e.target.value)}/>
        <input
        type="password"
        id="password"
        placeholder="Enter a password"
        value={password}
        onChange={e => setPassword(e.target.value)}/>
        <button onClick={createAccount}>Create</button>
        <Link to="/signin">Already have an account? Sign In</Link>
        </>
    );
}