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
`;

export const CloseButton = styled.span`
    position: absolute;
    top: 5px;
    right: 5px;
    display: inline-block;
    /* width: var(--fontSuperBig);
    height: var(--fontSuperBig); */
    font-size: var(--fontSuperBig);
    overflow-wrap: break-word;
    cursor: pointer;
    overflow: hidden;

    &:hover {
        color: var(--red);
    }
`;