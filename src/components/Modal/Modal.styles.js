import styled from 'styled-components';

export const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.active ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    position: relative;
    width: 720px;
    height: 405px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--medGrey);
    padding: 2rem;

    @media screen and (max-width: 768px) {
        width: 80%;
        height: 300px;
    }
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    font-size: var(--fontBig);
    cursor: pointer;

    &:hover {
        color: var(--red);
    }
`;