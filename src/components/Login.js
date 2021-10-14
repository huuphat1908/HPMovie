import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

//api
import API from '../API';

//component
import Button from './Button';

//styles
import { Wrapper } from './Login.styles';

//context
import { Context } from '../context';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken, username, password);
            console.log(sessionId);
            setUser({
                sessionId: sessionId.session_id,
                username
            });
            navigate('/');
        } catch {
            setError(true);
        }
    };
    const handleInput = e => {
        const { name, value } = e.currentTarget;
        if (name === 'username') {
            setUsername(value);
        }
        if (name === 'password') {
            setPassword(value);
        }
    };

    return (
        <Wrapper>
            {error && <div className='error'>There was an error!</div>}
            <label for='username'>Username:</label>
            <input
                type='text'
                value={username}
                name='username'
                id='username'
                onChange={handleInput}
            />
            <label for='password'>Password:</label>
            <input
                type='password'
                value={password}
                name='password'
                id='password'
                onChange={handleInput}
            />
            <Button text='Login' callback={handleSubmit} />
        </Wrapper>
    )
}

export default Login;