import styled from 'styled-components';

import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
    background: ${({ backdrop }) =>
        backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'
    };
    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    display: flex;
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    width: 100%;
    padding: 20px 40px;
    color: var(--white);
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }
    
    .score {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
    }

    .director {
        margin: 0 0 0 40px;
    }

    .watch-trailer {
        display: inline-block;
        padding: 0.65rem 1.5rem;
        font-size: var(--fontSmall);
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
        color: #fff;
        background: var(--red);
        border: 0;
        border-radius: 35px;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);;
        margin: 1rem 0;
    }

    .watch-trailer:hover {
        color: #fff;
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }

    p {
        margin: 0;
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;