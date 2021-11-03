import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

//api
import API from '../../API';

//component
import Button from '../Button';

//styles
import { Wrapper, Content } from './LoginForm.styles';

//context
import { Context } from '../../context';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [offsetTop, setOffsetTop] = useState('');
    const [user, setUser] = useContext(Context);
    const navigate = useNavigate();
    const loginFormRef = useRef();

    const handleSubmit = async () => {
        setError(false);
        try {
            const requestToken = await API.getRequestToken();
            const sessionId = await API.authenticate(requestToken, username, password);
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

    useEffect(() => {
        const pressEnterListener = e => {
            if (e.code === 'Enter' || e.code === 'NumpadEnter') {
                e.preventDefault();
                handleSubmit();
            }
        };
        document.addEventListener('keydown', pressEnterListener);

        return () => {
            document.removeEventListener('keydown', pressEnterListener);
        };
    }, [handleSubmit]);

    useEffect(() => {
        !offsetTop && setOffsetTop(loginFormRef.current.getBoundingClientRect().top);
    }, [offsetTop]);

    return (
        <div ref={loginFormRef}>
            <Wrapper loginFormOffsetTop={offsetTop}>
                <Content>
                    {error && <div className='error'>There was an error!</div>}
                    <input
                        type='text'
                        value={username}
                        name='username'
                        id='username'
                        placeholder='Username'
                        autoComplete='off'
                        onChange={handleInput}
                    />
                    <input
                        type='password'
                        value={password}
                        name='password'
                        id='password'
                        placeholder='Password'
                        autoComplete='off'
                        onChange={handleInput}
                    />
                    <Button text='Log in' callback={handleSubmit} />
                    <p>Don't have account? <a href='https://www.themoviedb.org/signup' target='_blank'>Sign up now!</a></p>
                </Content>
            </Wrapper>
        </div>
    )
}

export default LoginForm;