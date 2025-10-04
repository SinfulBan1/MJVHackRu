import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn () {
    const {email, setEmail} = useState("");
    const {password, setPassword} = useState("");
    const {error, setError} = useState("");

    const navigate = useNavigate();

    async function logIn () {
        try {
            await signInWithEmailAndPassword(getAuth(), email, password);
            navigate('/reserve');
        } catch (e) {
            setError(e.message);
        }
    }

    return(
        <>
        <h3>Sign In</h3>
        {error && <p>{error}</p>}
        <input
        type="text"
        id="username"
        placeholder="Enter your username"
        value = {email}
        onChange={e => setEmail(e.target.value)}/>
        </>
    );
}