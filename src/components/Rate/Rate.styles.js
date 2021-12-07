import styled from 'styled-components';

export const Wrapper = styled.div`
    margin-top: 2rem;

    h3 {
        margin: 0;
        padding-bottom: 0.5rem;
    }

    button {
        margin-top: 0.4rem;
        background-color: #004A7F;
        border-radius: 7px;
        border: none;
        color: #FFFFFF;
        cursor: pointer;
        display: block;
        font-size: var(--fontMed);
        padding: 6px 12px;
        text-align: center;
        animation: glowing 1500ms infinite;

        @keyframes glowing {
            0% { background-color: #ffd700; box-shadow: 0 0 3px #ffd700; }
            50% { background-color: #ffd700; box-shadow: 0 0 40px #ffd700; }
            100% { background-color: #ffd700; box-shadow: 0 0 3px #ffd700; }
        }
    }
`;