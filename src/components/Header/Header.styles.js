import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    height: 131px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);
    position: relative;
    a {
        color: var(--white);
        text-decoration: none;
    }
`;

export const NavBar = styled.ul`
    display: flex;
    li {
        list-style: none;
        padding: 0 10px;
        text-transform: uppercase;
    }
`;

export const LogoImg = styled.img`
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;