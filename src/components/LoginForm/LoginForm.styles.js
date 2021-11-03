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
        width: 100%;
        height: 30px;
        border: 1px solid var(--darkGrey);
        border-radius: 20px;
        margin: 10px 0;
        padding: 10px;
    }

    .error {
        color: red;
    }
`;