import '../components/login.css';
import React from 'react';
import { useProfile } from '../components/profiles/profileContext.jsx';



export function Login(){

    const { setActiveProfileId, johnProfileId, defaultProfileId } = useProfile();
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [statusMessage, setStatusMessage] = React.useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'guest1' && password === 'guest1') {
            setActiveProfileId(johnProfileId);
            setStatusMessage('Logged in as John.');
            return;
        }

        setActiveProfileId(defaultProfileId);
        setStatusMessage('Invalid credentials. Using Default profile.');
    };
    
    return(
        <>
            <div className='loginLogo'>
                <img src={require('../components/images/SchoolDayLogo.png')} alt="placeholder"/>
            </div>
            <form className='textfield' onSubmit={handleSubmit}>
                <label>
                    Username: <input name="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </label>
                <br />
                <label>
                    Password: <input type='password' name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <br /><br />
                <button type="submit">Submit</button>
                {statusMessage && <p>{statusMessage}</p>}
            </form>
            <br />
            <div className='forgot'>
                <a href='' target='_blank' rel="noreferrer">Forgot Password?</a>
            </div>

        </>
    );
}
