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
    li:first-of-type{
        padding-right: 7px;
    }
    li:not(:first-of-type) {
        padding: 0 7px;
    }
`;