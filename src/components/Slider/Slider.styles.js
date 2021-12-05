import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: var(--maxWidth);
    margin: 40px auto;
    padding: 0 20px;

    h1 {
        color: var(--lightGrey);
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;

export const Content = styled.div`
    li {
        margin-right: 14px;
    }
`;