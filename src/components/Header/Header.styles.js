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

    @media screen and (max-width: 500px) {
        height: 80px;
    }
`;

export const HamburgerMenuImg = styled.img`
    width: 2rem;
    height: 2rem;
    display: none;

    @media screen and (max-width: 500px) {
        display: block;
    }

    :hover {
        width: 2.2rem;
        height: 2.2rem;
        transition: 0.3s;
    }
`;

export const NavBar = styled.ul`
    display: flex;
    align-items: center;
    padding-left: 0;

    li {
        list-style: none;
        padding: 0 10px;
        text-transform: uppercase;
        font-weight: bold;
    }

    a:hover {
        transition: 0.5s;
        color: var(--red);
    }

    li.active {
        color: var(--red);
    }

    @media screen and (max-width: 500px) {
        display: none;
    }
`;

export const MobileNavBar = styled.ul`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 0;
    margin: 0;
    background-color: rgba(0, 0, 0);
    z-index: 100;

    li {
        list-style: none;
        padding: 30px 0;
        text-transform: uppercase;
        font-weight: bold;
    }

    a:hover {
        transition: 0.5s;
        color: var(--red);
    }

    li.active {
        color: var(--red);
    }

    @media screen and (max-width: 500px) {
        display:${props => props.isShow ? 'flex' : 'none'};
    }
`;

export const LogoImg = styled.img`
    width: 200px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 500px) {
        width: 120px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;