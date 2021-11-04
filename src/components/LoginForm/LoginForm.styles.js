import styled from 'styled-components';

import BG_LOGIN from '../../images/bg-login.jpg';

export const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - ${props => props.loginFormOffsetTop}px);
    background-image: url(${BG_LOGIN});
    background-position: center;
`;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0 auto;
    max-width: 320px;
    padding: 40px;
    color: var(--darkGrey);

    input {
        border: none;
        border-bottom: 1px solid var(--lightGrey);
        margin-bottom: 30px;
        background: none;
        color: var(--lightGrey);
        height: 35px;
        width: 300px;
        outline: 0;
        font-size: var(--fontSmall);
    }

    a {
        color: #FF0000;
    }

    .error {
        color: red;
    }
`;