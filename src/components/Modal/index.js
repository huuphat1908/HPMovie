import React, { useState } from 'react';

import { Wrapper, Content } from '../Modal/Modal.styles';

const Modal = ({ children, active, callback }) => {
    if (active) {
        document.body.style.overflow = 'hidden';
    }
    else {
        document.body.style.overflow = 'visible';
    }

    return (
        <Wrapper active={active} onClick={callback}>
            <Content>
                {children}
            </Content>
        </Wrapper>
    )
}

export default Modal;