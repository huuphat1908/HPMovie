import React, { useEffect } from 'react';

import { Wrapper, Content, CloseButton } from '../Modal/Modal.styles';

const Modal = ({ children, active, callback }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'visible';
        }
    });

    return (
        <Wrapper active={active} onClick={callback}>
            <Content>
                {children}
                <CloseButton>x</CloseButton>
            </Content>
        </Wrapper>
    )
}

export default Modal;