import styled from "styled-components";

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
    width: 640px;
    height: 360px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
`;