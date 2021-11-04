import React from 'react';
import PropTypes from 'prop-types';

//styles
import { Wrapper } from './Button.styles';

const Button = ({ text, callback, isLight }) => (
    <Wrapper onClick={callback} isLight>
        {text}
    </Wrapper>
);

Button.propTypes = {
    text: PropTypes.string,
    callback: PropTypes.func,
    isLight: PropTypes.bool
}

export default Button;